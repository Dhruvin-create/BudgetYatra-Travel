import Link from 'next/link';

export const metadata = {
  title: 'About BudgetYatra — India Budget Travel Blog & Guide',
  description: 'BudgetYatra is India\'s trusted budget travel guide. Learn about our mission to make budget travel in India accessible to every student, couple, and solo traveler.',
  keywords: 'budget travel in India, budget travel guide India, India budget travel blog',
  alternates: { canonical: 'https://budgetyatra.online/about' },
  openGraph: {
    title: 'About BudgetYatra — India Budget Travel Blog & Guide',
    description: 'Our mission: make budget travel in India accessible to everyone. Real guides, honest tips, and a community of smart travelers.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About BudgetYatra
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Making budget travel accessible to everyone across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '50K+', label: 'Happy Travelers', icon: '😊', color: 'text-blue-600' },
            { number: '100+', label: 'Destinations', icon: '📍', color: 'text-green-600' },
            { number: '500+', label: 'Travel Guides', icon: '📝', color: 'text-purple-600' },
            { number: '4.8/5', label: 'User Rating', icon: '⭐', color: 'text-yellow-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Budget Travel Philosophy</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At BudgetYatra, we believe that budget travel in India is not about compromise — it's about traveling smarter. 
              Our mission is to be India's most trusted budget travel guide, helping students, couples, solo travelers, and families 
              explore the incredible diversity of India without breaking the bank. We provide comprehensive guides, practical tips, 
              and honest recommendations so you can plan affordable yet unforgettable adventures across every corner of India.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We curate detailed travel guides for destinations across India, focusing on budget-friendly options 
              for accommodation, food, transportation, and activities. Our content is created by experienced travelers 
              who have personally visited these destinations and understand the challenges of traveling on a budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Comprehensive destination guides with budget breakdowns',
                'Practical travel tips and money-saving strategies',
                'Seasonal recommendations for best experiences',
                'Honest reviews of budget accommodations',
                'Off-the-beaten-path destinations',
                'Interactive budget calculator tool'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  We share real experiences and honest recommendations based on actual travels.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
                <p className="text-gray-700">
                  We believe travel should be accessible to everyone, regardless of budget.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We promote responsible travel that respects local communities and environments.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-700">
                  We foster a community of budget travelers sharing experiences and tips.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Priya Sharma',
                  role: 'Founder & Travel Writer',
                  avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=200',
                  bio: 'Passionate about budget travel with 50+ destinations explored',
                  trips: '50+ Trips'
                },
                {
                  name: 'Rahul Verma',
                  role: 'Adventure Specialist',
                  avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=10b981&color=fff&size=200',
                  bio: 'Expert in adventure sports and mountain destinations',
                  trips: '40+ Trips'
                },
                {
                  name: 'Anjali Mehta',
                  role: 'Heritage & Culture Expert',
                  avatar: 'https://ui-avatars.com/api/?name=Anjali+Mehta&background=f59e0b&color=fff&size=200',
                  bio: 'Specializes in historical sites and cultural experiences',
                  trips: '35+ Trips'
                }
              ].map((member, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    {member.trips}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Badges */}
          <section className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Trust Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '✓', title: 'Verified Reviews', desc: 'All our guides are based on real travel experiences' },
                { icon: '🔒', title: 'Secure Platform', desc: 'Your data is safe and protected with us' },
                { icon: '📱', title: 'Always Updated', desc: 'Regular updates to keep information current' },
                { icon: '🌟', title: 'Community Driven', desc: 'Built by travelers, for travelers' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Whether you're a student, a young professional, or simply someone who loves to travel smart, 
              BudgetYatra is here to help you explore India's incredible destinations without emptying your wallet. 
              Join our community of budget travelers and start planning your next adventure today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 !text-white font-semibold rounded-full shadow-md"
              >
                <svg className="w-5 h-5 mr-2 !text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="!text-white">Explore Guides</span>
                <svg className="w-5 h-5 ml-2 !text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
