export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Grape Chat",
    description:
        "Grape chat is a fun practice project for making a social media using, next.js, react, typescript, and vite.",
    mainNav: [
        {
            component: "Home",
            path: "/",
            visible: true,
        },
        {
            component: "About",
            path: "/about",
            visible: true,
        },
        {
            component: "Threads",
            path: "/threads",
            visible: true,
        },
    ],
    links: {
        github: "https://github.com/JRigney6993-coder/social-media-project",
        docs: "https://github.com/JRigney6993-coder/social-media-project/blob/main/README.md"
    },
};
