export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Title of your site",
  description: "Description of your site.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "about me",
      href: "/aboutMe",
    },
    {
      label: "recipes",
      href: "/recipes",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
};
