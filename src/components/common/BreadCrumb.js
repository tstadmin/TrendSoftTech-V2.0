import { Link } from "gatsby"
import React from "react"

// import { Image, BreadCrumInfo, BreadCrumbHeader } from "./CommonStyle"

const BreadCrumb = props => {
  return (
    <div>
      <img src={props.img} alt="" className=" " />

      <div className="bg-[#146aba] p-1  ">
        <div className=" text-white space-x-3 2xl:ml-28 ml-8 1920Screen:ml-48 flex">
          <Link
            to="/"
            className="hover:text-[#efe9cd] focus:text-[#efe9cd] underline-[#efe9cd]"
          >
            Home
          </Link>{" "}
          <p className=" text-white"> /</p>
          <p className=" text-white">
            <Link
              aria-label={props.title}
              to=""
              className="hover:text-[#efe9cd] focus:text-[#efe9cd] focus:underline-[#efe9cd] hover:underline-[#efe9cd]"
            >
              {props.title}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
