import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Respira',
  description: 'Respira by UINNOVATOR - Sandbox PTC 2025',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-normal antialiased text-foreground">
        <div className="flex h-screen w-screen items-center justify-center bg-zinc-200">
          <div className="relative h-full max-h-[888px] w-full max-w-[450px] overflow-hidden shadow-2xl">{children}</div>
        </div>
      </body>
    </html>
  );
}