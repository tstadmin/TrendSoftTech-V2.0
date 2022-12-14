import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"
import { Disclosure } from "@headlessui/react"
import { IoIosArrowDown } from "react-icons/io"

import { RxCross2 } from "react-icons/rx"
import { HiBars3BottomLeft } from "react-icons/hi2"

import { useClickOutside } from "@mantine/hooks"

export default function Header(props) {
  const NavBar = tw.div`flex items-center space-x-14 sticky top-6 z-10`
  const Underline = tw.span`bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`

  const [opened, setOpened] = useState(false)
  const hide = () => setOpened(false)
  const ref = useClickOutside(() => setOpened(false))

  return (
    <div
      id="nav"
      role="navigation"
      className=" flex items-center justify-between tracking-wide py-4 1920Screen:px-44  2xl:px-24 440Screen:px-8 px-4 sticky 1920Screen:top-10   sm:top-10 top-9  bg-white z-[1] shadow-lg shadow-black/10"
    >
      <NavBar>
        {/* Logo */}
        <Link to="/">
          <img
            src={props.data.logo}
            alt="Trendsoft Tech Logo"
            className="md:w-[184px] 340Screen:w-[100px] 240Screen:w-[80px] md:h-[95px]"
          />
        </Link>
      </NavBar>

      {/* menu items */}

      <div>
        <div className="flex space-x-4 md:space-x-12 uppercase  ">
          <p className="md:text-xl text-md  hover:scale-105 duration-500 text-[#0084FF]  px-6 py-2  hidden sm:block  group transition ">
            <Link to="/contact/">
              <Underline>{props.data.contact}</Underline>
            </Link>
          </p>

          <p className="md:text-xl text-md hover:scale-105 duration-500 text-[#0084FF]  px-6 py-2  hidden sm:block group transition focus:outline-none  ">
            <Link to="/careers/">
              {" "}
              <Underline>{props.data.careers}</Underline>{" "}
            </Link>
          </p>

          <p
            role="button"
            onClick={() => setOpened(true)}
            className=" block sm:text-2xl text-md  hover:text-blue-400
           pr-8"
          >
            {opened ? (
              <button
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                id="navbarDropdown"
                className="text-5xl  cursor-pointer text-[#0084FF] "
              >
                <RxCross2 />
              </button>
            ) : (
              <button
                aria-labelledby="navbarDropdown"
                className="text-5xl  cursor-pointer text-[#0084FF] "
              >
                {/* <span className="sr-only">Test</span> */}
                <HiBars3BottomLeft />
              </button>
            )}
          </p>
        </div>
      </div>

      {/*  Menu bar */}

      {opened && (
        <div
          ref={ref}
          className={
            opened
              ? "fixed z-20 right-0 1920Screen:top-[17.4%] 2xl:top-[21.8%] md:top-[20.4%]  top-[16%]  bg-[#0084FF] xl:h-[40vh] lg:h-[60vh] h-[100vh] w-[100%] pt-6  "
              : "fixed hidden "
          }
        >
          <ul className=" xl:flex 1920Screen:pl-44 md:pl-24 pl-8  1920Screen:space-x-24  2xl:space-x-16 xl:space-x-12 grid lg:grid-cols-3 340Screen:grid-cols-2 grid-cols-1 ">
            {props.data.list.map((item, idx) => (
              <li
                key={item.id}
                className="uppercase  text-white mt-6 sm:text-2xl text-sm font-medium hidden 540Screen:block "
              >
                <Link to={item.listItem.page}>{item.listItem.title}</Link>
                <ul className="space-y-2 mt-4 sm:text-base font-normal ">
                  {item.listItem.subTitle?.map((sub, idx) => (
                    <li
                      className="hover:text-[#FFC93C] text-white sm:text-lg text-xs"
                      key={sub.id}
                    >
                      <Link to={sub.listItem.page}>{sub.listItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/*  Mobile Menu */}

          <ul className="uppercase font-medium ml-8 540Screen:hidden block space-y-4 ">
            <li className="text-lg text-white">
              <Link to={props.data.mobilelist.homePage}>
                {props.data.mobilelist.home}
              </Link>
            </li>

            <li className="text-lg text-white">
              <Link to={props.data.mobilelist.aboutPage}>
                {props.data.mobilelist.about}
              </Link>
            </li>

            {/* IT Services */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full">
                    <Link to={props.data.mobilelist.servicesPage}>
                      <li className="text-lg text-white uppercase">
                        {props.data.mobilelist.services}
                      </li>
                    </Link>
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-white my-[1%] ml-4`}
                    />
                  </Disclosure.Button>

                  <ul>
                    <Disclosure.Panel className="px-4 text-sm text-white space-y-2 ">
                      {props.data.mobilelist.itServices.map(i => (
                        <li className="text-white">
                          {" "}
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
                    <Link to={props.data.mobilelist.testPage}>
                      <li className="text-white text-lg uppercase">
                        {props.data.mobilelist.test}
                      </li>
                    </Link>
                    <IoIosArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-white my-[1%] ml-4 `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 text-white space-y-1">
                    {props.data.mobilelist.subTest.map(i => (
                      <li className="text-white">
                        {" "}
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
                    <Link to={props.data.mobilelist.accessibilityPage}>
                      <li className="text-white text-lg">
                        {props.data.mobilelist.accessibility}
                      </li>
                    </Link>
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
                          <Disclosure.Button className="flex w-full">
                            <Link
                              to={props.data.mobilelist.docaccessibilityPage}
                            >
                              <li className="text-white uppercase">
                                {props.data.mobilelist.docaccessibility}
                              </li>
                            </Link>
                            <IoIosArrowDown
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-4 w-4 text-white my-[1%] ml-4`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 py-2 text-sm text-white space-y-1">
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

            <li className="text-white text-lg">
              <Link to={props.data.mobilelist.digitalPage}>
                {props.data.mobilelist.digital}
              </Link>
            </li>

            <li className="text-lg text-white">
              <Link to={props.data.mobilelist.careersPage}>
                {props.data.mobilelist.careers}
              </Link>
            </li>

            <li className="text-lg text-white">
              <Link to={props.data.mobilelist.contactPage}>
                {props.data.mobilelist.contact}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
