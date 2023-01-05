import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"

import Navbardata from "../../Data/NavbarData"

export default function Header(props) {
  const NavBar = tw.div`flex items-center space-x-14 sticky top-6 z-10`
  const Underline = tw.span`bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=" flex items-center justify-between py-4 1920Screen:px-44  2xl:px-24 440Screen:px-8 px-4 sticky sm:top-6 top-4 bg-white z-[1]">
      <NavBar>
        {/* Logo */}
        <Link to="/">
          <img
            src={props.data.logo}
            alt="Trendsoft Tech Logo"
            className="sm:w-[150px] 240Screen:w-[80px] sm:h-[60px]"
          />
        </Link>
      </NavBar>

      {/* Contact Button */}

      <div className="flex space-x-4 md:space-x-12 ">
        <Link to="/contact/">
          <p className="text-2xl hover:scale-105 duration-500 text-[#0084FF]  px-6 py-2  hidden sm:block  group transition ">
            <Underline>{props.data.button}</Underline>
          </p>
        </Link>
        <Link to="/careers/">
          <p className="text-2xl hover:scale-105 duration-500 text-[#0084FF]  px-6 py-2  hidden sm:block group transition focus:outline-none  ">
            <Underline>Careers</Underline>
          </p>
        </Link>
        <button
          onClick={handleNav}
          className=" block sm:text-2xl text-md  hover:text-blue-400 
           pr-8"
        >
          {nav ? (
            <div>
              <div>
                <p className="text-2xl cursor-pointer text-[#0084FF] group transition">
                  <Underline>{props.data.closeMenu}</Underline>
                </p>
              </div>
              {/*  Menu bar */}

              <div
                className={
                  nav
                    ? "fixed z-20 right-0 1920Screen:top-[12.4%] 2xl:top-[12.8%] sm:top-[13%] top-[11%]  bg-[#0084FF] sm:h-[70vh]  h-[100vh] w-[100%] pt-6"
                    : "fixed hidden "
                }
              >
                <ul className="xl:flex 440Screen:pl-10 pl-4 2xl:pl-32 1920Screen:pl-44 1920Screen:space-x-24  2xl:space-x-16 xl:space-x-12 grid lg:grid-cols-3 340Screen:grid-cols-2 grid-cols-1 ">
                  {Navbardata.map((item, idx) => (
                    <li
                      key={item.id}
                      className="uppercase  text-white mt-6 sm:text-2xl text-sm font-medium "
                    >
                      <Link to={item.page}>{item.title}</Link>
                      <ul className="space-y-2 mt-4 sm:text-base font-normal ">
                        {item.subtitle.map((subItem, idx) => (
                          <li className="hover:text-[#FFC93C] text-white/60 sm:text-lg text-xs">
                            <Link to={subItem.page}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-2xl cursor-pointer text-[#0084FF] group transition">
              <Underline>{props.data.openMenu}</Underline>
            </p>
          )}
        </button>
      </div>
    </div>
  )
}
