import React from "react"

import { MdOutlineEmail } from "react-icons/md"

const ContactInfo = () => {
  return (
    <div>
      <h1 className="text-center mt-14 text-6xl">Contact</h1>
      <div className="flex">
        <MdOutlineEmail />
        <div>
          <>
            <h1>Email: </h1>
            <h1>info@trendsofttech.com</h1>
          </>
          <>
            <h1>For Business Inquiries</h1>
            <h1>service@trendsofttech.com</h1>
          </>
        </div>
      </div>
      <div className="flex">
        <MdOutlineEmail />
        <div>
          <>
            <h1>Address: </h1>
            <h1>
              Flat No.301 3rd Floor MIG-37 Vasavi Srinivasam Apartment KPHB
              Colony Road No.1 Kukatpally Hyderabad-500072
            </h1>
          </>
          <>
            <h1>Address 2:</h1>
            <h1>
              Unit No: 301-302 NRT Tech Park Mangalagiri Bypass Amaravati-522503
            </h1>
          </>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
