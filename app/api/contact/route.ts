import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const backendUrl = process.env.BACKEND_API_URL;
    const tenantDomain = process.env.TENANT_DOMAIN;

    if (!backendUrl || !tenantDomain) {
      console.error("Missing environment variables: BACKEND_API_URL or TENANT_DOMAIN");
      return NextResponse.json(
        { message: "Internal Server Error: Missing configuration" },
        { status: 500 }
      );
    }

    const response = await fetch(`${backendUrl}/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Tenant-Domain": tenantDomain,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
