"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Mail, Phone, MapPin, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { profileData } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { createContact, ContactFormData, ApiError } from "@/lib/api";
import { toast } from "sonner";

// ─── Animated contact row ─────────────────────────────────────────────────────

const ContactRow = ({
  icon: Icon,
  label,
  children,
  index,
  inView,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
  index: number;
  inView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const delay = 0.2 + index * 0.12;

  return (
    <motion.div
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box — Y-axis flip on entry */}
      <motion.div
        className="relative w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 overflow-hidden"
        initial={{ rotateY: -90, opacity: 0 }}
        animate={inView ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.55, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: "400px" }}
      >
        {/* Idle rock */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={
            hovered
              ? { backgroundColor: "rgb(59,130,246)", borderColor: "rgb(59,130,246)" }
              : { backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }
          }
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`relative z-10 transition-colors duration-200 ${hovered ? "text-white" : "text-brand-blue"}`}
          animate={!hovered ? { rotate: [0, 2, 0, -2, 0] } : { rotate: 0 }}
          transition={
            !hovered
              ? { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 1.2 }
              : {}
          }
        >
          <Icon size={20} />
        </motion.span>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
        {children}
      </motion.div>
    </motion.div>
  );
};

// ─── Social icon ──────────────────────────────────────────────────────────────

const SocialIcon = ({
  href,
  icon: Icon,
  index,
  inView,
}: {
  href: string;
  icon: React.ElementType;
  index: number;
  inView: boolean;
}) => {
  const [spinning, setSpinning] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground overflow-hidden"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.6 + index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        backgroundColor: "rgb(59,130,246)",
        color: "rgb(255,255,255)",
        borderColor: "rgb(59,130,246)",
        scale: 1.15,
      }}
      onHoverStart={() => setSpinning(true)}
      onHoverEnd={() => setSpinning(false)}
    >
      <motion.span
        animate={spinning ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ display: "flex" }}
      >
        <Icon size={18} />
      </motion.span>
    </motion.a>
  );
};

// ─── Animated input ───────────────────────────────────────────────────────────

const AnimatedInput = ({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  multiline,
  rows,
  index,
  inView,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  multiline?: boolean;
  rows?: number;
  index: number;
  inView: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const active = focused || hasValue;

  const inputClass =
    "w-full px-5 py-4 bg-white/5 rounded-xl outline-none text-white placeholder:text-white/20 transition-colors duration-200 resize-none border-transparent border";

  return (
    <motion.div
      className="space-y-2 relative"
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Floating label */}
      <motion.label
        htmlFor={id}
        className="block text-sm font-medium text-muted-foreground"
        animate={active ? { color: "rgb(59,130,246)", y: 0 } : { color: "rgba(160,160,180,1)", y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>

      {/* Border trace container */}
      <div className="relative">
        {/* Rotating border glow on focus */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
          style={{
            background: focused
              ? "conic-gradient(from 0deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.7) 20%, rgba(139,92,246,0.4) 50%, rgba(59,130,246,0) 70%)"
              : "none",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px",
          }}
          animate={focused ? { rotate: 360 } : { rotate: 0 }}
          transition={
            focused
              ? { rotate: { duration: 2, ease: "linear", repeat: Infinity } }
              : {}
          }
        />

        {/* Static border */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none border"
          animate={
            focused
              ? { borderColor: "rgba(59,130,246,0.5)" }
              : hasValue
                ? { borderColor: "rgba(255,255,255,0.12)" }
                : { borderColor: "rgba(255,255,255,0.08)" }
          }
          transition={{ duration: 0.2 }}
        />

        {multiline ? (
          <textarea
            id={id}
            required={required}
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={inputClass}
          />
        ) : (
          <input
            type={type}
            id={id}
            required={required}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={inputClass}
          />
        )}
      </div>
    </motion.div>
  );
};

// ─── Submit button ────────────────────────────────────────────────────────────

const SubmitButton = ({ submitted, loading }: { submitted: boolean; loading: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      type="submit"
      disabled={loading || submitted}
      className="relative w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed border border-white/10 shadow-xl transition-all duration-300"
      animate={
        submitted
          ? { backgroundColor: "rgb(34,197,94)", color: "rgb(255,255,255)" }
          : hovered
            ? { backgroundColor: "rgb(255,255,255)", scale: 1.01 }
            : { backgroundColor: "rgba(255,255,255,0.95)", scale: 1 }
      }
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Shimmer */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
        }}
        initial={{ x: "-100%" }}
        animate={hovered && !submitted ? { x: "150%" } : { x: "-100%" }}
        transition={hovered ? { duration: 0.5, ease: "easeInOut" } : { duration: 0 }}
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.span
            key="check"
            className="flex items-center gap-2 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            <motion.span
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check size={18} strokeWidth={3} />
            </motion.span>
            Message Sent!
          </motion.span>
        ) : (
          <motion.span
            key="send"
            className="flex items-center gap-2 text-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Send Message
            <motion.span
              animate={hovered ? { x: 3 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={18} />
            </motion.span>
          </motion.span>
        )}
      </AnimatePresence>
      
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </motion.button>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const Contact = () => {
  const [formState, setFormState] = useState<ContactFormData>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    website: "", // Honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formState.website) {
      console.log("Spam detected");
      return;
    }

    setLoading(true);
    try {
      const { name, email, phone_number, message } = formState;
      const submitData = { name, email, phone_number, message };
      await createContact(submitData);
      setSubmitted(true);
      toast.success("Message sent successfully!");
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", phone_number: "", message: "", website: "" });
      }, 2800);
    } catch (error) {
      const apiError = error as ApiError;
      toast.error(apiError.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialIconMap: Record<string, React.ElementType> = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    Facebook: FaFacebook,
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
          {/* ── Left: Contact Info ───────────────────────────────────────── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -36, filter: "blur(10px)" }}
            animate={leftInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <motion.h3
                className="text-3xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 12 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Contact Information
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={leftInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                I&apos;m currently looking for new opportunities and collaborations. Whether you
                have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </motion.p>
            </div>

            {/* Contact rows */}
            <div className="space-y-6">
              <ContactRow icon={Mail} label="Email Me" index={0} inView={leftInView}>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-lg text-white font-semibold hover:text-brand-blue transition-colors"
                >
                  {profileData.email}
                </a>
              </ContactRow>

              <ContactRow icon={Phone} label="Call Me" index={1} inView={leftInView}>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-lg text-white font-semibold hover:text-brand-blue transition-colors"
                >
                  {profileData.phone}
                </a>
              </ContactRow>

              <ContactRow icon={MapPin} label="Location" index={2} inView={leftInView}>
                <p className="text-lg text-white font-semibold">Hetauda, Nepal</p>
              </ContactRow>
            </div>

            {/* Socials */}
            <div className="pt-2">
              <motion.p
                className="text-sm font-medium text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={leftInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.55 }}
              >
                Social Presence
              </motion.p>
              <div className="flex items-center gap-4">
                {profileData.socials.map((social, idx) => {
                  const Icon = socialIconMap[social.name];
                  if (!Icon) return null;
                  return (
                    <SocialIcon
                      key={idx}
                      href={social.url}
                      icon={Icon}
                      index={idx}
                      inView={leftInView}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ──────────────────────────────────────────────── */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 36, filter: "blur(10px)" }}
            animate={rightInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Drifting ambient blobs */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/10 blur-[80px] -z-10 rounded-full"
              animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple/8 blur-[60px] -z-10 rounded-full"
              animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden */}
              <div className="hidden">
                <input
                  type="text"
                  name="website"
                  value={formState.website as string}
                  onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <AnimatedInput
                id="name"
                label="Name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="John Doe"
                index={0}
                inView={rightInView}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedInput
                  id="email"
                  label="Email (optional)"
                  type="email"
                  value={formState.email || ""}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  index={1}
                  inView={rightInView}
                />
                <AnimatedInput
                  id="phone_number"
                  label="Phone Number (optional)"
                  type="tel"
                  value={formState.phone_number || ""}
                  onChange={(e) => setFormState({ ...formState, phone_number: e.target.value })}
                  placeholder="+977 98..."
                  index={1.5}
                  inView={rightInView}
                />
              </div>
              <AnimatedInput
                id="message"
                label="Message"
                required
                multiline
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi, I'd like to talk about..."
                index={2}
                inView={rightInView}
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 }}
              >
                <SubmitButton submitted={submitted} loading={loading} />
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};