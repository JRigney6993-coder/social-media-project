import { siteConfig } from "@/config/site";
import { buttonVariants, Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Signup from '@/components/Pages/SignupDialog';

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Social media made perfect <br className="hidden sm:inline" />
          With Grape chat.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Grape chat is a social platform which utilizes threads to give users the best experience. Threads are a great way to communicate and share your opinion about topics. Users are able to create, like, and comment to threads.
        </p>
      </div>
      <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Get Started!</Button>
            </DialogTrigger>
            <DialogContent>
              <Signup />
            </DialogContent>
          </Dialog>
        <a
          href={siteConfig.mainNav[1].path}
          className={buttonVariants({ variant: "outline" })}
        >
          About Us!
        </a>
      </div>
    </section>
  )
}
