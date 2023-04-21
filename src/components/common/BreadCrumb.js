import { Link } from "gatsby"
import React from "react"
import "./Style.css"

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
        <ul className=" text-white  space-x-3 2xl:ml-24 ml-8 1920Screen:ml-48 flex">
          <li className="text-white breadcrumb">
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
          <li className=" text-white ">
            <a
              aria-current="page"
              href=""
              className="hover:text-[#efe9cd]  focus:text-[#efe9cd] font-bold   hover:underline-none focus:underline hover:decoration-[#146aba] focus:decoration-[#146aba]"
            >
              {props.title}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BreadCrumb
