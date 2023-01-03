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
  const Div = tw.div`absolute flex items-center justify-between py-4  lg:px-48 sm:px-24 px-8  sticky top-0 bg-white z-[1] `
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
              : "fixed hidden"
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

                <Link to="">
                  {" "}
                  <div className="add">
                    <p>{item.addIcon}</p>
                  </div>
                </Link>

                <div className="sub">
                  <p>{item.subIcon}</p>
                </div>
                <ul className="Sub-Menu  w-[50%] ">
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

          <ul className="uppercase text-lg font-medium text-white ml-2 440Screen:hidden block ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about/">
              <li>About</li>
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
                                      <li>Doc Accessibility</li>
                                    </Link>
                                    <IoIosArrowDown
                                      className={`${
                                        open ? "rotate-180 transform" : ""
                                      } h-4 w-4 text-white my-[1%] ml-4`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="px-4 py-2 text-sm text-white space-y-1">
                                    <Link to="/services/docAccessibility/accessiblePDFUA/">
                                      <li>Accessible Pdf/ua</li>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessiblePDFForms/">
                                      <li>Accessible Pdf Forms </li>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessibleWord/">
                                      <li>Accessible Word </li>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessibleExcel/">
                                      <li>Accessible Excel</li>
                                    </Link>
                                    <Link to="/services/docAccessibility/accessiblePPT/">
                                      <li>Accessible Ppt </li>
                                    </Link>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                            <Link to="/services/webAccessibility/">
                              <li>Web Accessibility</li>
                            </Link>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link to="/services/webDevelopment/">
                      <li>Web Development</li>
                    </Link>
                    <Link to="/services/ecommerceDevelopment/">
                      <li>Ecommerce Development</li>
                    </Link>
                    <Link to="/services/productDevelopment/">
                      <li>Product Development</li>
                    </Link>
                    <Link to="/services/mobileDevelopment/">
                      <li>Mobile Development</li>
                    </Link>
                    <Link to="/services/uiUXDesign/">
                      <li>Ui/Ux Design</li>
                    </Link>
                    <Link to="/services/testing/">
                      <li>Testing</li>
                    </Link>
                    <Link to="/services/digitalMarketing/">
                      <li>Digital Marketing</li>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Link to="/portfolio/">
              <li>Portfolio</li>
            </Link>
            <Link to="/careers/">
              <li>Careers</li>
            </Link>
            <Link to="/contact/">
              <li>Contact</li>
            </Link>
          </ul>

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
              <p className="sm:text-xl text-md ">© 2023 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </NavBar>

      {/* Contact Button */}

      <div className="flex space-x-4 md:space-x-12">
        <Link to="/contact/">
          <button className="border-2 text-2xl border-blue-500 rounded-full hover:scale-105  hover:bg-blue-500 hover:text-white duration-500  px-6 py-2  hidden lg:block">
            {props.data.button}
          </button>
        </Link>
        <button
          onClick={handleNav}
          className=" block sm:text-2xl text-md underline underline-offset-2 hover:text-blue-400  pr-8"
        >
          {nav ? (
            <p className="text-white z-30 absolute cursor-pointer">
              {props.data.closeMenu}
            </p>
          ) : (
            <p className="text-black  cursor-pointer">{props.data.openMenu}</p>
          )}
        </button>
      </div>
    </Div>
  )
}
