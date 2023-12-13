import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog"

import Signup from '@/components/Pages/SignupDialog';

import { siteConfig } from "@/config/site"


export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
          <Signup/>
        </DialogTrigger>
        <DialogContent>
          <Signup />
        </DialogContent>
      </Dialog>
      <a
        href={siteConfig.mainNav[0].path}
        className={buttonVariants()}>Login</a>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
          <Signup />
        </DialogTrigger>
      </Dialog>
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </>
  )
}