import { XIcon } from 'lucide-react'
import Image from 'next/image'

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date)

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium to-gray-900 whitespace-nowrap"
      >
        <Image
          src={authorImg ? authorImg : '/authorSufi.png'}
          width={40}
          height={40}
          className="border rounded-full"
          alt="author Image"
        />
        <p>{author ? author : 'Anonymous'}</p>
      </th>
      <td className="px-6 py-4">
        <h4 className="truncate text-[18px] max-w-[20ch]">
          {title ? title : 'no title'}
        </h4>
      </td>
      <td className="px-6 py-4 hidden md:block">{BlogDate.toDateString()}</td>
      <td
        className="px-6 py-4"
        onClick={() => {
          const isConfirmed = window.confirm(
            'Are you sure you want to delete this blog?'
          )
          if (isConfirmed) {
            deleteBlog(mongoId)
          }
        }}
      >
        <XIcon className="rounded-full hover:bg-rose-50 text-red-600 cursor-pointer " />
      </td>
    </tr>
  )
}

export default BlogTableItem
