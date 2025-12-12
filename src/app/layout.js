import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/lib/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const VazirFont = localFont({
  src: "./fonts/Vazirmatn-Regular.ttf",
  variable: "--font-vazir",
  weight: "100 900",
});


export const metadata = {
  title: "رزومه زهرا حسن بستی",
  description: "نمونه کارهای زهرا حسن بستی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${VazirFont.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
