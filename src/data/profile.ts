export const profile = {
  birthYear: 1995,
  /** First professional web project (WordPress stores); drives the "years of experience" stat. */
  careerStartYear: 2020,
  phone: "+98-918-548-0383",
  phoneRaw: "09185480383",
  email: "mahmodim222@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamadmahmodi/",
  linkedinLabel: "linkedin.com/in/mohamadmahmodi",
  photo: "/images/profile.jpg",
} as const;

export const socialLinks = [
  {
    network: "instagram",
    handle: "mohamad.m9496",
    href: "https://www.instagram.com/mohamad.m9496/",
  },
  {
    network: "telegram",
    handle: "mahmodi298",
    href: "https://t.me/mahmodi298",
  },
  {
    network: "whatsapp",
    handle: "09185480383",
    href: "https://wa.me/989185480383",
  },
] as const;

export type SocialNetwork = (typeof socialLinks)[number]["network"];

export const phoneNumbers = [
  { display: "0918 548 0383", href: "tel:+989185480383" },
  { display: "0937 808 4972", href: "tel:+989378084972" },
] as const;

export const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/skills", key: "skills" },
  { href: "/experience", key: "experience" },
  { href: "/projects", key: "projects" },
  { href: "/ai-studio", key: "aiStudio" },
  { href: "/certificates", key: "certificates" },
  { href: "/contact", key: "contact" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];
