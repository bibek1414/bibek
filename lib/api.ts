"use client";

export interface ContactFormData {
  name: string;
  email?: string;
  phone_number?: string;
  message: string;
  [key: string]: unknown; // For honeypot
}

export interface FieldErrors {
  [fieldName: string]: string[];
}

export interface ApiErrorData {
  message?: string;
  error?: {
    code?: number;
    message?: string;
    params?: {
      constraint_type?: string;
      constraint?: string;
      field_errors?: FieldErrors;
      [key: string]: unknown;
    };
  };
  [key: string]: unknown;
}

export interface ApiError extends Error {
  status: number;
  data: ApiErrorData;
  fieldErrors?: FieldErrors;
}

export const getApiBaseUrl = () => "https://nepdora.baliyoventures.com";
export const getTenantDomain = () => "bibek.nepdora.com";

export const handleApiError = async (response: Response): Promise<Response> => {
  if (!response.ok) {
    const errorData = (await response.json().catch(() => ({}))) as ApiErrorData;

    let errorMessage =
      errorData.message || `HTTP ${response.status}: ${response.statusText}`;

    // Handle validation errors (400)
    if (response.status === 400 && errorData.error?.params?.field_errors) {
      const fieldErrors = errorData.error.params.field_errors;

      // Flatten nested field errors and normalize to arrays
      const flattenErrors = (obj: unknown, prefix = ""): FieldErrors => {
        const result: FieldErrors = {};

        if (typeof obj === "string") {
          result[prefix || "field"] = [obj];
        } else if (Array.isArray(obj)) {
          result[prefix || "field"] = obj.map(String);
        } else if (obj && typeof obj === "object") {
          Object.entries(obj).forEach(([key, value]) => {
            // Skip "data" wrapper, use prefix directly
            const nextPrefix =
              key === "data" ? prefix : prefix ? `${prefix}.${key}` : key;
            Object.assign(result, flattenErrors(value, nextPrefix));
          });
        }

        return result;
      };

      const flattenedErrors = flattenErrors(fieldErrors);
      const errorMessages = Object.entries(flattenedErrors).map(
        ([field, messages]) => `${field}: ${messages.join(", ")}`
      );

      if (errorMessages.length > 0) {
        errorMessage = `Validation failed: ${errorMessages.join("; ")}`;
      }

      const error = new Error(errorMessage) as ApiError;
      error.status = response.status;
      error.data = errorData;
      error.fieldErrors = flattenedErrors;
      throw error;
    }

    // Handle unique constraint error (409) and other errors with params
    if (response.status === 409 && errorData.error?.params) {
      const { constraint_type, constraint, ...fieldErrors } =
        errorData.error.params;

      // Check if params contain field-level error messages (like email, etc.)
      const errorFields = Object.keys(fieldErrors).filter(
        key => typeof fieldErrors[key] === "string"
      );

      if (errorFields.length > 0) {
        // Use the first field error message directly
        errorMessage = String(fieldErrors[errorFields[0]]);

        const error = new Error(errorMessage) as ApiError;
        error.status = response.status;
        error.data = errorData;
        error.fieldErrors = errorFields.reduce((acc, field) => {
          acc[field] = [String(fieldErrors[field])];
          return acc;
        }, {} as FieldErrors);
        throw error;
      }

      // Fallback to constraint-based messages
      if (constraint_type === "unique" && constraint === "unique_together") {
        errorMessage =
          "This entry already exists. Please use a different value.";
      } else if (constraint_type === "unique") {
        errorMessage =
          "This entry already exists. Please use a different value.";
      }
    }

    // Handle other specific status codes
    if (response.status === 413) {
      errorMessage = "File size too large. Maximum allowed size is 5MB.";
    }

    if (response.status === 415) {
      errorMessage = "Invalid file type. Please upload a valid image file.";
    }

    const error = new Error(errorMessage) as ApiError;
    error.status = response.status;
    error.data = errorData;
    throw error;
  }
  return response;
};

export const createContact = async (contactData: ContactFormData) => {
  const BASE_API_URL = getApiBaseUrl();
  const response = await fetch(`${BASE_API_URL}/api/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-Domain": getTenantDomain(),
    },
    body: JSON.stringify(contactData),
  });

  await handleApiError(response);
  return await response.json();
};
