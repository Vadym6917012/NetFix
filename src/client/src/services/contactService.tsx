import type { ContactFormData, ApiResponse } from '../types';

// Base URL — change to your .NET Core API address
const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'https://localhost:7286/api';

/**
 * Submit contact form to .NET Core Web API
 * Endpoint: POST /api/contact
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/application`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Handle HTTP errors (400, 500, etc.)
    const error: ApiResponse = await response.json().catch(() => ({
      success: false,
      message: 'Помилка сервера. Спробуйте пізніше.',
    }));
    throw new Error(error.message || 'Network error');
  }

  return response.json();
};
