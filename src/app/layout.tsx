import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gayanga Kuruppu",
    template: "%s | Gayanga Kuruppu",
  },
  description: "Come drink the Kool-aid with me :)",
  metadataBase: new URL("https://guyson.xyz"),
  openGraph: {
    title: "Gayanga Kuruppu",
    description: "Come drink the Kool-aid with me :)",
    url: "https://guyson.xyz",
    siteName: "Gayanga Kuruppu",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "Gayanga Kuruppu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayanga Kuruppu",
    description: "Come drink the Kool-aid with me :)",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-full bg-white dark:bg-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <main className="flex min-h-screen flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
