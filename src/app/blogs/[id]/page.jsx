'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
    const safeParams = await params

    for (let i = 0; i < blog_data.length; i++) {
      if (Number(safeParams.id) === blog_data[i].id) {
        setData(blog_data[i])
        break
      }
    }
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return data ? (
    <>
      <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28 ">
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src={assets.logo}
              width={180}
              className="w-[130px] sm:w-auto"
              alt=""
            />
          </a>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-1">
            Get started <Image src={assets.arrow} width={12} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto  rounded-full border border-white mt-6"
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto playwrite">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[880px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p className="">{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step1: Some text appear
        </h3>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          aliquam corrupti accusantium eaque repudiandae veritatis quos sint,
          consectetur minus sed incidunt, amet illum ad voluptatum dolorem.
          Dolorum, vitae hic? Nisi eos ut ex aliquid facere voluptatibus
          temporibus ratione cum fugiat!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step1: Some text appear
        </h3>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          aliquam corrupti accusantium eaque repudiandae veritatis quos sint,
          consectetur minus sed incidunt, amet illum ad voluptatum dolorem.
          Dolorum, vitae hic? Nisi eos ut ex aliquid facere voluptatibus
          temporibus ratione cum fugiat!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step1: Some text appear
        </h3>
        <p className="my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          aliquam corrupti accusantium eaque repudiandae veritatis quos sint,
          consectetur minus sed incidunt, amet illum ad voluptatum dolorem.
          Dolorum, vitae hic? Nisi eos ut ex aliquid facere voluptatibus
          temporibus ratione cum fugiat!
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4 ">
            Share this article on social media
          </p>
          <div className="flex ">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <div>No data</div>
    </>
  )
}

export default page
