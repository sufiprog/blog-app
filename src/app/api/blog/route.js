import ConnectDB from '../../../../lib/config/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import BlogModel from '../../../../models/blogModel';

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

export async function GET(request) {
    return NextResponse.json({ message: "API Working" });
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogdata = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            authorImg: formData.get('authorImg'),
            image: imgUrl,
        };

        await BlogModel.create(blogdata);
        console.log("Blog data saved to the database");

        return NextResponse.json({ success: true, msg: "Blog Added" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to process the request" }, { status: 500 });
    }
}