import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import AuthProvider from "../components/AuthProvider/AuthProvider";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// SEO CONFIG

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Note list app",
  openGraph: {
    title: `NoteHub`,
    description: "Note list app",
    url: `https://notehub.com`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note App image",
      },
    ],
    type: "article",
  },
};

// COMPONENTS

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <AuthProvider>
            <Header />

            <main>
              {children}
              {modal}
            </main>

            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}