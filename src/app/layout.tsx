import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Favicon from '../../public/images/Metadata/favicon.ico';
import './globals.css';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MediLab',
  description: 'The ultimate medicare service',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
