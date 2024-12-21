import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between flex-col gap-2 px-[3%] sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Link href={"/"}>
          <Image src={assets.logo_light} alt='footer logo' width={120} />
        </Link>
        <div className='flex flex-row gap-2 items-center'>
          <a target='_blank' href={"https://github.com/sufiprog/"}><Image alt='social-icon' width={30} height={30} src={"/github.png"} className='rounded-full' /></a>
          <a target='_blank' href={"https://linkedin.com/in/sufiprog/"}><Image alt='social-icon' width={30} height={30} src={"/linkedin.png"} className='rounded-full' /></a>
          <a target='_blank' href={"https://sufyancode.me/"}><Image alt='social-icon' width={30} height={30} src={"/avatar.png"} className='rounded-full' /></a>
        </div>
    </div>
  )
}

export default Footer
