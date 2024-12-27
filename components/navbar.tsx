
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="bg-white shadow-md font-inter">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/Logo.svg"
            alt="Innoyatra Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-medium text-[#374143] cursor-pointer">InnoYatra</span>
        </div>
        <ul className="flex gap-14">
          <li className="hover:text-gray-500 font-medium cursor-pointer">Home</li>
          <li className="hover:text-gray-500 font-medium cursor-pointer">Services</li>
          <li className="hover:text-gray-500 font-medium cursor-pointer">Team</li>
          <li className="hover:text-gray-500 font-medium cursor-pointer">Blog</li>
          <li className="hover:text-gray-500 font-medium cursor-pointer">How it Works</li>
          <li className="hover:text-gray-500 font-medium cursor-pointer">Hire</li>
        </ul>
        <button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 ">
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default Navbar
