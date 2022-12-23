import React from "react"

import { MdOutlineEmail } from "react-icons/md"

import { IoLocationSharp } from "react-icons/io5"

const ContactInfo = () => {
  return (
    <div className="space-y-6 text-sm sm:text-lg  ">
      <div className="flex  space-x-4  ">
        <MdOutlineEmail className="text-4xl" />
        <div className="space-y-1 ">
          <h1 className="font-semibold">Email: </h1>
          <h1>info@trendsofttech.com</h1>

          <h1 className="font-semibold">For Business Inquiries: </h1>
          <h1>service@trendsofttech.com</h1>
        </div>
      </div>
      <div className="flex space-x-4">
        <IoLocationSharp className="text-4xl" />
        <div className="space-y-1 sm:w-[550px] w-[300px]">
          <h1 className="font-semibold">Address: </h1>
          <h1>
            Flat No.301 3rd Floor MIG-37 Vasavi Srinivasam Apartment KPHB Colony
            Road No.1 Kukatpally Hyderabad-500072
          </h1>

          <h1 className="font-semibold">Address 2:</h1>
          <h1>
            Unit No: 301-302 NRT Tech Park Mangalagiri Bypass Amaravati-522503
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
