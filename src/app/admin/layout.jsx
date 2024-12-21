import { assets } from '@/Assets/assets'
import Sidebar from '@/components/adminComponents/sidebar'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex pb-5">
        <ToastContainer theme='dark' />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              src={assets.profile_icon}
              alt="profile image"
              width={40}
              height={40}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}
