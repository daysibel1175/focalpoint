import type { Metadata } from "next";

import logo from '@/assets/images/Logomark.png'
import "./globals.css";

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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
</head>
      <body>
    
        {children}
      </body>
    </html>
  );
}
