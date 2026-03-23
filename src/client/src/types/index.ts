// Contact form data sent to .NET Core API
export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

// API response shape
export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}

// Service card type
export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Why-us stat type
export interface StatItem {
  value: string;
  label: string;
}
