import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"

import Navbardata from "../../Data/NavbarData"
import "./Home.css"

export default function Header(props) {
  const Div = tw.div`absolute flex items-center justify-between py-4  lg:px-48 sm:px-24 px-8 font-mono sticky top-0 bg-white z-[1]`
  const NavBar = tw.div`flex items-center space-x-14 sticky top-0 z-10`

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

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
          <ul className="main-Menu group">
            {Navbardata.map((item, idx) => (
              <li
                key={item.id}
                className="uppercase flex lg:text-7xl md:text-4xl text-2xl text-white/60 pl-8 lg:pl-36  hover:text-white mt-6  "
              >
                <Link to={item.page}>
                  <h1>{item.title}</h1>
                </Link>
                <div className="add">
                  <p>{item.addIcon}</p>
                </div>
                <div className="sub">
                  <p>{item.subIcon}</p>
                </div>

                <ul className="Sub-Menu font-mono w-[50%] ">
                  {item.subtitle.map((subitem, idx) => (
                    <li key={subitem.id} className="lg:text-2xl p-2">
                      <Link to={item.page}>{subitem.title}</Link>
                      <ul className="Nested-Menu">
                        {subitem.secondsubtitle.map((i, idx) => (
                          <li key={i.id} className="lg:text-2xl p-2">
                            <Link to={item.page}> {i.title}</Link>
                            <ul className=" Sub-Nested-Menu">
                              {i.threesubtitle.map((list, idx) => (
                                <li key={list.id} className="text-2xl p-2">
                                  <Link to={item.page}>{list.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
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
