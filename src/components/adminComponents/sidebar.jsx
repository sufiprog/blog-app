import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 md:pl-14 py-3 border border-black">
        <Link href="/admin">
        <Image src={assets.logo} alt="Logo" width={120} height={120} />
        </Link>
      </div>
      <div className="w-28 md:w-80 h-full min-h-[100vh] border border-black py-12 relative">
        <div className="w-[50%] md:w-[80%] absolute right-0">
          <Link
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]"
            href={'/admin/addProduct'}
          >
            <Image
              src={assets.add_icon}
              alt="add Product"
              width={28}
              height={28}
            />
            <p className='hidden md:block'>Add blogs</p>
          </Link>
          <Link
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]"
            href={'/admin/blogList'}
          >
            <Image
              src={assets.blog_icon}
              alt="add Product"
              width={28}
              height={28}
            />
            <p className='hidden md:block'>Blog lists</p>
          </Link>
          <Link
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]"
            href={'/admin/subscriptions'}
          >
            <Image
              src={assets.email_icon}
              alt="add Product"
              width={28}
              height={28}
            />
            <p className='hidden md:block'>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
