import { Link } from "react-router-dom"
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
<nav className="bg-black ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Valsco</span>
  </a>
  <div className="flex md:order-2">
    <Link to="/Contact">
      <button type="button" className="text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Get started</button>
      </Link>
      <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
       onClick={toggleMobileMenu}>
        
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div  className={`justify-between items-center ${mobileMenuOpen?"hidden":"block"} w-full md:flex md:w-auto md:order-1`}>
  <ul className="flex flex-col text-right font-medium p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0">
  <li>
    <Link to="/"  
onClick={toggleMobileMenu} 
    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hoveranimation"
    aria-current="page">Home</Link>
 
  </li>
  <li>
  <Link to="/About"  onClick={toggleMobileMenu} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hoveranimation"
  aria-current="page">About</Link>
  </li>
  <li>
  <Link to="/Blog"
  onClick={toggleMobileMenu}  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hoveranimation" aria-current="page">Blog</Link>
  </li>
  <li>
  <Link to="/Contact" onClick={toggleMobileMenu}   className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hoveranimation"
  aria-current="page">Contact</Link>
  </li>
</ul>

  </div>
  </div>
</nav>

  )
}

export default Navbar