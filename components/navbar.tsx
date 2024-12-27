import Image from 'next/image'

export function Navbar() {
  return (
    <header className="bg-white shadow-md font-inter">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Innoyatra Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-gray-600">Innoyatra</span>
        </div>
        <ul className="text-gray-400 flex gap-12">
          <li className="hover:text-gray-600">Home</li>
          <li className="hover:text-gray-600">Services</li>
          <li className="hover:text-gray-600">Team</li>
          <li className="hover:text-gray-600">Blog</li>
          <li className="hover:text-gray-600">How it works</li>
          <li className="hover:text-gray-600">Hire</li>
        </ul>
        <button className="rounded-2xl bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 ">
          Contact Us
        </button>
      </nav>
    </header>
  )
}
