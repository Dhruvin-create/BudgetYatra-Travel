'use client';

import { useState, useEffect } from 'react';
import { getAllDestinations } from '@/lib/data/destinations';

export default function BudgetCalculator() {
  const [step, setStep] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    days: 3,
    travelers: 1,
    accommodation: 'budget',
    foodPreference: 'local',
    transport: 'public',
    activities: 'few'
  });
  const [result, setResult] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const destinations = getAllDestinations();

  const accommodationOptions = [
    { value: 'budget', label: 'Budget', icon: '🏠', multiplier: 1, price: '₹500-800/night' },
    { value: 'mid', label: 'Mid-Range', icon: '🏨', multiplier: 2, price: '₹1500-2500/night' },
    { value: 'luxury', label: 'Luxury', icon: '⭐', multiplier: 3.5, price: '₹3500+/night' }
  ];

  const foodOptions = [
    { value: 'local', label: 'Local Eateries', icon: '🍛', multiplier: 1, price: '₹200-400/day' },
    { value: 'restaurants', label: 'Restaurants', icon: '🍽️', multiplier: 1.8, price: '₹500-800/day' },
    { value: 'fine', label: 'Fine Dining', icon: '🥘', multiplier: 3, price: '₹1000+/day' }
  ];

  const transportOptions = [
    { value: 'public', label: 'Public Transport', icon: '🚌', multiplier: 1, price: '₹200-400/day' },
    { value: 'rental', label: 'Bike/Scooter', icon: '🛵', multiplier: 1.5, price: '₹400-600/day' },
    { value: 'cab', label: 'Private Cab', icon: '🚗', multiplier: 2.5, price: '₹800-1200/day' }
  ];

  const activityOptions = [
    { value: 'few', label: 'Few Activities', icon: '🎯', multiplier: 1, price: '₹500-1000/day' },
    { value: 'moderate', label: 'Moderate', icon: '🎨', multiplier: 1.8, price: '₹1500-2500/day' },
    { value: 'many', label: 'Adventure Packed', icon: '🎢', multiplier: 2.5, price: '₹3000+/day' }
  ];

  const calculateBudget = () => {
    const selectedDest = destinations.find(d => d.slug === formData.destination);
    if (!selectedDest) return;

    const baseAccommodation = 600;
    const baseFood = 300;
    const baseTransport = 300;
    const baseActivities = 800;

    const accommodation = baseAccommodation * accommodationOptions.find(o => o.value === formData.accommodation).multiplier;
    const food = baseFood * foodOptions.find(o => o.value === formData.foodPreference).multiplier;
    const transport = baseTransport * transportOptions.find(o => o.value === formData.transport).multiplier;
    const activities = baseActivities * activityOptions.find(o => o.value === formData.activities).multiplier;

    const perDayBudget = accommodation + food + transport + activities;
    const totalBudget = perDayBudget * formData.days * formData.travelers;

    setResult({
      destination: selectedDest.name,
      perDay: Math.round(perDayBudget),
      total: Math.round(totalBudget),
      breakdown: {
        accommodation: Math.round(accommodation * formData.days * formData.travelers),
        food: Math.round(food * formData.days * formData.travelers),
        transport: Math.round(transport * formData.days * formData.travelers),
        activities: Math.round(activities * formData.days * formData.travelers)
      }
    });
    setStep(4);
  };

  const resetCalculator = () => {
    setStep(1);
    setFormData({
      destination: '',
      days: 3,
      travelers: 1,
      accommodation: 'budget',
      foodPreference: 'local',
      transport: 'public',
      activities: 'few'
    });
    setResult(null);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Progress Bar */}
      <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 transition-all duration-700 shadow-lg"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      <div className="p-8 md:p-12">
        {/* Step 1: Destination & Basic Info */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-6 shadow-lg">
                <span className="text-5xl">🧮</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Trip Budget Calculator</h2>
              <p className="text-lg text-gray-600">Step 1 of 3: Tell us about your trip</p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                  Select Your Destination
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 text-gray-900 font-medium transition-all shadow-sm hover:border-primary-400"
                >
                  <option value="">Choose a destination...</option>
                  {destinations.map(dest => (
                    <option key={dest.slug} value={dest.slug}>{dest.name}, {dest.state}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={formData.days}
                    onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) || 1 })}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 text-gray-900 font-medium transition-all shadow-sm hover:border-primary-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) || 1 })}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 text-gray-900 font-medium transition-all shadow-sm hover:border-primary-400"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => formData.destination && setStep(2)}
              disabled={!formData.destination}
              className="w-full max-w-2xl mx-auto block py-5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all text-lg shadow-xl hover:shadow-2xl disabled:shadow-none transform hover:scale-[1.02] disabled:hover:scale-100"
            >
              Continue to Preferences →
            </button>
          </div>
        )}

        {/* Step 2: Accommodation & Food */}
        {step === 2 && (
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setStep(1)} 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-bold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Your Preferences</h2>
                <p className="text-sm text-gray-600 mt-1">Step 2 of 3</p>
              </div>
              <div className="w-16"></div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-5 uppercase tracking-wide">
                Accommodation Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {accommodationOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, accommodation: option.value })}
                    className={`group p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      formData.accommodation === option.value
                        ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 shadow-xl ring-2 ring-primary-200'
                        : 'border-gray-300 bg-white hover:border-primary-400 hover:shadow-lg'
                    }`}
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">{option.label}</div>
                    <div className="text-sm text-gray-600 font-medium">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-5 uppercase tracking-wide">
                Food Preference
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {foodOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, foodPreference: option.value })}
                    className={`group p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      formData.foodPreference === option.value
                        ? 'border-secondary-500 bg-gradient-to-br from-secondary-50 to-secondary-100 shadow-xl ring-2 ring-secondary-200'
                        : 'border-gray-300 bg-white hover:border-secondary-400 hover:shadow-lg'
                    }`}
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">{option.label}</div>
                    <div className="text-sm text-gray-600 font-medium">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
            >
              Continue to Transport & Activities →
            </button>
          </div>
        )}

        {/* Step 3: Transport & Activities */}
        {step === 3 && (
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setStep(2)} 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-bold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Final Details</h2>
                <p className="text-sm text-gray-600 mt-1">Step 3 of 3</p>
              </div>
              <div className="w-16"></div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-5 uppercase tracking-wide">
                Transport Mode
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {transportOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, transport: option.value })}
                    className={`group p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      formData.transport === option.value
                        ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100 shadow-xl ring-2 ring-amber-200'
                        : 'border-gray-300 bg-white hover:border-amber-400 hover:shadow-lg'
                    }`}
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">{option.label}</div>
                    <div className="text-sm text-gray-600 font-medium">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-5 uppercase tracking-wide">
                Activities & Sightseeing
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {activityOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, activities: option.value })}
                    className={`group p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                      formData.activities === option.value
                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl ring-2 ring-purple-200'
                        : 'border-gray-300 bg-white hover:border-purple-400 hover:shadow-lg'
                    }`}
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-2 text-lg">{option.label}</div>
                    <div className="text-sm text-gray-600 font-medium">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculateBudget}
              className="w-full py-5 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 hover:from-primary-700 hover:via-secondary-700 hover:to-primary-700 text-white font-bold rounded-xl transition-all text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
            >
              Calculate My Budget 🎉
            </button>
          </div>
        )}

        {/* Step 4: Results */}
        {mounted && step === 4 && result && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-4">
                <span className="text-5xl">🎊</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Trip Budget</h2>
              <p className="text-gray-600">Complete breakdown for {result.destination}</p>
            </div>

            {/* Total Budget Card */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">Total Estimated Budget</div>
              <div className="text-5xl md:text-6xl font-bold mb-3">₹{result.total.toLocaleString()}</div>
              <div className="text-sm opacity-90">
                ₹{result.perDay.toLocaleString()} per day × {formData.days} days × {formData.travelers} {formData.travelers === 1 ? 'person' : 'people'}
              </div>
            </div>

            {/* Breakdown */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: 'Accommodation', amount: result.breakdown.accommodation, icon: '🏨', color: 'bg-blue-500' },
                  { label: 'Food & Dining', amount: result.breakdown.food, icon: '🍽️', color: 'bg-green-500' },
                  { label: 'Transport', amount: result.breakdown.transport, icon: '🚗', color: 'bg-yellow-500' },
                  { label: 'Activities', amount: result.breakdown.activities, icon: '🎯', color: 'bg-purple-500' }
                ].map((item, index) => {
                  const percentage = (item.amount / result.total) * 100;
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="font-semibold text-gray-900">{item.label}</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">₹{item.amount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{percentage.toFixed(1)}% of total</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Money-Saving Tips</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Book accommodation in advance for better deals</li>
                    <li>• Travel during off-season for lower prices</li>
                    <li>• Use public transport to save on travel costs</li>
                    <li>• Try local eateries for authentic & affordable food</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={resetCalculator}
                className="py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-all hover:bg-gray-50"
              >
                ← Calculate Again
              </button>
              <button
                onClick={() => window.location.href = `/destinations/${formData.destination}`}
                className="py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Explore Destination →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
