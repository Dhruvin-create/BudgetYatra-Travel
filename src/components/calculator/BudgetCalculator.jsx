'use client';

import { useState } from 'react';
import { getAllDestinations } from '@/lib/data/destinations';

export default function BudgetCalculator() {
  const [step, setStep] = useState(1);
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
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2">
        <div 
          className="bg-white h-full transition-all duration-500"
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      <div className="p-8 md:p-12">
        {/* Step 1: Destination & Basic Info */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🧮</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trip Budget Calculator</h2>
              <p className="text-gray-600">Plan your perfect budget trip in 3 easy steps</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Destination
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 text-gray-900 font-medium"
              >
                <option value="">Choose a destination...</option>
                {destinations.map(dest => (
                  <option key={dest.slug} value={dest.slug}>{dest.name}, {dest.state}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Number of Days
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={formData.days}
                  onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 text-gray-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 text-gray-900 font-medium"
                />
              </div>
            </div>

            <button
              onClick={() => formData.destination && setStep(2)}
              disabled={!formData.destination}
              className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Next: Choose Preferences
            </button>
          </div>
        )}

        {/* Step 2: Accommodation & Food */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setStep(1)} className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900">Accommodation & Food</h2>
              <div className="w-6"></div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Accommodation Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accommodationOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, accommodation: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      formData.accommodation === option.value
                        ? 'border-primary-600 bg-primary-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-1">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Food Preference
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {foodOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, foodPreference: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      formData.foodPreference === option.value
                        ? 'border-primary-600 bg-primary-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-1">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Next: Transport & Activities
            </button>
          </div>
        )}

        {/* Step 3: Transport & Activities */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setStep(2)} className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900">Transport & Activities</h2>
              <div className="w-6"></div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Transport Mode
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {transportOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, transport: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      formData.transport === option.value
                        ? 'border-primary-600 bg-primary-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-1">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Activities & Sightseeing
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activityOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, activities: option.value })}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      formData.activities === option.value
                        ? 'border-primary-600 bg-primary-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-4xl mb-3">{option.icon}</div>
                    <div className="font-bold text-gray-900 mb-1">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculateBudget}
              className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Calculate My Budget 🎉
            </button>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && result && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎊</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Trip Budget</h2>
              <p className="text-gray-600">Estimated cost for {result.destination}</p>
            </div>

            {/* Total Budget Card */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">Total Estimated Budget</div>
              <div className="text-5xl md:text-6xl font-bold mb-2">₹{result.total.toLocaleString()}</div>
              <div className="text-lg opacity-90">
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
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
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
                      <div className="text-sm text-gray-600 mt-1">{percentage.toFixed(1)}% of total</div>
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

            <div className="flex gap-4">
              <button
                onClick={resetCalculator}
                className="flex-1 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-colors"
              >
                Calculate Again
              </button>
              <button
                onClick={() => window.location.href = `/destinations/${formData.destination}`}
                className="flex-1 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                View Destination
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
