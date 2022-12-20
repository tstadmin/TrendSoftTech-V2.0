import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"
import logo from "../../images/trendsoftlogo.svg"
import styled from "@emotion/styled/macro"
styled.ul``
const Header = () => {
  const Div = tw.div`flex items-center justify-between  lg:px-48 sm:px-20 px-8 font-mono`
  const NavBar = tw.div`flex items-center space-x-14 sticky top-0 z-10`
  // const Button = tw.div`border-2 border-black px-6 py-2 rounded-2xl 240Screen:hidden lg:block`
  ///  const Navbar = tw.div`text-base lg:flex space-x-8 240Screen:hidden`

  return (
    <Div>
      <NavBar>
        <Link to="/">
          <img src={logo} alt="logo" width="75.74px" height="60px" />
        </Link>

        <div className="text-base lg:flex space-x-8 240Screen:hidden ">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <h1>Services</h1>
          <Link to="/about/">
            <h1>About</h1>
          </Link>
          <Link to="/portfolio/">
            <h1>Portfolio</h1>
          </Link>
          <h1>Careers</h1>
        </div>
      </NavBar>
      <Link to="/contact/">
        <button className="border-2 border-blue-500 hover:scale-105  hover:bg-blue-500 hover:text-white duration-500  px-6 py-2 rounded-full 240Screen:hidden lg:block">
          Contact
        </button>
      </Link>
    </Div>
  )
}

export default Header
