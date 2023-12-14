import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button'

export default function Confirm({ assignment }: {assignment: string}) {
  return (
    <><DialogHeader>
      <DialogTitle>Are you sure you want to continue?</DialogTitle>
      <DialogDescription>
        {assignment}
      </DialogDescription>
    </DialogHeader><DialogFooter>
      </DialogFooter></>
  )
}