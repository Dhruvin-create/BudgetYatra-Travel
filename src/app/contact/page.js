'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/utils/validation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setSubmitMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Need help planning budget travel India itineraries? Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.name ? 'border-error-500' : 'border-gray-300'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-error-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.email ? 'border-error-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error-600">{errors.email}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.subject ? 'border-error-500' : 'border-gray-300'
                }`}
                placeholder="What is this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-error-600">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.message ? 'border-error-500' : 'border-gray-300'
                }`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-error-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Message */}
            {submitMessage && (
              <div
                className={`p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-success-50 text-success-800'
                    : 'bg-error-50 text-error-800'
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-600 mb-4">
            Email: <a href="mailto:hello@budgetyatra.com" className="text-primary-600 hover:text-primary-700">hello@budgetyatra.com</a>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-600">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-primary-600">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-primary-600">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
