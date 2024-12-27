'use client'
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { usePathname } from 'next/navigation';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={`${pathName.includes('dashboard') && 'md:overflow-hidden'} ${inter.className} antialiased`}>
          {children}
        </body>
    </html>
  );
}
