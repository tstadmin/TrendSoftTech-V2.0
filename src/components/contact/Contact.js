import React from "react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const Contact = () => {
  return (
    <div className="xl:flex  justify-center  px-10 my-28   space-y-10 2xl:space-x-44 lg:space-x-2">
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default Contact
