import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function ThreadsPage() {
    return (
      <section className="container mx- grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Threads
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            We automatically recommend you threads based off your preferences!
          </p>
        </div>

        <Table>
          <TableCaption>Threads found for you!</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Author</TableHead>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Snipit</TableHead>
              <TableHead className="text-right w-[150px]">Topic</TableHead>
              <TableHead className="text-right w-[150px]">Upload Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="cursor-pointer">
              <TableCell className="font-medium">Jakey Rigney</TableCell>
              <TableCell>How to code C#</TableCell>
              <TableCell>Python is a great language for new programmers due to its simple syntax and being a high level programming language.</TableCell>
              <TableCell className="text-right">Tech</TableCell>
              <TableCell className="text-right">12/18/2023</TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
              <TableCell className="font-medium">Jakey Rigney</TableCell>
              <TableCell>How to code C#</TableCell>
              <TableCell>Python is a great language for new programmers due to its simple syntax and being a high level programming language.</TableCell>
              <TableCell className="text-right">Tech</TableCell>
              <TableCell className="text-right">12/18/2023</TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
              <TableCell className="font-medium">Jakey Rigney</TableCell>
              <TableCell>How to code C#</TableCell>
              <TableCell>Python is a great language for new programmers due to its simple syntax and being a high level programming language.</TableCell>
              <TableCell className="text-right">Tech</TableCell>
              <TableCell className="text-right">12/18/2023</TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
              <TableCell className="font-medium">Jakey Rigney</TableCell>
              <TableCell>How to code C#</TableCell>
              <TableCell>Python is a great language for new programmers due to its simple syntax and being a high level programming language.</TableCell>
              <TableCell className="text-right">Tech</TableCell>
              <TableCell className="text-right">12/18/2023</TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
              <TableCell className="font-medium">Jakey Rigney</TableCell>
              <TableCell>How to code C#</TableCell>
              <TableCell>Python is a great language for new programmers due to its simple syntax and being a high level programming language.</TableCell>
              <TableCell className="text-right">Tech</TableCell>
              <TableCell className="text-right">12/18/2023</TableCell>
            </TableRow>
            <TableRow className="cursor-pointer">
              <TableCell className="font-medium">Jakey Rigney</TableCell>
              <TableCell>How to code C#</TableCell>
              <TableCell>Python is a great language for new programmers due to its simple syntax and being a high level programming language.</TableCell>
              <TableCell className="text-right">Tech</TableCell>
              <TableCell className="text-right">12/18/2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </section>
    )
  }
  