import React from "react"
import {
  Button,
  Contact,
  Contact_Description,
  Contact_Header,
  Contact_Info,
} from "../HomeStyle.js"
import tw from "twin.macro"
const ContactUs = props => {
  // const Header = tw.h1`text-[36px] font-bold text-black `
  // const ContactInfo = tw.div`space-y-8 text-center`
  // const Description = tw.p`text-[20px] font-[400] font-mono`
  // const Button = tw.button`bg-blue-600 hover:bg-white hover:duration-700 font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[142px] text-[16px]`
  // const Contact = tw.div`lg:flex md:grid justify-center w-full  bg-blue-100 gap-24 p-10 items-center`

  return (
    <Contact>
      <img src={props.contactUs.personsImage} alt="image" />

      <Contact_Info>
        <Contact_Header>{props.contactUs.title}</Contact_Header>
        <Contact_Description>
          Have any idea or project for in your mind call us or schedule a
          appointment. Our representative will reply you shortly.
        </Contact_Description>
        <Button>Contact Us</Button>
      </Contact_Info>
    </Contact>
  )
}

export default ContactUs
