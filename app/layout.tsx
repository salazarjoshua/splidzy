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
  metadataBase: new URL("https://paymixx.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "PayMixx - Split Bills, Not Brain Cells 💀",
    template: "%s - Paymixx",
  },
  description:
    "Math? After a long night? No thanks. PayMixx handles the numbers while you rest up. Just tap, split, and vibes.",
  openGraph: {
    title: "PayMixx - Split Bills, Not Brain Cells 💀",
    description:
      "Math? After a long night? No thanks. PayMixx handles the numbers while you rest up. Just tap, split, and vibes.",
    url: "https://paymixx.vercel.app/",
    siteName: "PayMixx - Split Bills, Not Brain Cells 💀",
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
    title: "PayMixx - Split Bills, Not Brain Cells 💀",
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
        {children}
      </body>
    </html>
  );
}
