import type { Metadata } from "next";
import {Inter_Tight} from 'next/font/google'
import logo from '@/assets/images/Logomark.png'
import "./globals.css";
const Inter = Inter_Tight({
  weight :["400", "500"],
  variable: "--font-inter",
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: "FocalPoint",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
					rel="icon"
					sizes="24x24"
					href={logo.src}
				/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
</head>
      <body className={`${Inter.variable}`}>
    
        {children}
      </body>
    </html>
  );
}
