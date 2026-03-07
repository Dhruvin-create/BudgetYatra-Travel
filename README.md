# BudgetYatra - Budget Travel Blog

A modern, SEO-friendly travel blog website focused on budget-friendly destinations across India. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- 🏖️ **Destination Guides**: Comprehensive guides for 6+ destinations across India
- 📝 **Travel Blogs**: Detailed blog articles with budget breakdowns
- 🔍 **Smart Search**: Filter destinations by budget range and season
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- ⚡ **Fast Performance**: Optimized with Next.js SSG and ISR
- 🎨 **Modern UI**: Professional design with Tailwind CSS 4
- 📧 **Newsletter**: Email subscription for travel updates
- 📞 **Contact Form**: Easy way for users to get in touch

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ES6+)
- **Testing**: Jest + React Testing Library + fast-check

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd budgetyatra-travel
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
budgetyatra-travel/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── blogs/             # Blog pages
│   │   ├── destinations/      # Destination pages
│   │   ├── guide/             # Search & filter page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── layout/           # Navbar, Footer
│   │   ├── cards/            # BlogCard, DestinationCard
│   │   ├── forms/            # Newsletter, ContactForm
│   │   └── home/             # Hero
│   └── lib/                   # Utilities and data
│       ├── data/             # Blog and destination data
│       ├── utils/            # Helper functions
│       └── constants/        # Configuration
├── public/                    # Static assets
└── .kiro/                     # Spec files
```

## Key Pages

- **Homepage** (`/`): Hero section, popular destinations, latest blogs
- **Destinations** (`/destinations`): Browse all destinations
- **Destination Detail** (`/destinations/[slug]`): Complete destination guide
- **Blogs** (`/blogs`): All blog articles
- **Blog Article** (`/blogs/[slug]`): Individual blog post
- **Guide** (`/guide`): Search destinations by budget and season
- **About** (`/about`): About BudgetYatra
- **Contact** (`/contact`): Contact form

## Features in Detail

### Budget-Based Search
Users can filter destinations by:
- Budget range (₹0-2000, ₹2000-5000, ₹5000-10000, ₹10000+)
- Season (Summer, Monsoon, Winter, Spring)
- Keywords (destination name, attractions, state)

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Mobile hamburger menu
- Optimized images for all screen sizes

### SEO Optimization
- Unique meta titles and descriptions for all pages
- Open Graph tags for social sharing
- Structured data (coming soon)
- Sitemap generation
- Robots.txt

## Data Models

### Blog Article
- Title, excerpt, content
- Featured image
- Author information
- Budget range
- Best seasons
- Category and tags
- SEO metadata

### Destination
- Name, description
- Images gallery
- Budget breakdown (accommodation, food, transport, activities)
- Best seasons to visit
- Top attractions
- Travel tips
- How to reach (air, train, road)

## Customization

### Adding New Destinations
Edit `src/lib/data/destinations.js` and add a new destination object following the existing structure.

### Adding New Blogs
Edit `src/lib/data/blogs.js` and add a new blog object following the existing structure.

### Changing Theme Colors
Edit `src/app/globals.css` and modify the color variables in the `@theme inline` block.

## API Routes

- `POST /api/newsletter`: Newsletter subscription
- `POST /api/contact`: Contact form submission

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test:watch
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the production bundle:
```bash
npm run build
```

The output will be in the `.next` folder. Deploy this folder to any Node.js hosting platform.

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please contact us at hello@budgetyatra.com

---

Built with ❤️ by the BudgetYatra Team
