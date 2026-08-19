// Site-wide configuration.
export const siteConfig = {
  name: "Nova Agency",
  tagline: "Building Brands for the Digital World",
  description:
    "Nova Agency helps businesses build and grow their digital presence through UI/UX, graphic design, web development, mobile apps, content, video, SEO and social media.",
  url: "https://novaagency.example.com",
  whatsappNumber: "923063977360", // digits only, with country code, no + or spaces
  whatsappDisplay: "+92 306 3977360",
  instagramHandle: "novaagency.pk",
  email: "novaagencypk@gmail.com",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const instagramLink = `https://instagram.com/${siteConfig.instagramHandle}`;
