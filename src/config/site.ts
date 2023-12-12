export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Grape Chat",
  description:
    "Grape chat is a fun practice project for making a social media using, next.js, react, typescript, and vite.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "about",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    login: "",
    signup: "",
  },
}