import React from "react"
import ContactUs from "./ContactUs"
import Counter from "./Counter"

const ContactSupport = props => {
  return (
    <div className="px-12  grid justify-items-center">
      <ContactUs contactUs={props.contactUs} />
      <Counter />
    </div>
  )
}

export default ContactSupport
