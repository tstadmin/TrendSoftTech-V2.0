import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"
import { Disclosure } from "@headlessui/react"
import { IoIosArrowDown } from "react-icons/io"

import { RxCross2 } from "react-icons/rx"
import { HiBars3BottomLeft } from "react-icons/hi2"
import { FaHome } from "react-icons/fa"

import { useClickOutside } from "@mantine/hooks"

export default function Header(props) {
  const NavBar = tw.div`flex items-center space-x-14 sticky top-6 z-10`

  const [opened, setOpened] = useState(false)
  const ref = useClickOutside(() => setOpened(false))
  const handleNav = () => {
    setOpened(!opened)
  }

  return (
    <div
      id="nav"
      role="navigation"
      className=" flex items-center justify-between tracking-wide md:py-0 py-2  1920Screen:px-44  2xl:px-24 440Screen:px-8 px-4 sticky top-10  bg-[#ebebeb] z-10 shadow-lg shadow-black/10"
    >
      <NavBar >
        {/* Logo */}
        <div className="p-2">
        <Link to="/">
          <img
            src={props.data.logo}
            alt="Trendsoft Tech Logo"
          
             className="md:w-[211px]  540Screen:w-[150px]  w-[100px] 340Screen:w-[120px]  "
    
          />
        </Link>
       
        </div>
      </NavBar>

      {/* menu items */}

      <div>
        <div className="flex uppercase ">
          <p
            // onClick={() => setOpened(!opened)}
            onClick={handleNav}
            className=" block sm:text-2xl text-md  hover:text-blue-400
           pr-8 "
          >
            {opened ? (
              <button
                id="navbarDropdown"
                className="cursor-pointer text-[#0084FF]   "
              >
                <span
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  className="sr-only"
                >
                  expanded
                </span>
                <RxCross2 className="hidden md:block md:text-3xl sm:text-xl text-lg" />
              </button>
            ) : (
              <button
                aria-labelledby="navbarDropdown"
                className="cursor-pointer text-[#0084FF] "
              >
                <span className="sr-only">menu button collapsed submenu</span>
                <HiBars3BottomLeft  className="md:text-3xl sm:text-xl text-lg" />
              </button>
            )}
          </p>
          <p>
            <Link
              to="/"
              aria-label="Home Button"
              className="cursor-pointer text-[#0084FF]  "
            >
              <FaHome  className="md:text-3xl sm:text-xl text-lg" />
            </Link>
          </p>
        </div>
      </div>

      {/*  Menu bar */}

      {opened && (
        <div
          ref={ref}
          className={
            opened
              ? "fixed overflow-scroll sm:overflow-hidden   z-20 right-0 md:top-[117px] sm:top-[117px]  340Screen:top-[106.7px] top-[100.92px] bg-[#0f6cb3] xl:h-[40vh]  lg:h-[60vh] h-[100vh]  540Screen:w-[100vw] w-[80vw] pt-6  "
              : "fixed hidden "
          }
        >
          <div className="xl:flex 1920Screen:pl-64 2xl:pl-32 lg:pl-18 md:pl-24 pl-8    1920Screen:space-x-18 2xl:space-x-16 xl:space-x-14 grid lg:grid-cols-3 340Screen:grid-cols-2 grid-cols-1 ">
            {props.data.list.map((item, idx) => (
              <h2
                key={item.listItem.id}
                className="  text-white mt-6 xl:text-xl sm:text-lg text-sm sm:font-medium hidden 540Screen:block font-roboto "
              >
                {item.listItem.title}
                <ul className="space-y-2 mt-4  font-normal ">
                  {item.listItem.subTitle?.map((sub, idx) => (
                    <li
                      onClick={() => setOpened(false)}
                      className=" text-[#ebebeb]  1920Screen:text-[16px] text-xs"
                      key={sub.listItem.id}
                    >
                      <Link to={sub.listItem.page}>{sub.listItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </h2>
            ))}
          </div>

          {/*  Mobile Menu */}

          <ul className="uppercase font-medium ml-8 540Screen:hidden block 340Screen:space-y-4  space-y-1 pb-24 ">
            <li className="text-sm text-white ">
              <Link to={props.data.mobilelist.homePage}>
                {props.data.mobilelist.home}
              </Link>
            </li>

            <li className="text-sm text-white">
              <Link to={props.data.mobilelist.aboutPage}>
                {props.data.mobilelist.about}
              </Link>
            </li>

            {/* IT Services */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full">
                    <li className="text-sm text-white uppercase">
                      {props.data.mobilelist.services}
                    </li>
                   
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-white my-[1%] ml-4`}
                    />
                  </Disclosure.Button>

                  <ul>
                    <Disclosure.Panel className="px-4 text-sm  space-y-2 ">
                      {props.data.mobilelist.itServices.map((i,idx) => (
                        <li className="text-white" key={i.listItem.id}>
                          
                          <Link to={i.listItem.page}>{i.listItem.title}</Link>
                        </li>
                      ))}
                    </Disclosure.Panel>
                  </ul>
                </>
              )}
            </Disclosure>

            {/* Testing */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full">
                    <li className="text-white text-sm ">
                      {props.data.mobilelist.test}
                    </li>
                 
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-white my-[1%] ml-4 `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 space-y-1">
                    {props.data.mobilelist.subTest.map((i,idx) => (
                      <li className="text-white" key={i.listItem.id}>
                        
                        <Link to={i.listItem.page}>{i.listItem.title}</Link>
                      </li>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Accessibility */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full">
                    <li className="text-white text-sm uppercase">
                      {props.data.mobilelist.accessibility}
                    </li>
                    {/* <Link to={props.data.mobilelist.accessibilityPage}>
                     
                        {props.data.mobilelist.accessibility}
                    </Link> */}
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-white my-[1%] ml-4 `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 text-white space-y-1">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full ">
                            <li className="text-white uppercase">
                              {props.data.mobilelist.docaccessibility}
                            </li>
                            {/* <Link
                              to={props.data.mobilelist.docaccessibilityPage}
                            >
                              <li className="text-white uppercase">
                                {props.data.mobilelist.docaccessibility}
                              </li>
                            </Link> */}
                            <IoIosArrowDown
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-4 w-4 text-white my-[1%] ml-4`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 py-2 text-sm space-y-1">
                            {props.data.mobilelist.subaccessibility.map(i => (
                              <li className="text-white">
                                {" "}
                                <Link to={i.listItem.page}>
                                  {i.listItem.title}
                                </Link>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    <li className="text-white">
                      <Link to={props.data.mobilelist.webaccessibilityPage}>
                        {props.data.mobilelist.webaccessibility}
                      </Link>
                    </li>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <li className="text-white text-sm">
              <Link to={props.data.mobilelist.digitalPage}>
                {props.data.mobilelist.digital}
              </Link>
            </li>

            <li className="text-sm text-white">
              <Link to={props.data.mobilelist.careersPage}>
                {props.data.mobilelist.careers}
              </Link>
            </li>

            <li className="text-sm text-white">
              <Link to={props.data.mobilelist.contactPage}>
                {props.data.mobilelist.contact}
              </Link>
            </li>
            <li className="text-sm text-white">
              <Link to={props.data.mobilelist.awardPage}>
                {props.data.mobilelist.award}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
