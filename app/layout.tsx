import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import "@/fonts/satoshi/css/satoshi.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

// const satoshi = localFont({
//   src: [
//     {
//       path: '../fonts/satoshi/Satoshi-Light.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '..cd/fonts/satoshi/Satoshi-Bold.otf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-satoshi',
// });

export const metadata: Metadata = {
  title: "ByteSpace New",
  description: "Get Access to Hundreds Courses Available",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
