import Image from "next/image";

const page = () => {
  return ( <div>
  <div className="flex flex-col items-center justify-center h-[90vh]">
    <h1 className="pb-6 text-3xl font-bold text-gray-700">Welcome to Admin Panel</h1>
    <Image alt="Blog Admmin Panel" src={'/blog.png'} width={300} height={300}/>
  </div>
  </div> );
}
 
export default page;