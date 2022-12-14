import React from "react"

import logo from "../../images/trendsoftlogo.svg"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-14 ">
        <img src={logo} alt="logo" width="75.74px" height="60px" />
        <div className="text-base flex space-x-8">
          <h1>Home</h1>
          <h1>Services</h1>
          <h1>About</h1>
          <h1>Portfolio</h1>
          <h1>Careers</h1>
        </div>
      </div>
      <button className="border-2 border-black px-6 py-2 rounded-2xl">
        Contact
      </button>
    </div>
  )
}

export default Navbar
