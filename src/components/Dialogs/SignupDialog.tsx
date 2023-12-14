import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import {Label} from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Signup() {
  return (
    <><DialogHeader>
      <DialogTitle>Signup</DialogTitle>
      <DialogDescription>
        Remember to keep your password is secure!
      </DialogDescription>
    </DialogHeader><div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            className="col-span-3"
            type="password" />
        </div>
      </div><DialogFooter>
        <Button type="submit">Continue</Button>
      </DialogFooter></>
  )
}

