'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/Button';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'İsim gereklidir';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Geçersiz e-posta adresi';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Konu gereklidir';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // This would be a real API call in a production environment
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-natural">
      <h2 className="text-2xl font-bold text-primary mb-6">İletişime Geçin</h2>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
          Mesajınız için teşekkür ederiz! En kısa sürede size geri döneceğiz.
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
            İsim
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-natural'} bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent`}
            placeholder="Adınız"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-natural'} bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent`}
            placeholder="eposta@ornek.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-1">
            Konu
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-red-500' : 'border-natural'} bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent`}
            placeholder="Neyle ilgili?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-natural'} bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent`}
            placeholder="Mesajınızı buraya yazın..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
        
        <div>
          <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
          </Button>
        </div>
      </form>
    </div>
  );
} 