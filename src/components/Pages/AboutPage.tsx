import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          About us
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This was a project finished in 4 days by Jacob Rigney and Andrew Murphy. We used, React + Typescript for frontend components and Vite + Node.js for our server and backend router. The database we used was MongoDB due to its built in encryption.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href={siteConfig.links.docs}
          className={buttonVariants()}
        >
          Documentation
        </a>
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
