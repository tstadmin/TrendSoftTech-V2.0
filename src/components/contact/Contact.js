import React from "react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { ContactHanding } from "./Contactstyled"
const Contact = () => {
  return (
    <div className="">
      <ContactHanding>Contact Us</ContactHanding>

      <div className="xl:flex  justify-center  px-8 md:mt-14 mt-5  sm:space-y-0 space-y-10 2xl:space-x-44 lg:space-x-2 ">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
