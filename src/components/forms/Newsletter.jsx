'use client';

import { useState } from 'react';
import { validateNewsletterEmail } from '@/lib/utils/validation';

export default function Newsletter({ variant = 'inline' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateNewsletterEmail(email);
    if (!validation.valid) {
      setStatus('error');
      setMessage(validation.error);
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  const isFooter = variant === 'footer';

  return (
    <div className={isFooter ? '' : 'bg-gray-50 rounded-xl p-8'}>
      {!isFooter && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600">
            Get the latest travel tips and destination guides delivered to your inbox
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`flex-1 px-4 py-3 rounded-lg border ${
              status === 'error' ? 'border-error-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              isFooter ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white'
            }`}
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isFooter
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-primary-600 hover:bg-primary-700 text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <p
            className={`text-sm ${
              status === 'success' ? 'text-success-600' : 'text-error-600'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
