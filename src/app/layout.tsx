import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

// Open Sans is the single CLIMATRIX brand font (matches the platform app).
const openSans = Open_Sans({
  subsets: ['latin', 'hebrew'],
  variable: '--font-sans',
});
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CLIMATRIX - Carbon Accounting Made Simple',
  description: 'The complete carbon accounting platform for modern businesses. Track GHG emissions, ensure CBAM compliance, and manage your environmental footprint with AI-powered insights.',
  keywords: ['carbon accounting', 'GHG emissions', 'CBAM compliance', 'sustainability', 'ESG', 'climate software'],
  authors: [{ name: 'CLIMATRIX' }],
  openGraph: {
    title: 'CLIMATRIX - Carbon Accounting Made Simple',
    description: 'The complete carbon accounting platform for modern businesses.',
    url: 'https://climatrix.io',
    siteName: 'CLIMATRIX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLIMATRIX - Carbon Accounting Made Simple',
    description: 'The complete carbon accounting platform for modern businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${openSans.variable} font-sans`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
