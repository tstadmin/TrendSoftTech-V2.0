import React from "react"
import ContactUs from "./ContactUs"
import Counter from "./Counter"

const ContactSupport = props => {
  return (
    <div className="space-y-8 mt-16">
      <ContactUs contactUs={props.contactUs} />
      <Counter />
    </div>
  )
}

export default ContactSupport
