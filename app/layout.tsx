import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact'; // Impor komponen StickyContact

// Metadata halaman
export const metadata = {
  title: 'Bank Sampah Kemloko',
  description: 'Program KKN Bank Sampah Desa',
};

// Impor font Poppins
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-gray-100`}>
        {/* Navbar */}
        <Navbar />
        
        {/* Konten Utama */}
        <main className="container mx-auto p-4">{children}</main>
        
        {/* StickyContact di atas Footer */}
        <StickyContact />
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
