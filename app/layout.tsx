import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfProRounded = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Rounded-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/SF-Pro-Rounded-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
    },
    {
      path: "./fonts/SF-Pro-Rounded-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-sfProRounded",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://splidzy.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "splidzy - split bills, stay besties ✌️",
    template: "%s - Splidzy",
  },
  description:
    "Splidzy is the coolest way to split bills. Add besties, add bills, and let the good vibes roll!",
  openGraph: {
    title: "splidzy - split bills, stay besties ✌️",
    description:
      "Splidzy is the coolest way to split bills. Add besties, add bills, and let the good vibes roll!",
    url: "https://splidzy.vercel.app/",
    siteName: "splidzy - split bills, stay besties ✌️",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "splidzy - split bills, stay besties ✌️",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfProRounded.variable} font-sans antialiased`}>
        <div className="min-h-screen px-4 py-12">{children}</div>
      </body>
    </html>
  );
}
