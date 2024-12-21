'use client'

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { LoaderCircle } from 'lucide-react';

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Sufi',
    authorImg: '/authorSufi.png',
  })
  
  const [loading, setLoading] = useState(false) // State to manage loading

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData((data) => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true) // Start loading

    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('author', data.author)
    formData.append('authorImg', data.authorImg)
    formData.append('image', image)
    
    try {
      const response = await axios.post('/api/blog', formData)
      if (response.data.success) {
        toast.success("Blog Added")
        setImage(false)
        setData({
          title: '',
          description: '',
          category: 'Startup',
          author: 'Sufi',
          authorImg: '/authorSufi.jpg',
        })
      } else {
        toast.error("Something went wrong")
      }
    } catch (error) {
      toast.error("Error during submission")
    } finally {
      setLoading(false) // Stop loading after response
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            alt="Upload are"
            height={70}
            className="mt-4 cursor-pointer object-cover border "
          />
        </label>
        <input
          accept=".png, .jpeg, .jpg, .webp"
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          type="text"
          placeholder="Write content here"
          rows={6}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 text-white bg-black flex items-center justify-center"
        >
          {loading ? <LoaderCircle className="animate-spin w-5 h-5" /> : "ADD"}
        </button>
      </form>
    </>
  )
}

export default AddProduct
