"use client"
import { Menu, Sparkles } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import React, { use } from "react"
import { UserButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
})

const Navbar = () => {
  return (
    // HomePage LINK
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary'>
      <div className='flex items-center'>
        <Menu className='block md:hidden' />
        <Link href='/'>
          <h1
            className={cn(
              "hidden md:block text-xl md:text-2xl font-bold text-primary",
              font.className
            )}
          >
            Chat Companion
          </h1>
        </Link>
      </div>

      <div className='flex items-center gap-x-3'>
        <Button variant='premium' size='sm'>
          Upgrade <Sparkles className='h-4 w-4 fill-white text-white ml-2' />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default Navbar
