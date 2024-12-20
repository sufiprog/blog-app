import ConnectDB from '../../../../lib/config/dbConfig';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import BlogModel from '../../../../models/blogModel';
import path from 'path';

export async function GET(request) {
  try {
    return NextResponse.json({ message: 'API Working' });
  } catch (error) {
    console.error('Error during GET request:', error);
    return NextResponse.json({ error: 'Failed to process the GET request' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await ConnectDB();  // Ensure database connection inside the handler
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const title = formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');
    const author = formData.get('author');
    const authorImg = formData.get('authorImg');

    if (!image || !title || !description || !category || !author || !authorImg) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const publicPath = path.join(process.cwd(), 'public');  // Use process.cwd() for absolute path resolution
    const imagePath = path.resolve(publicPath, `${timestamp}_${image.name}`);
    await writeFile(imagePath, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogdata = {
      title,
      description,
      category,
      author,
      authorImg,
      image: imgUrl,
    };

    await BlogModel.create(blogdata);  // Saving data to DB

    console.log('Blog data saved to the database');
    return NextResponse.json({ success: true, msg: 'Blog Added' });
  } catch (error) {
    console.error('Error during POST request:', error);
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
}
