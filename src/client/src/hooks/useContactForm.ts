import { useState } from 'react';
import { type ContactFormData } from '../types';
import { submitContactForm } from '../services/contactService';

interface FormState {
  values: ContactFormData;
  errors: Partial<ContactFormData>;
  isLoading: boolean;
  isSuccess: boolean;
  serverError: string | null;
}

const INITIAL_VALUES: ContactFormData = {
  fullname: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const useContactForm = () => {
  const [state, setState] = useState<FormState>({
    values: INITIAL_VALUES,
    errors: {},
    isLoading: false,
    isSuccess: false,
    serverError: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      errors: { ...prev.errors, [name]: '' },
      serverError: null,
    }));
  };

  const validate = (): boolean => {
    const { fullname, phone, email, service } = state.values;
    const errors: Partial<ContactFormData> = {};

    if (!fullname.trim()) errors.fullname = "Введіть ім'я";
    if (!phone.trim()) errors.phone = 'Введіть телефон';
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone))
      errors.phone = 'Невірний формат телефону';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = 'Невірний формат email';
    if (!service) errors.service = 'Виберіть послугу';

    setState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState((prev) => ({ ...prev, isLoading: true, serverError: null }));

    try {
      await submitContactForm(state.values);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: true,
        values: INITIAL_VALUES,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        serverError: err instanceof Error ? err.message : 'Невідома помилка',
      }));
    }
  };

  const resetSuccess = () =>
    setState((prev) => ({ ...prev, isSuccess: false }));

  return { ...state, handleChange, handleSubmit, resetSuccess };
};

export default useContactForm;
