export const metadata = {
  title: 'Affiliate Disclosure - BudgetYatra',
  description: 'Affiliate Disclosure for BudgetYatra',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Affiliate Disclosure
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency Statement</h2>
            <p>
              BudgetYatra is committed to transparency in all our recommendations. This page discloses our 
              affiliate relationships and how we may earn commissions from certain links on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Affiliate Links?</h2>
            <p>
              Some links on BudgetYatra may be affiliate links. This means that if you click on these links 
              and make a purchase or booking, we may earn a small commission at no additional cost to you. 
              These commissions help us maintain and improve our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We only recommend products and services we genuinely believe in</li>
              <li>Our reviews and recommendations are based on real experiences</li>
              <li>Affiliate relationships do not influence our honest opinions</li>
              <li>We clearly disclose when content contains affiliate links</li>
              <li>Your trust is more important to us than any commission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Affiliate Partnerships</h2>
            <p>We may have affiliate relationships with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Hotel and accommodation booking platforms</li>
              <li>Travel insurance providers</li>
              <li>Tour and activity booking services</li>
              <li>Travel gear and equipment retailers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Support</h2>
            <p>
              By using our affiliate links, you help support BudgetYatra at no extra cost to you. This allows 
              us to continue creating free, high-quality travel content and guides for budget travelers across India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p>
              If you have any questions about our affiliate relationships or this disclosure, please feel free 
              to contact us through our contact page.
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
