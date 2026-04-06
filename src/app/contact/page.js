import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us - BudgetYatra',
  description: 'Get in touch with BudgetYatra. Have questions about budget travel India itineraries, destination guides, or feedback? We\'d love to hear from you.',
  alternates: { canonical: 'https://budgetyatra.online/contact' },
  openGraph: {
    title: 'Contact Us - BudgetYatra',
    description: 'Reach out to BudgetYatra for travel queries, feedback, or partnership inquiries.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Need help planning budget travel India itineraries? Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <ContactForm />

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-600 mb-4">
            Email: <a href="mailto:hello@budgetyatra.com" className="text-primary-600 hover:text-primary-700">hello@budgetyatra.com</a>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-600">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-primary-600">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-primary-600">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
