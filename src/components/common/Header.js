import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"

import Navbardata from "../../Data/NavbarData"

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
        {/* Logo */}
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
              ? "fixed z-20 right-0 top-[9.5%] bg-[#0084FF] h-[60%] w-[100%] pt-6"
              : "fixed hidden "
          }
        >
          <ul className="flex pl-8 2xl:pl-48 space-x-20 ">
            {Navbardata.map((item, idx) => (
              <li
                key={item.id}
                className="uppercase  text-white/60  mt-6 text-lg font-medium "
              >
                {item.title}
                <ul className="space-y-2 mt-4 text-base font-normal ">
                  {item.subtitle.map((subItem, idx) => (
                    <li className="hover:text-[#FFC93C] ">{subItem.title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/*  Mobile Menu */}

          {/* <ul className="uppercase text-lg font-medium text-white ml-2 440Screen:hidden block ">
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
          </ul> */}
        </div>
      </NavBar>

      {/* Contact Button */}

      <div className="flex space-x-4 md:space-x-12">
        <Link to="/contact/">
          <p className="text-2xl hover:scale-105 duration-500  px-6 py-2  hidden lg:block">
            {props.data.button}
          </p>
        </Link>
        <Link to="/careers/">
          <p className="text-2xl hover:scale-105 duration-500  px-6 py-2  hidden lg:block">
            Careers
          </p>
        </Link>
        <button
          onClick={handleNav}
          className=" block sm:text-2xl text-md underline underline-offset-2 hover:text-blue-400 
           pr-8"
        >
          {nav ? (
            <p className="text-black  cursor-pointer">{props.data.closeMenu}</p>
          ) : (
            <p className="text-black  cursor-pointer">{props.data.openMenu}</p>
          )}
        </button>
      </div>
    </Div>
  )
}
