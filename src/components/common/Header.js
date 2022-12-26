import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"

import Navbardata from "../../Data/NavbarData"
import "./Home.css"

export default function Header(props) {
  const Div = tw.div`flex items-center justify-between py-4  lg:px-48 sm:px-24 px-8 font-mono sticky top-0 bg-white z-[500]`
  const NavBar = tw.div`flex items-center space-x-14 sticky top-0 z-10`

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ")
  // }

  return (
    <Div>
      <NavBar>
        <Link to="/">
          <img
            src={props.data.logo}
            alt="logo"
            className="sm:w-[150px] 240Screen:w-[80px] sm:h-[60px]"
          />
        </Link>

        <div
          className={
            nav
              ? "fixed z-20 right-0 top-0 bg-blue-400 h-screen w-[100%] pt-24 "
              : "fixed -left-[160%] "
          }
        >
          <ul className="main">
            {Navbardata.map((item, id) => (
              <li className="lg:text-7xl md:text-4xl text-2xl text-white/60 pl-8 lg:pl-36  hover:text-white mt-6  ">
                <Link to={item.page}>{item.title}</Link>

                {/* {item.subtitle.map((subitem, id) => (
                  <>
                    <li>
                      {subitem.title}
                      {subitem.secondsubtitle.map((i, id) => (
                        <ul className="next-nav  ">
                          <li>
                            {i.title}
                            {i.threesubtitle.map((list, id) => (
                              <ul className="sub-next">
                                <li className="">{list.title}</li>
                              </ul>
                            ))}
                          </li>
                        </ul>
                      ))}
                    </li>
                  </>
                ))} */}
              </li>
            ))}
          </ul>
        </div>
      </NavBar>
      <div className="flex space-x-4 md:space-x-12">
        <Link to="/contact/">
          <button className="border-2 text-2xl border-blue-500 hover:scale-105  hover:bg-blue-500 hover:text-white duration-500  px-6 py-2 rounded-full 240Screen:hidden lg:block">
            {props.data.button}
          </button>
        </Link>
        <button
          onClick={handleNav}
          onKeyDown={handleNav}
          className=" block sm:text-2xl text-md underline underline-offset-2 hover:text-blue-400 font-mono"
        >
          {nav ? (
            <h1 className="text-white z-30 absolute cursor-pointer">
              {props.data.closeMenu}
            </h1>
          ) : (
            <h1 className="text-black  cursor-pointer">
              {props.data.openMenu}
            </h1>
          )}
        </button>
      </div>
    </Div>
  )
}

// text-2xl ml-[15%] absolute z-50 flex-shrink-0
// text-2xl next-nav ml-[15%]
// ml-[15%] absolute z-50
// text-2xl ml-[18%]