import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import logo from "../../../static/img/trendsoftlogo.svg"

const Footer = () => {
  return (
    <div className="space-y-6">
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1 lg:justify-items-center sm:justify-items-start   px-12 space-y-7 space-x-7">
        <div className="space-y-5">
          <img src={logo} className="h-32" />
          <p>
            At Trendsoft Quality is our ultimate business plan. We consider
            every aspect which matters to clients' data security and
            intellectual property protections.
          </p>
          <div className="flex  gap-5 ">
            <FaFacebookF className=" text-blue-500 text-center hover:text-white bg-white hover:bg-blue-600 rounded-full w-9 h-9 p-2 shadow-xl" />
            <TiSocialLinkedin className="  text-blue-500 text-center hover:text-white bg-white hover:bg-blue-600 rounded-full w-9 h-9 p-2 shadow-xl" />
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-[36px] font-bold ">IT Services</p>
          <ul className="text-[16px] space-y-3">
            <li>Web Development</li>
            <li>Ecommerce Development</li>
            <li>Product Development</li>
            <li>Mobile Development</li>
            <li>Digital Marketing</li>
            <li>Ui/UX Design</li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-[36px] font-bold ">Contact Info</p>
          <div className="flex gap-2 text-start">
            <GoLocation className="text-xl" />
            <p>
              Trendsoft Technologies Pvt. Ltd,Flat #302, 2nd Floor, PKR
              Complex,Road No. 1, KPHB Colony, Kukatpally, Hyderabad – 500072
            </p>
          </div>
          <div className="flex gap-2 text-start">
            <AiOutlineMail className="text-xl" />
            <p>
              info@trendsofttech.com
              <br /> service@trendsofttech.com
            </p>
          </div>
          <div className="flex gap-2 text-start">
            <BiLink className="text-xl" />
            <p>www.trendsofttech.com</p>
          </div>
        </div>
      </div>
      <hr className="border-black border " />
      <p className="text-center">© 2022 All Rights Reserved.</p>
    </div>
  )
}

export default Footer
