export const metadata = {
  title: 'Terms of Service - BudgetYatra',
  description: 'Terms of Service for BudgetYatra',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using BudgetYatra, you accept and agree to be bound by the terms and provisions 
              of this agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Content</h2>
            <p>
              All content on BudgetYatra, including text, images, and graphics, is provided for informational 
              purposes only. While we strive for accuracy, we do not guarantee the completeness or reliability 
              of any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the website for lawful purposes only</li>
              <li>Do not attempt to harm or disrupt the website</li>
              <li>Respect intellectual property rights</li>
              <li>Verify all travel information independently</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p>
              Travel information, prices, and recommendations are subject to change. BudgetYatra is not 
              responsible for any losses or damages arising from the use of information on this website. 
              Always verify details with official sources before making travel arrangements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p>
              BudgetYatra shall not be liable for any direct, indirect, incidental, consequential, or 
              punitive damages arising from your use of the website or reliance on any information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website after 
              changes constitutes acceptance of the modified terms.
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
