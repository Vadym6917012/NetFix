import type { ContactFormData, ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

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
