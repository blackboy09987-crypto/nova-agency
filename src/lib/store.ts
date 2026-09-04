import { randomUUID } from "crypto";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { PortfolioCategory } from "./data";
import { hasDatabase, readContentRow, writeContentRow } from "./db";

export type Service = {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type PortfolioItem = {
  id: string;
  name: string;
  category: PortfolioCategory;
  description: string;
  url?: string;
  image?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type Content = {
  services: Service[];
  portfolioItems: PortfolioItem[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "content.json");

const seedServices: Service[] = [
  {
    id: "ui-ux-design",
    number: "01",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive and user-focused interfaces designed to create better digital experiences.",
    icon: "layout",
  },
  {
    id: "graphic-designing",
    number: "02",
    slug: "graphic-designing",
    title: "Graphic Designing",
    description:
      "Creative visual designs that communicate your brand and make it memorable.",
    icon: "palette",
  },
  {
    id: "content-writing",
    number: "03",
    slug: "content-writing",
    title: "Content Writing",
    description:
      "Engaging, clear and strategic content created for websites, brands and digital platforms.",
    icon: "pen",
  },
  {
    id: "web-design-development",
    number: "04",
    slug: "web-design-development",
    title: "Web Design & Development",
    description:
      "Modern, responsive and high-performing websites built around your business goals.",
    icon: "code",
  },
  {
    id: "mobile-app-development",
    number: "05",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "User-friendly mobile applications designed for modern businesses and digital products.",
    icon: "device",
  },
  {
    id: "video-reel-creation",
    number: "06",
    slug: "video-reel-creation",
    title: "Video & Reel Creation",
    description:
      "Engaging videos and short-form content designed to capture attention and strengthen your brand.",
    icon: "play",
  },
  {
    id: "seo",
    number: "07",
    slug: "seo",
    title: "SEO",
    description:
      "Search optimization strategies designed to improve visibility, reach and organic growth.",
    icon: "search",
  },
  {
    id: "social-media-management",
    number: "08",
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Strategic content and social media management designed to build your audience and online presence.",
    icon: "share",
  },
];

const seedPortfolioItems: PortfolioItem[] = [
  {
    id: randomUUID(),
    name: "Aliza's Thread House",
    category: "Websites",
    description:
      "A clean, elegant e-commerce website for a premium Pakistani clothing brand — designed for a smooth browsing and shopping experience.",
    url: "https://aliza-thread-house.vercel.app/",
  },
  {
    id: randomUUID(),
    name: "Scents by Hiba",
    category: "Websites",
    description:
      "A modern, visually rich website for a luxury perfume brand, built to showcase their collection and drive online sales.",
    url: "https://scentsbyhiba.vercel.app/",
  },
  {
    id: randomUUID(),
    name: "Aurora Retail",
    category: "Websites",
    description:
      "A concept e-commerce storefront exploring clean navigation and a fast, conversion-focused checkout flow.",
  },
  {
    id: randomUUID(),
    name: "Pulse Fitness App",
    category: "UI/UX",
    description:
      "A concept mobile app interface for a fitness brand, focused on simple onboarding and daily engagement.",
  },
  {
    id: randomUUID(),
    name: "Northline Studio",
    category: "Branding",
    description:
      "A concept visual identity system exploring logo, typography and color for a creative studio brand.",
  },
  {
    id: randomUUID(),
    name: "Bloom & Co. Campaign",
    category: "Social Media",
    description:
      "A concept content series exploring grid layout, tone of voice and visual consistency for a lifestyle brand.",
  },
  {
    id: randomUUID(),
    name: "Momentum Launch Reel",
    category: "Video",
    description:
      "A concept short-form video direction designed to introduce a product launch across social platforms.",
  },
  {
    id: randomUUID(),
    name: "Ledger Finance App",
    category: "Mobile Apps",
    description:
      "A concept finance app interface exploring clarity, trust and ease of use for everyday money management.",
  },
];

const seedTestimonials: Testimonial[] = [
  {
    id: randomUUID(),
    quote:
      "Great working with you — thanks for designing my website, I've already seen improvement in my business!",
    attribution: "Dr. Salman, Dr Salman's Orthodontic & Dental Implantology Centre",
  },
  {
    id: randomUUID(),
    quote:
      "So happy with how my website turned out! Big thanks to Nova Agency for being super helpful, efficient, and great at what they do. If you're looking for a reliable web developer, check them out!",
    attribution: "Aliza, Aliza's Thread House",
  },
  {
    id: randomUUID(),
    quote:
      "Thank you! I'm really happy with how the website turned out. Wishing you guys all the growth!",
    attribution: "Hiba, Scents by Hiba",
  },
];

const seedFaqs: FAQItem[] = [
  {
    id: randomUUID(),
    question: "What services does Nova Agency offer?",
    answer:
      "We provide UI/UX design, graphic design, content writing, web design and development, mobile app development, video and reel creation, SEO, and social media management.",
  },
  {
    id: randomUUID(),
    question: "How can I start a project?",
    answer:
      "Simply contact us through WhatsApp, Instagram DM or our contact form and tell us about your project.",
  },
  {
    id: randomUUID(),
    question: "Do you work with international clients?",
    answer:
      "Yes. Nova Agency is open to working with businesses and clients locally and internationally.",
  },
  {
    id: randomUUID(),
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the project's requirements, complexity, design, functionality and scope. Contact us for a customized quote.",
  },
  {
    id: randomUUID(),
    question: "How long does a project take?",
    answer:
      "Timeline depends on the project's size and requirements. We provide an estimated timeline after understanding the project.",
  },
  {
    id: randomUUID(),
    question: "Can you manage our social media?",
    answer:
      "Yes. We offer social media management along with content creation and strategy.",
  },
  {
    id: randomUUID(),
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can redesign and modernize existing websites to improve their appearance, usability and overall digital experience.",
  },
  {
    id: randomUUID(),
    question: "Do you provide custom packages?",
    answer:
      "Yes. Services can be combined into a customized package according to the client's requirements.",
  },
];

const seedContent: Content = {
  services: seedServices,
  portfolioItems: seedPortfolioItems,
  testimonials: seedTestimonials,
  faqs: seedFaqs,
};

async function ensureFile(): Promise<Content> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Content;
  } catch {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(seedContent, null, 2), "utf-8");
    return seedContent;
  }
}

/**
 * Storage is a JSON file locally (no setup needed for development) and a
 * single JSONB row in Postgres in production (DATABASE_URL set) — see
 * db.ts. Both paths share the exact same read-whole/mutate/write-whole
 * shape, so every function below works unchanged either way.
 */
async function readContent(): Promise<Content> {
  if (hasDatabase()) {
    const row = await readContentRow();
    if (row) return row as Content;
    await writeContentRow(seedContent);
    return seedContent;
  }
  return ensureFile();
}

async function writeContent(content: Content): Promise<void> {
  if (hasDatabase()) {
    await writeContentRow(content);
    return;
  }
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(content, null, 2), "utf-8");
}

// ---- Reads ----

export async function getServices(): Promise<Service[]> {
  return (await readContent()).services;
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return (await readContent()).portfolioItems;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return (await readContent()).testimonials;
}

export async function getFaqs(): Promise<FAQItem[]> {
  return (await readContent()).faqs;
}

export async function getContent(): Promise<Content> {
  return readContent();
}

// ---- Generic section CRUD ----

type SectionKey = keyof Content;

async function createItem<T extends { id: string }>(
  section: SectionKey,
  item: Omit<T, "id">
): Promise<T> {
  const content = await readContent();
  const newItem = { ...item, id: randomUUID() } as T;
  (content[section] as unknown as T[]).push(newItem);
  await writeContent(content);
  return newItem;
}

async function updateItem<T extends { id: string }>(
  section: SectionKey,
  id: string,
  patch: Omit<T, "id">
): Promise<T | null> {
  const content = await readContent();
  const list = content[section] as unknown as T[];
  const index = list.findIndex((i) => i.id === id);
  if (index === -1) return null;
  const updated = { ...patch, id } as T;
  list[index] = updated;
  await writeContent(content);
  return updated;
}

async function deleteItem(section: SectionKey, id: string): Promise<void> {
  const content = await readContent();
  const list = content[section] as { id: string }[];
  content[section] = list.filter((i) => i.id !== id) as never;
  await writeContent(content);
}

// ---- Services ----
export const createService = (item: Omit<Service, "id">) =>
  createItem<Service>("services", item);
export const updateService = (id: string, item: Omit<Service, "id">) =>
  updateItem<Service>("services", id, item);
export const deleteService = (id: string) => deleteItem("services", id);

// ---- Portfolio ----
export const createPortfolioItem = (item: Omit<PortfolioItem, "id">) =>
  createItem<PortfolioItem>("portfolioItems", item);
export const updatePortfolioItem = (id: string, item: Omit<PortfolioItem, "id">) =>
  updateItem<PortfolioItem>("portfolioItems", id, item);
export const deletePortfolioItem = (id: string) => deleteItem("portfolioItems", id);

// ---- Testimonials ----
export const createTestimonial = (item: Omit<Testimonial, "id">) =>
  createItem<Testimonial>("testimonials", item);
export const updateTestimonial = (id: string, item: Omit<Testimonial, "id">) =>
  updateItem<Testimonial>("testimonials", id, item);
export const deleteTestimonial = (id: string) => deleteItem("testimonials", id);

// ---- FAQs ----
export const createFaq = (item: Omit<FAQItem, "id">) =>
  createItem<FAQItem>("faqs", item);
export const updateFaq = (id: string, item: Omit<FAQItem, "id">) =>
  updateItem<FAQItem>("faqs", id, item);
export const deleteFaq = (id: string) => deleteItem("faqs", id);

export async function getServiceById(id: string) {
  return (await getServices()).find((s) => s.id === id) ?? null;
}
export async function getPortfolioItemById(id: string) {
  return (await getPortfolioItems()).find((p) => p.id === id) ?? null;
}
export async function getTestimonialById(id: string) {
  return (await getTestimonials()).find((t) => t.id === id) ?? null;
}
export async function getFaqById(id: string) {
  return (await getFaqs()).find((f) => f.id === id) ?? null;
}
