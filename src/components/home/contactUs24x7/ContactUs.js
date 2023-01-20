import { Link } from "gatsby"
import React from "react"
import {
  ContactDiv,
  Contact,
  ContactDescription,
  ContactInfo,
} from "../HomeStyle.js"

const ContactUs = props => {
  return (
    <Contact>
      <ContactDiv>
        <img src={props.contactUs.personsImage} width="632px" alt="" />

        <ContactInfo>
          <h2 className="md:text-3xl text-xl">{props.contactUs.title}</h2>
          <ContactDescription>{props.contactUs.description}</ContactDescription>
          <div>
            <Link
              to="/contact/"
              className="bg-[#0b2d78] focus:bg-white  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#1e6ff6] hover:duration-700  rounded-3xl p-3 text-white min-w-[122px] text-[16px]"
            >
              {props.contactUs.CTA}
            </Link>
          </div>
        </ContactInfo>
      </ContactDiv>
    </Contact>
  )
}

export default ContactUs
