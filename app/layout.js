import "./globals.css";

export const metadata = {
  title: "Arda Çalışkan | Web Geliştirme & Yazılım",
  description:
    "Arda Çalışkan — Web Geliştirme & Yazılım Uzmanı. Portföyüm ve projelerim çok yakında burada.",
  openGraph: {
    title: "Arda Çalışkan | Web Geliştirme & Yazılım",
    description:
      "C#, JavaScript, Next.js ve daha fazlasıyla ölçeklenebilir yazılım projeleri.",
    url: "https://ardacaliskan.com",
    siteName: "Arda Çalışkan",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Arda Çalışkan",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arda Çalışkan | Web Geliştirme & Yazılım",
    description:
      "C#, JavaScript, Next.js ve daha fazlasıyla ölçeklenebilir yazılım projeleri.",
    images: ["/android-chrome-512x512.png"],
  },
};

/* Next.js 15 için themeColor artık viewport içinde tanımlanıyor */
export const viewport = {
  themeColor: "#0a0a0a", // koyu tema rengi
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Manifest ve ikonlar */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
