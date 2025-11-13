# Instituto Tabuleiro Website

A modern, responsive website for the Instituto Tabuleiro, built with Next.js and TypeScript. The site showcases the institute's work in environmental conservation, research, and education in the Serra do Tabuleiro region of Santa Catarina, Brazil.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Publications**: Detailed pages for research projects, conservation plans, and educational programs
- **Interactive Elements**: Smooth animations and hover effects using Tailwind CSS
- **Multilingual Support**: Basic structure for internationalization (German folder present)
- **3D Model Integration**: Toucan 3D model display using Three.js
- **Contact System**: Contact form and information display
- **Localization Modal**: Interactive map and location information

## Pages

- **Home**: Landing page with hero section and institute overview
- **Sobre (About)**: Information about the institute's mission and work
- **Publicações (Publications)**: List and detail views of research projects and publications
- **Contato (Contact)**: Contact information and form
- **Local (Location)**: Interactive map and location details

## Technologies Used

- **Next.js 14**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library
- **Three.js**: 3D graphics library for the toucan model
- **Next.js Image**: Optimized image loading
- **ESLint**: Code linting

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd P01front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── sobre/page.tsx     # About page
│   ├── publicacoes/       # Publications section
│   │   ├── page.tsx       # Publications list
│   │   └── [id]/page.tsx  # Publication detail
│   ├── contato/page.tsx   # Contact page
│   ├── local/page.tsx     # Location page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   ├── cardPublications.tsx # Publication card component
│   ├── cardContacts.tsx   # Contact card component
│   ├── localizationModal.tsx # Location modal
│   └── tucan.tsx          # 3D toucan component
└── public/                # Static assets
    ├── fotosPublicacoes/  # Publication images
    └── ...                # Other assets
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Deployment

The site is configured for deployment on Vercel or any platform supporting Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
