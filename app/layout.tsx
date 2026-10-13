import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Velora Studio | Architecture & Interiors",
    template: "%s | Velora Studio",
  },
  description: "Velora Studio creates thoughtful architecture and refined interiors that bring beauty, function, and lasting character to everyday living.",
  openGraph: {
    title: "Velora Studio | Architecture & Interiors",
    description: "Thoughtful architecture and refined interiors, designed around the way we live.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
