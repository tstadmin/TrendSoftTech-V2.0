import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/Ti"
import { SlLocationPin } from "react-icons/sl"
import { AiOutlineMail } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import logo from "../../../static/img/trendsoftlogo.svg"

const Footer = () => {
  return (
    <div className="">
      <div className="md:flex sm:grid px-8 xl:px-12 md:px-0 md:space-y-0 space-y-12 md:space-x-6 lg:justify-center md:justify-center sm:jest my-20">
        <div className=" basis-1/3 ">
          <img src={logo} className="h-32" />
          <p>
            At Trendsoft Quality is our ultimate business plan. We consider
            every aspect which matters to clients' data security and
            intellectual property protections.
          </p>
          <div className="flex mt-4 gap-5 ">
            <FaFacebookF className=" text-blue-500 text-center hover:text-white  bg-white hover:cursor-pointer hover:bg-blue-600 rounded-full w-9 h-9 p-2 shadow-xl" />
            <TiSocialLinkedin className="  text-blue-500 text-center hover:text-white bg-white hover:cursor-pointer hover:bg-blue-600 rounded-full w-9 h-9 p-2 shadow-xl" />
          </div>
        </div>
        <div className="space-y-3 basis-1/4">
          <p className="text-[34px]   font-semibold ">IT Services</p>
          <ul className="text-[16px] space-y-3">
            <li>Web Development</li>
            <li>Ecommerce Development</li>
            <li>Product Development</li>
            <li>Mobile Development</li>
            <li>Digital Marketing</li>
            <li>Ui/UX Design</li>
          </ul>
        </div>

        <div className="space-y-3  basis-1/4">
          <p className="text-[34px]  font-semibold ">Contact Info</p>
          <div className="flex gap-2 text-start">
            <SlLocationPin className="text-4xl" />
            <p>
              Trendsoft Technologies Pvt. Ltd,Flat #302, 2nd Floor, PKR
              Complex,Road No. 1, KPHB Colony, Kukatpally, Hyderabad – 500072
            </p>
          </div>
          <div className="flex gap-2 text-start">
            <AiOutlineMail className="text-2xl" />
            <p>
              info@trendsofttech.com
              <br /> service@trendsofttech.com
            </p>
          </div>
          <div className="flex gap-2 text-start">
            <BiLink className="text-2xl" />
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
