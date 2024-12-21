
const Navbar = () => {
  return (
   <nav className="flex justify-between p-5">
    <div>
        Innoyatra
    </div>
    <ul className="flex gap-4">
        <li>Home</li>
        <li>services</li>
        <li>contact</li>
        <li>about us</li>
    </ul>
    <button className="mr-4">Contact us</button>
   </nav>
  )
}

export default Navbar