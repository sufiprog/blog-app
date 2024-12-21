import { NextResponse } from 'next/server'
import ConnectDB from '../../../../lib/config/dbConfig'
import EmailModel from '../../../../models/emailModel'

const LoadDB = async () => {
  ConnectDB()
}

LoadDB()

export async function POST(request) {
  const formData = await request.formData()
  const emailData = {
    email: `${formData.get('email')}`,
  }
  await EmailModel.create(emailData)
  return NextResponse.json({ success: true, msg: 'Email Subscribed' })
}

export async function GET(request) {
  const emails = await EmailModel.find({})
  return NextResponse.json({ emails })
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id')

  // Ensure the ID exists and the document is deleted
  const deletedEmail = await EmailModel.findByIdAndDelete(id)

  if (deletedEmail) {
    return NextResponse.json({ success: true, msg: 'Email Deleted' })
  } else {
    return NextResponse.json({ success: false, msg: 'Email not found' })
  }
}
