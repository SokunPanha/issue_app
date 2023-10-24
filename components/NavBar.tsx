"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai"
import classNames from 'classnames';
export default function NavBar() {
  const currentParam = usePathname()
  const links = [
    { title: "Issue", url: "/issue" },
    { title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <nav className="w-full bg-gray-100 flex ">
      <div className='flex'>
        <Link href={"/"} className='p-4  flex justify-center items-center'><AiFillBug /></Link>

        {
          links.map((link) => {
            return (
              <Link className={
                classNames({
                  "border-b-[3px] text-black border-black transition-all ease-linear duration-100": currentParam == link.url,
                  "text-gray-600": currentParam !== link.url,
                  "p-4": true
                })
              } href={link.url}>{link.title}</Link>
            )
          })
        }
      </div>
    </nav>
  )
}
