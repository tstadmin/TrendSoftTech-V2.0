import React from "react"
import Counter from "./Counter"

const ContactUs = props => {
  return (
    <div className="relative ">
      <div className="lg:flex md:grid w-full  bg-blue-100 gap-24 p-10 items-center  ">
        <div>
          <img src={props.contactUs.personsImage} alt="image" />
        </div>
        <div className="space-y-8 text-center">
          <p className="text-[36px] font-bold ">{props.contactUs.title}</p>
          <p className="text-[20px] font-[600] ">
            Have any idea or project for in your mind call us or schedule a
            appointment. Our representative will reply you shortly.
          </p>
          <button className="bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[142px] text=[16px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
