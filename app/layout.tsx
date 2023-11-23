import type { Metadata, Viewport } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import './globals.css';
import Footer from './components/footer/Footer';
import { LucideGithub, LucideInstagram } from 'lucide-react';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
      type: 'image/png',
    },
  ],
  title: 'Astrlf',
  description: ['De mon corps en décomposition', 'des fleurs pousseront.'].join('\n'),
};

export const viewport: Viewport = {
  themeColor: '#ffc0cb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${GeistMono.className}`}>
        {children}

        <Footer
          links={[
            { href: 'https://instagram.com/god.strongest.soldier', icon: LucideInstagram },
            { href: 'https://github.com/astrlf', icon: LucideGithub },
          ]}
        />
      </body>
    </html>
  );
}
