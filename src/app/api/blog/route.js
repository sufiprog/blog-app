import ConnectDB from '../../../../lib/config/dbConfig'
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import BlogModel from '../../../../models/blogModel'
import path from 'path'

const fs = require('fs')

const LoadDB = async () => {
  await ConnectDB()
}
LoadDB()

//API Endpoint for GET Blog
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get('id')
  if (blogId) {
    const blog = await BlogModel.findById(blogId)
    return NextResponse.json(blog)
  } else {
    const blogs = await BlogModel.find({})
    return NextResponse.json({ blogs })
  }
}

//API Endpoint for Uploading Blog
export async function POST(request) {
  try {
    const formData = await request.formData()
    const timestamp = Date.now()

    const image = formData.get('image')
    const title = formData.get('title')
    const description = formData.get('description')
    const category = formData.get('category')
    const author = formData.get('author')
    const authorImg = formData.get('authorImg')

    if (
      !image ||
      !title ||
      !description ||
      !category ||
      !author ||
      !authorImg
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)

    const publicPath = path.join(process.cwd(), 'public') // Use process.cwd() for absolute path resolution
    const imagePath = path.resolve(publicPath, `${timestamp}_${image.name}`)
    await writeFile(imagePath, buffer)
    const imgUrl = `/${timestamp}_${image.name}`

    const blogdata = {
      title,
      description,
      category,
      author,
      authorImg,
      image: imgUrl,
    }

    await BlogModel.create(blogdata) // Saving data to DB

    return NextResponse.json({ success: true, msg: 'Blog Added' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    )
  }
}

//API Endpoint for Deleting Blog
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id')
  const blog = await BlogModel.findById(id)
  fs.unlink(`./public${blog.image}`, () => {})
  await BlogModel.findByIdAndDelete(id)
  return NextResponse.json({ msg: 'Blog Deleted' })
}
