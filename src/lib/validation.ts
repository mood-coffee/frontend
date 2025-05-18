/**
 * Form ve veri doğrulama yardımcı işlevleri
 * 
 * Bu modül, formlar ve veri girişleri için doğrulama işlevlerini içerir.
 * İleriki aşamalarda zod veya io-ts gibi doğrulama kütüphaneleriyle
 * değiştirilebilir veya genişletilebilir.
 */

import logger from './logger';

// E-posta adresi doğrulama
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Zorunlu alan kontrolü
export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

// Minimum uzunluk kontrolü
export function minLength(value: string, length: number): boolean {
  return value.trim().length >= length;
}

// Maksimum uzunluk kontrolü
export function maxLength(value: string, length: number): boolean {
  return value.trim().length <= length;
}

// Sayı kontrolü
export function isNumeric(value: string): boolean {
  return !isNaN(parseFloat(value)) && isFinite(Number(value));
}

// Telefon numarası doğrulama (basit)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

/**
 * Form doğrulama sonuçları için tip
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Form doğrulama yardımcısı
 * 
 * @param formData Form verileri
 * @param rules Doğrulama kuralları
 * @returns Doğrulama sonucu
 */
export function validateForm(
  formData: Record<string, unknown>,
  rules: Record<string, (value: unknown) => boolean | { isValid: boolean; message?: string }>
): ValidationResult {
  const errors: Record<string, string> = {};
  let isValid = true;

  try {
    Object.entries(rules).forEach(([field, validator]) => {
      const value = formData[field];
      
      const result = validator(value);
      
      if (typeof result === 'boolean') {
        if (!result) {
          errors[field] = `${field} is invalid`;
          isValid = false;
        }
      } else {
        if (!result.isValid) {
          errors[field] = result.message || `${field} is invalid`;
          isValid = false;
        }
      }
    });
  } catch (error) {
    logger.error('Form validation error', error as Error);
    isValid = false;
  }

  return { isValid, errors };
}

// Genel doğrulama yardımcıları
export const validators = {
  required: (value: string) => ({
    isValid: isRequired(value),
    message: 'This field is required'
  }),
  
  email: (value: string) => ({
    isValid: isValidEmail(value),
    message: 'Please enter a valid email address'
  }),
  
  minLength: (length: number) => (value: string) => ({
    isValid: minLength(value, length),
    message: `Must be at least ${length} characters`
  }),
  
  maxLength: (length: number) => (value: string) => ({
    isValid: maxLength(value, length),
    message: `Must be no more than ${length} characters`
  }),
  
  numeric: (value: string) => ({
    isValid: isNumeric(value),
    message: 'Please enter a valid number'
  }),
  
  phone: (value: string) => ({
    isValid: isValidPhone(value),
    message: 'Please enter a valid phone number'
  })
};

// Create validation object before exporting as default
const validation = {
  isValidEmail,
  isRequired,
  minLength,
  maxLength,
  isNumeric,
  isValidPhone,
  validateForm,
  validators
};

export default validation; 