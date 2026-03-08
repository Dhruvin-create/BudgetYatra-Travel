import BudgetCalculator from '@/components/calculator/BudgetCalculator';

export const metadata = {
  title: 'Budget Calculator - BudgetYatra',
  description: 'Calculate your trip budget with our interactive travel budget calculator',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">
            PLAN YOUR TRIP
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Budget Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an accurate estimate of your trip expenses based on your preferences
          </p>
        </div>

        {/* Calculator Component */}
        <BudgetCalculator />

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-gray-900 mb-2">Accurate Estimates</h3>
            <p className="text-sm text-gray-600">Based on real travel data and current prices</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Quick & Easy</h3>
            <p className="text-sm text-gray-600">Get your budget in just 3 simple steps</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900 mb-2">Save Money</h3>
            <p className="text-sm text-gray-600">Plan better and avoid overspending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
