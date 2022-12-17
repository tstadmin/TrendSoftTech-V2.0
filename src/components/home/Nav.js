import React from "react"
import tw from "twin.macro"
import logo from "../../images/trendsoftlogo.svg"

const Header = () => {
  const Div = tw.div`bg-black flex items-center justify-between  lg:px-48 sm:px-20 px-8 bg-white`
  // const Button = tw.div`border-2 border-black px-6 py-2 rounded-2xl 240Screen:hidden lg:block`
  ///  const Navbar = tw.div`text-base lg:flex space-x-8 240Screen:hidden`
  return (
    <Div>
      <div className="flex items-center space-x-14 text-black sticky top-0 z-10 ">
        <img src={logo} alt="logo" width="75.74px" height="60px" />

        <div className="text-base lg:flex space-x-8 240Screen:hidden">
          <h1>Home</h1>
          <h1>Services</h1>
          <h1>About</h1>
          <h1>Portfolio</h1>
          <h1>Careers</h1>
        </div>
      </div>
      <button className="border-2 border-black text-black  px-6 py-2 rounded-full 240Screen:hidden lg:block">
        Contact
      </button>
    </Div>
  )
}

export default Header
