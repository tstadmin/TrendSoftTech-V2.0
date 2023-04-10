import { Link } from "gatsby"
import React from "react"

// import { Image, BreadCrumInfo, BreadCrumbHeader } from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div>
      <img src={props.img} alt="" className=" " />

      <div
        className="bg-[#146aba] p-1"
        role="navigation"
        aria-label="breadcrumb"
      >
        <ul className=" text-white space-x-3 2xl:ml-28 ml-8 1920Screen:ml-48 flex">
          <li className="text-white">
            <Link
              to="/"
              className="hover:text-[#efe9cd] focus:text-[#efe9cd] underline-[#efe9cd] hover:underline focus:underline hover:decoration-[#ffe793]    focus:decoration-[#ffe793] "
            >
              Home
            </Link>
          </li>
          <li className=" text-white" aria-hidden="true">
            /
          </li>
          <li className=" text-white">
            <Link
              aria-label={props.title}
              to=""
              className="hover:text-[#efe9cd] focus:text-[#efe9cd]    hover:underline-none focus:underline hover:decoration-[#146aba] focus:decoration-[#146aba]"
            >
              {props.title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BreadCrumb
