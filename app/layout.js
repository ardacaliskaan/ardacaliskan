export const metadata = {
  title: "Arda Caliskan | Hazırlanıyor",
  description:
    "Mahmut Arda Caliskan - Web Geliştirme & Yazılım. Kişisel site hazırlanıyor.",
  openGraph: {
    title: "Arda Caliskan | Hazırlanıyor",
    description:
      "Web geliştirme ve yazılım projelerim yakında burada.",
    url: "https://ardacaliskan.com",
    siteName: "ardacaliskan.com",
    type: "website",
  },
  metadataBase: new URL("https://ardacaliskan.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-[#0b1220] text-[#e9eefc] antialiased">{children}</body>
    </html>
  );
}
