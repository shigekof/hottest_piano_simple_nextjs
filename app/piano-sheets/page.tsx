import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Piano Sheet Music Collection - Free Downloads | Hottest Piano',
  description: 'Download high-quality piano sheet music for free. Classical pieces by Chopin, Debussy, Bach and contemporary works by Einaudi. PDF downloads and MuseScore links available.',
  keywords: 'piano sheet music, free piano sheets, classical piano music, Chopin sheet music, Debussy sheet music, Bach inventions, Einaudi piano music, PDF piano sheets',
  openGraph: {
    title: 'Piano Sheet Music Collection - Free Downloads',
    description: 'Download high-quality piano sheet music for free. Classical and contemporary pieces available.',
    url: 'https://hottest-piano.com/piano-sheets',
    siteName: 'Hottest Piano',
    images: [
      {
        url: 'https://hottest-piano.com/piano-sheets-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Piano Sheet Music Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piano Sheet Music Collection - Free Downloads',
    description: 'Download high-quality piano sheet music for free. Classical and contemporary pieces available.',
    images: ['https://hottest-piano.com/piano-sheets-og.jpg'],
  },
};

export default function PianoSheets() {
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Home
              </Link>
              <Link href="/piano-sheets" className="text-blue-600 px-3 py-2 font-medium">
                Piano Sheets
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Smaller */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Piano Sheet Music Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download high-quality piano sheets and access MuseScore files
          </p>
        </div>
      </section>

      {/* Piano Sheets List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Sample Piano Sheet Items */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Chopin - Nocturne Op. 9 No. 2
                  </h3>
                  <p className="text-gray-600">
                    Beautiful romantic piece in E-flat major • Intermediate level
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href="https://musescore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors text-center"
                  >
                    View on MuseScore
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Debussy - Clair de Lune
                  </h3>
                  <p className="text-gray-600">
                    Impressionistic masterpiece • Advanced level
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href="https://musescore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors text-center"
                  >
                    View on MuseScore
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bach - Invention No. 1 in C Major
                  </h3>
                  <p className="text-gray-600">
                    Classical baroque invention • Beginner to Intermediate
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href="https://musescore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors text-center"
                  >
                    View on MuseScore
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ludovico Einaudi - Nuvole Bianche
                  </h3>
                  <p className="text-gray-600">
                    Contemporary minimalist piece • Intermediate level
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href="https://musescore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors text-center"
                  >
                    View on MuseScore
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Yann Tiersen - Comptine d'un autre été
                  </h3>
                  <p className="text-gray-600">
                    From "Amélie" soundtrack • Intermediate level
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href="https://musescore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors text-center"
                  >
                    View on MuseScore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}