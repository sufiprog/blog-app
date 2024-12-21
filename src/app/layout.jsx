import { Outfit } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: "SufiBlog | The Blogging Platform",
  description: "SufiBlog is a blogging platform that allows you to read latest blogs related to technology, programming, and much more."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
