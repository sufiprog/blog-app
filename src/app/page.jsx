import BlogList from '@/components/BlogList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function TestBlogAPI() {
  return (
    <div>
      <ToastContainer  />
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}
