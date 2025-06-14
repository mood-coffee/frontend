'use client';

import { useState } from 'react';
import { turkishCities, businessTypes } from '@/data/cities';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  city: string;
  address: string;
  businessType: string;
  monthlyAmount: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function WholesaleForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+90 ',
    companyName: '',
    city: '',
    address: '',
    businessType: '',
    monthlyAmount: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhoneNumber = (phone: string): boolean => {
    // Sadece sayıları al
    const numbersOnly = phone.replace(/\D/g, '');
    
    // Türk telefon numarası formatları:
    // +90 5xx xxx xx xx (mobil - 13 haneli)
    // +90 2xx xxx xx xx (sabit hat - 13 haneli)
    // 05xx xxx xx xx (mobil ulusal - 11 haneli)
    // 02xx xxx xx xx (sabit hat ulusal - 11 haneli)
    
    if (numbersOnly.startsWith('90')) {
      // +90 ile başlıyorsa 13 hane olmalı
      if (numbersOnly.length !== 13) return false;
      // +90 5xx (mobil) veya +90 2xx (sabit hat) kontrolü
      const thirdDigit = numbersOnly[2];
      return thirdDigit === '5' || thirdDigit === '2';
    } else if (numbersOnly.startsWith('0')) {
      // 0 ile başlıyorsa 11 hane olmalı
      if (numbersOnly.length !== 11) return false;
      // 05xx (mobil) veya 02xx (sabit hat) kontrolü
      const secondDigit = numbersOnly[1];
      return secondDigit === '5' || secondDigit === '2';
    }
    
    return false;
  };

  const formatPhoneNumber = (value: string): string => {
    // Sadece sayıları al
    const numbersOnly = value.replace(/\D/g, '');
    
    // Eğer boşsa +90 döndür
    if (numbersOnly.length === 0) {
      return '+90 ';
    }
    
    // Eğer 90 ile başlıyorsa +90 ekle
    if (numbersOnly.startsWith('90')) {
      const remaining = numbersOnly.slice(2);
      if (remaining.length === 0) return '+90 ';
      if (remaining.length <= 3) return `+90 ${remaining}`;
      if (remaining.length <= 6) return `+90 ${remaining.slice(0, 3)} ${remaining.slice(3)}`;
      if (remaining.length <= 8) return `+90 ${remaining.slice(0, 3)} ${remaining.slice(3, 6)} ${remaining.slice(6)}`;
      return `+90 ${remaining.slice(0, 3)} ${remaining.slice(3, 6)} ${remaining.slice(6, 8)} ${remaining.slice(8, 10)}`;
    }
    
    // Eğer 0 ile başlıyorsa, +90 0xxx formatına çevir
    if (numbersOnly.startsWith('0')) {
      const withoutZero = numbersOnly.slice(1);
      if (withoutZero.length === 0) return '+90 ';
      if (withoutZero.length <= 3) return `+90 ${withoutZero}`;
      if (withoutZero.length <= 6) return `+90 ${withoutZero.slice(0, 3)} ${withoutZero.slice(3)}`;
      if (withoutZero.length <= 8) return `+90 ${withoutZero.slice(0, 3)} ${withoutZero.slice(3, 6)} ${withoutZero.slice(6)}`;
      return `+90 ${withoutZero.slice(0, 3)} ${withoutZero.slice(3, 6)} ${withoutZero.slice(6, 8)} ${withoutZero.slice(8, 10)}`;
    }
    
    // Normal durumda +90 ekle
    if (numbersOnly.length <= 3) return `+90 ${numbersOnly}`;
    if (numbersOnly.length <= 6) return `+90 ${numbersOnly.slice(0, 3)} ${numbersOnly.slice(3)}`;
    if (numbersOnly.length <= 8) return `+90 ${numbersOnly.slice(0, 3)} ${numbersOnly.slice(3, 6)} ${numbersOnly.slice(6)}`;
    return `+90 ${numbersOnly.slice(0, 3)} ${numbersOnly.slice(3, 6)} ${numbersOnly.slice(6, 8)} ${numbersOnly.slice(8, 10)}`;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Ad validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Ad alanı zorunludur';
    }

    // Soyad validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Soyad alanı zorunludur';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    // Phone validation
    if (!formData.phone.trim() || formData.phone.trim() === '+90') {
      newErrors.phone = 'Telefon alanı zorunludur';
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Geçerli bir Türkiye telefon numarası giriniz (örn: +90 555 123 45 67)';
    }

    // Company name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Firma adı zorunludur';
    }

    // City validation
    if (!formData.city) {
      newErrors.city = 'Şehir seçimi zorunludur';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Adres alanı zorunludur';
    }

    // Business type validation
    if (!formData.businessType) {
      newErrors.businessType = 'İşletme türü seçimi zorunludur';
    }

    // Monthly amount validation
    if (!formData.monthlyAmount.trim()) {
      newErrors.monthlyAmount = 'Aylık ortalama miktar zorunludur';
    } else if (isNaN(Number(formData.monthlyAmount)) || Number(formData.monthlyAmount) <= 0) {
      newErrors.monthlyAmount = 'Geçerli bir miktar giriniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Telefon numarası için özel işlem
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '+90 ',
        companyName: '',
        city: '',
        address: '',
        businessType: '',
        monthlyAmount: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Başvurunuz Alındı!</h3>
        <p className="text-green-700 mb-4">
          Toptan satış başvurunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Yeni Başvuru Yap
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-natural">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ad */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
            Ad *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Adınızı giriniz"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.firstName ? 'border-red-500' : 'border-natural'
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        {/* Soyad */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
            Soyad *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Soyadınızı giriniz"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.lastName ? 'border-red-500' : 'border-natural'
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ornek@email.com"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.email ? 'border-red-500' : 'border-natural'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+90 555 123 45 67"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.phone ? 'border-red-500' : 'border-natural'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          <p className="text-xs text-neutral mt-1">
            Mobil: +90 5XX XXX XX XX • Sabit: +90 2XX XXX XX XX
          </p>
        </div>

        {/* Firma Adı */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-primary mb-2">
            Firma Adı *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Firma adınızı giriniz"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.companyName ? 'border-red-500' : 'border-natural'
            }`}
          />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
        </div>

        {/* Şehir */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-primary mb-2">
            Şehir *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.city ? 'border-red-500' : 'border-natural'
            }`}
          >
            <option value="">Şehir seçiniz</option>
            {turkishCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        {/* İşletme Türü */}
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-primary mb-2">
            İşletme Türü *
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.businessType ? 'border-red-500' : 'border-natural'
            }`}
          >
            <option value="">İşletme türü seçiniz</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
        </div>

        {/* Aylık Ortalama Miktar */}
        <div>
          <label htmlFor="monthlyAmount" className="block text-sm font-medium text-primary mb-2">
            Aylık Ortalama Miktar (KG) *
          </label>
          <input
            type="number"
            id="monthlyAmount"
            name="monthlyAmount"
            value={formData.monthlyAmount}
            onChange={handleInputChange}
            placeholder="50"
            min="1"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.monthlyAmount ? 'border-red-500' : 'border-natural'
            }`}
          />
          {errors.monthlyAmount && <p className="text-red-500 text-sm mt-1">{errors.monthlyAmount}</p>}
        </div>
      </div>

      {/* Adres */}
      <div className="mt-6">
        <label htmlFor="address" className="block text-sm font-medium text-primary mb-2">
          Adres *
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Tam adresinizi giriniz"
          rows={3}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 ${
            errors.address ? 'border-red-500' : 'border-natural'
          }`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* Mesaj */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Mesajınız (İsteğe Bağlı)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Ek bilgi ve taleplerinizi buraya yazabilirsiniz..."
          rows={4}
          className="w-full px-4 py-3 border border-natural rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gönderiliyor...
            </>
          ) : (
            'Başvuru Gönder'
          )}
        </button>
      </div>

      <div className="mt-4 text-sm text-neutral text-center">
        * işaretli alanlar zorunludur
      </div>
    </form>
  );
} 