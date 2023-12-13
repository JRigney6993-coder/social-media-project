import { siteConfig } from "@/config/site";
import { buttonVariants, Button } from "@/components/ui/button";

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
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "default"})} 
        >
          Get Started!
        </a>
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          About Us!
        </a>
      </div>
    </section>
  )
}
