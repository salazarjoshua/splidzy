import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import HydrateStore from "@/store/hydrate-store";
import { Toaster } from "@/components/ui/sonner";

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
    default: "splidzy - split bills, stay besties",
    template: "%s - Splidzy",
  },
  description:
    "Splidzy is the coolest way to split bills. Add besties, add bills, and let the good vibes roll!",
  openGraph: {
    title: "splidzy - split bills, stay besties",
    description:
      "Splidzy is the coolest way to split bills. Add besties, add bills, and let the good vibes roll!",
    url: "https://splidzy.vercel.app/",
    siteName: "splidzy - split bills, stay besties",
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
    title: "splidzy - split bills, stay besties",
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
        <HydrateStore />
        <div className="mx-auto flex min-h-dvh max-w-md flex-col gap-2 px-4 pb-4">
          <Nav />
          {children}
        </div>
        <Toaster
          visibleToasts={1}
          duration={2000}
          position="top-center"
          offset={16}
          mobileOffset={{ top: 16, left: 0, right: 0 }}
          icons={{
            success: (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/tossface/check.svg" alt="" />
            ),
            error: (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/tossface/double-exclamation.svg" alt="" />
            ),
            loading: (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/tossface/hourglass.svg" alt="" className="!w-4" />
            ),
          }}
        />
      </body>
    </html>
  );
}
