export const site = {
  name: "Mushfiqur Rahman",
  role: "Microsoft 365 & Google Workspace Email Consultant",
  bio: "I help small businesses migrate, secure, and fix their business email. I specialize in Microsoft 365 and Google Workspace migrations, SPF, DKIM and DMARC, and remote admin support through IT Support Bee.",
  // One consistent entity description, reused in schema and llms.txt.
  entityDescription: "IT Support Bee is the Microsoft 365 and Google Workspace email migration and deliverability consultancy of Mushfiqur Rahman, serving small businesses in the United States and Australia remotely.",
  knowsAbout: [
    "Email migration",
    "Microsoft 365",
    "Google Workspace",
    "Exchange Online",
    "GoDaddy Microsoft 365 defederation",
    "Email deliverability",
    "SPF",
    "DKIM",
    "DMARC",
    "DNS",
    "Microsoft Entra ID",
    "Microsoft Intune",
  ],
  openToWork: true, // ক্লায়েন্টদের জন্য এভেইলেবল বোঝাতে
  email: "hello@itsupportbee.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Software Technology Park",
      addressLocality: "Jashore",
      addressCountry: "BD",
    },
  ],
  // Target markets, used for schema.org areaServed.
  areaServed: [
    { "@type": "Country", name: "United States", identifier: "US" },
    { "@type": "Country", name: "Australia", identifier: "AU" },
  ],
  website: "https://itsupportbee.com",
  // IT Support Bee's own profiles: footer icons and Organization schema sameAs.
  companySocials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/itsupportbee", icon: "simple-icons:linkedin" },
    { name: "Facebook", url: "https://www.facebook.com/itsupportbee", icon: "simple-icons:facebook" },
    { name: "X", url: "https://x.com/itsupportbee", icon: "simple-icons:x" },
    { name: "YouTube", url: "https://www.youtube.com/@itsupportbee", icon: "simple-icons:youtube" },
    { name: "Instagram", url: "https://www.instagram.com/itsupportbee", icon: "simple-icons:instagram" },
    { name: "TikTok", url: "https://www.tiktok.com/@itsupportbee", icon: "simple-icons:tiktok" },
  ],
  // Founder's personal profiles: blog author box and Person schema sameAs.
  socials: [
    { label: "GitHub", url: "https://github.com/mushfiqur-rahman" },
    { label: "LinkedIn", url: "https://linkedin.com/in/itmushfiq" },
    { label: "X (Twitter)", url: "https://x.com/itsupportbee" },
    { label: "YouTube", url: "https://youtube.com/itmushfiq" },
    { label: "Agency", url: "https://itsupportbee.com" },
  ],
};
