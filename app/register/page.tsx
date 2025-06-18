"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import Logo from "@/components/Logo"
import Themetoggle from "@/components/theme-toggle"
import Link from "next/link"

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function RegisterPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      credentials: "include",
    })

    if (res.ok) {
      toast.success("Registration successful!")
      router.push("/login")
    } else {
      toast.error("User already exists")
    }
  }

  return (
    <section className="max-w-sm mx-auto mt-24">
      <div className="w-full px-6 py-4">
              <div className="flex items-center gap-2">
                <Logo width={44} height={44} />
                 <h1 className="text-2xl font-bold font-mono">ChatterBot</h1>
              </div>
              <Themetoggle />
            </div>
            <div className="flex justify-center items-center flex-col border-border">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter a secure password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <Link href='/login' className="text-primary text-right underline">Already have an account?</Link>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>
      </div>
    </section>
  )
}
