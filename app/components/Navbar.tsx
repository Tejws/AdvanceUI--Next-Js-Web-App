'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import type { Config } from 'tailwindcss'

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 py-5 ", className)}>
         <Menu setActive={setActive}>
            <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem></Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music</HoveredLink>
                <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                <HoveredLink href="/courses">Songwriting</HoveredLink>
                <HoveredLink href="/courses">Music Production</HoveredLink></div>
                
                </MenuItem>
             
                <Link href={"/contact"}></Link>
                <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
             
             </Menu>
   
    </div>
  )
}

export default Navbar
