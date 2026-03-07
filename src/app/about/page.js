export const metadata = {
  title: 'About Us - BudgetYatra',
  description: 'Learn about BudgetYatra and our mission to make travel accessible to everyone',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          About BudgetYatra
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At BudgetYatra, we believe that travel should be accessible to everyone, regardless of their budget. 
              Our mission is to inspire and empower travelers to explore the incredible diversity of India without 
              breaking the bank. We provide comprehensive guides, practical tips, and honest recommendations to help 
              you plan affordable yet unforgettable adventures.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We curate detailed travel guides for destinations across India, focusing on budget-friendly options 
              for accommodation, food, transportation, and activities. Our content is created by experienced travelers 
              who have personally visited these destinations and understand the challenges of traveling on a budget.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Comprehensive destination guides with budget breakdowns</li>
              <li>Practical travel tips and money-saving strategies</li>
              <li>Seasonal recommendations for the best travel experiences</li>
              <li>Honest reviews of budget accommodations and eateries</li>
              <li>Off-the-beaten-path destinations and hidden gems</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Authenticity</h3>
                <p className="text-gray-700">
                  We share real experiences and honest recommendations based on actual travels.
                </p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Accessibility</h3>
                <p className="text-gray-700">
                  We believe travel should be accessible to everyone, regardless of budget.
                </p>
              </div>
              <div className="bg-accent-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-accent-900 mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We promote responsible travel that respects local communities and environments.
                </p>
              </div>
              <div className="bg-success-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-success-900 mb-2">Community</h3>
                <p className="text-gray-700">
                  We foster a community of budget travelers sharing experiences and tips.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a student, a young professional, or simply someone who loves to travel smart, 
              BudgetYatra is here to help you explore India's incredible destinations without emptying your wallet. 
              Join our community of budget travelers and start planning your next adventure today!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
