# Venice Beach Dog Walker Landing Page

A modern, responsive landing page for Venice Beach Dog Walker, built with Next.js and Tailwind CSS.

## Features

- Beautiful, responsive design
- Booking system for consultation calls
- Mobile-friendly layout
- Optimized for performance
- Easy deployment with Vercel

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hook Form
- Yup for form validation
- Heroicons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd venice-beach-dog-walker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.

3. Click "New Project" and select your repository.

4. Configure your project settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install` or `yarn install`

5. Click "Deploy"

### Custom Domain Setup

1. In your Vercel project settings, go to the "Domains" section.

2. Add your custom domain and follow the DNS configuration instructions.

3. Vercel will automatically provision an SSL certificate for your domain.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
