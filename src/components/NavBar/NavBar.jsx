import React from 'react'
import Logo from '../../assets/logo.jpg'
export default function NavBar() {
  return (
    <>
    
    

<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://sitmng.ac.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-8" alt="Srinivas institute of Technology Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Srinivas Institute of Technology</span>
    </a>
    
  </div>
</nav>

</>
  )
}
