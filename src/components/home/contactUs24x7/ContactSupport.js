import React from "react"
import ContactUs from "./ContactUs"
import Counter from "./Counter"

const ContactSupport = props => {
  return (
    <div className="space-y-32  mt-28 ">
      <Counter />
      <ContactUs contactUs={props.contactUs} />
    </div>
  )
}

export default ContactSupport
