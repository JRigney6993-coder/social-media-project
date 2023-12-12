import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button";

import { siteConfig } from "@/config/site"


export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <a
        href={siteConfig.links.login}
        className={buttonVariants()}>Login</a>
      <a
        href={siteConfig.links.signup}
        className={buttonVariants({ variant: "outline" })}>Signup</a>
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </>
  )
}