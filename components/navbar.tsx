
const Navbar = () => {
  return (
    <nav className="flex justify-between p-5">
      <div>
        Innoyatra
      </div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About Us</li>
      </ul>
      <button className="mr-4">Contact Us</button>
    </nav>
  )
}

export default Navbar