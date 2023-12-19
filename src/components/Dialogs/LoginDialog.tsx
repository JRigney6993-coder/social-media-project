import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import {Label} from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      var result = await response.json();
      if (result.success){
        localStorage.setItem('userToken', result);
      }

    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
     <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Forgot your password? <a className="text-purple" href="/">Click here!</a>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              className="col-span-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              className="col-span-3"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </form>
    </>
  )
}