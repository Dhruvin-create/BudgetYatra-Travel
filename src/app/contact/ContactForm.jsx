'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/utils/validation';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.valid) { setErrors(validation.errors); return; }
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
    } catch {
      setStatus('error');
      setSubmitMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
          { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
          { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
        ].map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">{label} *</label>
            <input
              type={type} id={id} name={id}
              value={formData[id]} onChange={handleChange}
              placeholder={placeholder}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors[id] ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors[id] && <p className="mt-1 text-sm text-red-600">{errors[id]}</p>}
          </div>
        ))}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
          <textarea
            id="message" name="message" rows={6}
            value={formData.message} onChange={handleChange}
            placeholder="Your message..."
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
        <button
          type="submit" disabled={status === 'loading'}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {submitMessage && (
          <div className={`p-4 rounded-lg ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}
