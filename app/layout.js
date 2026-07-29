import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata = {
  metadataBase: new URL("https://mushfiq.xyz"),
  alternates: {
    canonical: "https://mushfiq.xyz/",
  },
  title: {
    default: "MUSHFIQ - IT Support Engineer",
    template: "%s | MUSHFIQ",
  },
  description:
    "Worldwide IT support from certified Google Workspace and Microsoft 365 experts. DNS, email migration, cloud systems, security, and troubleshooting.",
  keywords: [
    "it support",
    "business it support",
    "it support company",
    "it support services",
    "it support and services",
    "local it support",
    "it support australia",
    "managed it support perth",
    "managed it support adelaide",
    "it support for law firms",
    "managed it support melbourne",
    "managed it support sydney",
    "apple support",
    "google it support",
    "office it support",
    "remote it support",
    "itmushfiq",
    "System administrator",
  ],
  authors: [{ name: "MUSHFIQ - System administrator" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    url: "https://mushfiq.xyz",
    title: "MUSHFIQ – IT Support Engineer",
    siteName: "MUSHFIQ - IT Support Engineer",
    description:
      "Expert IT support for Google Workspace, Microsoft 365, DNS, email deliverability, and cloud systems.",
    images: [
      {
        url: "https://res.cloudinary.com/depyaowh3/image/upload/v1768989552/mushfiqdotxyz_ylh21g.png",
        width: 1200,
        height: 630,
        alt: "MUSHFIQ - IT Support Engineer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUSHFIQ - IT Support Engineer – Global Remote IT Support",
    description:
      "Remote IT engineering experts with 12+ years experience in Google Workspace, Microsoft 365, DNS, cloud, and security.",
    images: [
      "https://res.cloudinary.com/depyaowh3/image/upload/v1768989552/mushfiqdotxyz_ylh21g.png",
    ],
  },
  other: {
    "fb:app_id": "353614617613762",
    "yandex-verification": "0ecbaefaf840d499",
    "facebook-domain-verification": "0l6xk00ijn0tbpfyr2d5n7gqgn4x8",
    "msvalidate.01": "A43ABC3F0431686D39216FA7FFD8C2AA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-T8RT3TF9" />
        <GoogleAnalytics gaId="G-HQ8PHX14ET" />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
