import { Link } from "gatsby"
import React from "react"
import {
  Button,
  Contact,
  ContactDescription,
  ContactHeader,
  ContactInfo,
} from "../HomeStyle.js"

const ContactUs = props => {
  return (
    <Contact>
      <div className="bg-blue-100 xl:flex grid  xl:items-center justify-items-center rounded-2xl">
        <img src={props.contactUs.personsImage} width="632px" />

        <ContactInfo>
          <h3>{props.contactUs.title}</h3>
          <ContactDescription>{props.contactUs.description}</ContactDescription>
          <div>
            <Link
              to="/contact/"
              className="bg-blue-600  hover:bg-white font-medium border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]"
            >
              {props.contactUs.CTA}
            </Link>
          </div>
        </ContactInfo>
      </div>
    </Contact>
  )
}

export default ContactUs
