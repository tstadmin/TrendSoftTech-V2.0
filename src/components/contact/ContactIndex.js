import React from "react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { ContactDiv, ContactHanding } from "./Contactstyled"
const ContactIndex = props => {
  return (
    <div>
      <div id="content" role="main">
        <ContactHanding>{props.data.title}</ContactHanding>

        <div className="xl:flex grid   md:mt-14 mt-5 gap-10 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
          <ContactInfo data={props.data} />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactIndex
