import BudgetCalculator from '@/components/calculator/BudgetCalculator';

export const metadata = {
  title: 'Budget Calculator - BudgetYatra',
  description: 'Calculate your trip budget with our interactive travel budget calculator',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            SMART TRAVEL PLANNING
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Budget Calculator
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Get accurate budget estimates for your dream destination in just 3 simple steps
          </p>
        </div>
      </div>

      {/* Main Calculator - Elevated Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <BudgetCalculator />
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use Our Calculator?</h2>
            <p className="text-lg text-gray-600">Everything you need for smarter travel planning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accurate Estimates</h3>
              <p className="text-gray-600 leading-relaxed">Based on real travel data, current market prices, and verified traveler experiences</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick & Easy</h3>
              <p className="text-gray-600 leading-relaxed">Get your complete budget breakdown in just 3 simple steps with no complicated forms</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
              <p className="text-gray-600 leading-relaxed">Get personalized money-saving tips and discover budget-friendly options</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to your perfect budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full font-bold text-2xl mb-6 shadow-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Destination</h3>
              <p className="text-gray-600 leading-relaxed">Select your destination and specify your trip duration and number of travelers</p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
            </div>

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-full font-bold text-2xl mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Preferences</h3>
              <p className="text-gray-600 leading-relaxed">Choose your accommodation style, food preferences, transport mode, and activities</p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary-300 to-transparent"></div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full font-bold text-2xl mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Budget</h3>
              <p className="text-gray-600 leading-relaxed">Receive detailed breakdown with money-saving tips and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
