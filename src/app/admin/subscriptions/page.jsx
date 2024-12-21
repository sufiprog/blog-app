'use client'

import SubsTableItem from '@/components/adminComponents/subscription-table-item'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [emails, setEmails] = useState([])

  const fetchEmails = async () => {
    const response = await axios.get('/api/email')
    setEmails(response.data.emails)
  }

  const deleteEmail = async (mongoId) => {
    try {
      const response = await axios.delete('/api/email', {
        params: { id: mongoId },
      })
  
      if (response.data.success) {
        toast.success(response.data.msg)
        setEmails(prevEmails => prevEmails.filter(item => item._id !== mongoId)) // Update the list after deleting
      } else {
        toast.error('Error')
      }
    } catch (error) {
      toast.error('An error occurred while deleting the email')
    }
  }
  

  useEffect(() => {
    fetchEmails()
  }, [])

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="max-w-[600px] relative h-[80vh] pt-2 overflow-x-auto border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscriptiom
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubsTableItem
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
