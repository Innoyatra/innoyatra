
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="bg-white shadow-md font-inter">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Innoyatra Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-medium text-[#374143]">INNOYATRA</span>
        </div>
        <ul className="flex gap-14">
          <li className="hover:text-gray-600 font-medium">Home</li>
          <li className="hover:text-gray-600 font-medium">Services</li>
          <li className="hover:text-gray-600 font-medium">Team</li>
          <li className="hover:text-gray-600 font-medium">Blog</li>
          <li className="hover:text-gray-600 font-medium">How it Works</li>
          <li className="hover:text-gray-600 font-medium">Hire</li>
        </ul>
        <button className="rounded-2xl bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 ">
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default Navbar
