import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import {Label} from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    user_name: '',
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
      const response = await fetch('http://localhost:5000/users/', {
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
      <DialogTitle>Signup</DialogTitle>
      <DialogDescription>
        Remember to keep your password is secure!
      </DialogDescription>
    </DialogHeader><div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="user_name" className="text-right">
            Username
          </Label>
          <Input
            id="user_name"
            className="col-span-3"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange} 
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Legal Name
          </Label>
          <Input
            id="name"
            className="col-span-3" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            className="col-span-3" 
            name="email"
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
            className="col-span-3"
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div><DialogFooter>
        <Button type="submit">Continue</Button>
      </DialogFooter>
      </form>
    </>
  )
}

