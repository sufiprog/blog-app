import { XIcon } from 'lucide-react'

const SubsTableItem = ({ email, mongoId, date, deleteEmail }) => {
  const emailDate = new Date(date)

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : 'No Emails'}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        className="px-6 py-4"
        onClick={() => {
          const isConfirmed = window.confirm(
            'Are you sure you want to delete this blog?'
          )
          if (isConfirmed) {
            deleteEmail(mongoId)
          }
        }}
      >
        <XIcon className="rounded-full hover:bg-rose-50 text-red-600 cursor-pointer " />
      </td>
    </tr>
  )
}

export default SubsTableItem
