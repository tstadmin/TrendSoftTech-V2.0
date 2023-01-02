import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"

import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"

import { FooterIconLogo, FooterIconStyles } from "../home/HomeStyle.js"

import Navbardata from "../../Data/NavbarData"
import "./Home.css"

import { Disclosure } from "@headlessui/react"
import { IoIosArrowDown } from "react-icons/io"

export default function Header(props) {
  const Div = tw.div`absolute flex items-center justify-between py-4  lg:px-48 sm:px-24 px-8 font-mono sticky top-0 bg-white z-[1] `
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

        {/* Desktop Menu */}

        <div
          className={
            nav
              ? "fixed z-20 right-0 top-0 bg-blue-400 h-screen w-[100%] pt-24 "
              : "fixed -left-[160%] "
          }
        >
          <ul className="main-Menu group hidden 440Screen:block">
            {Navbardata.map((item, idx) => (
              <li
                key={item.id}
                className="uppercase flex xl:text-7xl lg:text-3xl text-xl text-white/60 pl-8 2xl:pl-36  hover:text-white mt-6  "
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
                <ul className="Sub-Menu font-mono w-[50%]">
                  {item.subtitle.map((subitem, idx) => (
                    <li key={subitem.id} className="xl:text-2xl text-sm p-2">
                      <Link to={subitem.page}>{subitem.title}</Link>
                      <ul className="Nested-Menu ">
                        {subitem.secondsubtitle.map((i, idx) => (
                          <li key={i.id} className="xl:text-2xl text-sm p-2">
                            <Link to={i.page}> {i.title}</Link>
                            <ul className=" Sub-Nested-Menu">
                              {i.threesubtitle.map((list, idx) => (
                                <li
                                  key={list.id}
                                  className="xl:text-2xl text-sm p-2"
                                >
                                  <Link to={list.page}>{list.title}</Link>
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

          {/*  Mobile Menu */}

          <div className="uppercase text-lg font-medium text-white ml-2 440Screen:hidden block ">
            <Link to="/">
              <h1>Home</h1>
            </Link>
            <Link to="/about/">
              <h1>About</h1>
            </Link>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full">
                    <Link to="/services/">
                      <span>Services</span>
                    </Link>
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-white my-[2%] ml-4`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-2 text-sm text-white space-y-1">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full">
                            <Link to="/services/accessibility/">
                              <span>Accessibility</span>
                            </Link>
                            <IoIosArrowDown
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-4 w-4 text-white my-[1%] ml-4 `}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 py-2  text-sm text-white space-y-1">
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="flex w-full">
                                    <Link to="/services/docAccessibility/accessiblePDFUA/">
                                      <span>Doc Accessibility</span>
                                    </Link>
                                    <IoIosArrowDown
                                      className={`${
                                        open ? "rotate-180 transform" : ""
                                      } h-4 w-4 text-white my-[1%] ml-4`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="px-4 py-2 text-sm text-white space-y-1">
                                    <Link to="/services/docAccessibility/accessiblePDFUA/">
                                      <h1>Accessible Pdf/ua</h1>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessiblePDFForms/">
                                      <h1>Accessible Pdf Forms </h1>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessibleWord/">
                                      <h1>Accessible Word </h1>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessibleExcel/">
                                      <h1>Accessible Excel</h1>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessiblePPT/">
                                      <h1>Accessible Ppt </h1>
                                    </Link>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                            <Link to="/services/webAccessibility/">
                              <h1>Web Accessibility</h1>
                            </Link>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link to="/services/webDevelopment/">
                      <h1>Web Development</h1>
                    </Link>
                    <Link to="/services/ecommerceDevelopment/">
                      <h1>Ecommerce Development</h1>
                    </Link>
                    <Link to="/services/productDevelopment/">
                      <h1>Product Development</h1>
                    </Link>
                    <Link to="/services/mobileDevelopment/">
                      <h1>Mobile Development</h1>
                    </Link>
                    <Link to="/services/uiUXDesign/">
                      <h1>Ui/Ux Design</h1>
                    </Link>
                    <Link to="/services/testing/">
                      <h1>Testing</h1>
                    </Link>
                    <Link to="/services/digitalMarketing/">
                      <h1>Digital Marketing</h1>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Link to="/portfolio/">
              <h1>Portfolio</h1>
            </Link>
            <Link to="/careers/">
              <h1>Careers</h1>
            </Link>
            <Link to="/contact/">
              <h1>Contact</h1>
            </Link>
          </div>

          {/* FooterIcons & content */}
          <div className=" md:px-40 px-8 mt-40 pt-4  bg-white h-full 540Screen:flex justify-between">
            <div>
              <FooterIconLogo>
                <Link
                  to="https://www.facebook.com/trendsofttech/"
                  target="_blank"
                >
                  <FooterIconStyles>
                    <FaFacebookF />
                  </FooterIconStyles>
                </Link>

                <Link
                  to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE2hU0J4z4P2gAAAYViiW5grJXhnU1sVxZd3Vt3HX2uebekQCjbXcACP3SqWZ6AlHcr8fcP6WPuusSq3zYfhd6_lHKXkaScAYFVGSvEFtEJdCzMRdWo0-YyL5CNJT_y1QnzvXg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftrendsoft-technologies-192645240"
                  target="_blank"
                >
                  <FooterIconStyles>
                    <TiSocialLinkedin />
                  </FooterIconStyles>
                </Link>
              </FooterIconLogo>
            </div>
            <div className="mt-8">
              <h1 className="sm:text-xl text-md ">
                © 2023 All Rights Reserved.
              </h1>
            </div>
          </div>
        </div>
      </NavBar>

      {/* Contact Button */}

      <div className="flex space-x-4 md:space-x-12">
        <Link to="/contact/">
          <button className="border-2 text-2xl border-blue-500 hover:scale-105  hover:bg-blue-500 hover:text-white duration-500  px-6 py-2 rounded-full 240Screen:hidden lg:block">
            {props.data.button}
          </button>
        </Link>
        <button
          onClick={handleNav}
          onKeyDown={handleNav}
          className=" block sm:text-2xl text-md underline underline-offset-2 hover:text-blue-400 font-mono pr-8"
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
