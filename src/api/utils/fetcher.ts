// src/api/utils/fetcher.ts
import { ApiError } from "../types";

export class FetchError extends Error implements ApiError {
  constructor(
    public message: string,
    public code: string,
    public status: number
  ) {
    super(message);
  }
}

export async function fetcher<T>(
  url: string,
  options: Omit<RequestInit, "body"> & { body?: unknown } = {}
): Promise<T> {
  const { body, ...fetchOptions } = options;

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new FetchError(
        error.message || "An error occurred",
        error.code || "UNKNOWN_ERROR",
        response.status
      );
    }

    const res = response.json();
    return res;
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }
    throw new FetchError("Network error", "NETWORK_ERROR", 0);
  }
}
