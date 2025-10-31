import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hottest Piano - Beautiful Piano Music & Sheet Music Collection',
  description: 'Discover amazing piano performances and download beautiful piano sheets. Features classical, contemporary, and popular piano music with free sheet music downloads.',
  keywords: 'piano music, sheet music, piano sheets, classical piano, contemporary piano, piano performances, free sheet music, piano downloads',
  openGraph: {
    title: 'Hottest Piano - Beautiful Piano Music & Sheet Music',
    description: 'Discover amazing piano performances and download beautiful piano sheets',
    url: 'https://hottest-piano.com',
    siteName: 'Hottest Piano',
    images: [
      {
        url: 'https://hottest-piano.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hottest Piano - Piano Music Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hottest Piano - Beautiful Piano Music & Sheet Music',
    description: 'Discover amazing piano performances and download beautiful piano sheets',
    images: ['https://hottest-piano.com/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              🎹 Hottest Piano
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 px-3 py-2 font-medium">
                Home
              </Link>
              <Link href="/piano-sheets" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Piano Sheets
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Hottest Piano
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing piano performances and download beautiful piano sheets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors"
            >
              Visit YouTube Channel
            </a>
            <Link
              href="/piano-sheets"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Download Piano Sheets
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Piano Performances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Video Embeds */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9E6b3swbnWg"
                title="Chopin Nocturne Op. 9 No. 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CvFH_6DNRCY"
                title="Debussy Clair de Lune"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/aeEmGvm7kDk"
                title="Ludovico Einaudi - Nuvole Bianche"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
