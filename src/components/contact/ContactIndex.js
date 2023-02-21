import React from "react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { ContactDiv, ContactHanding } from "./Contactstyled"
const ContactIndex = props => {
  return (
    <div>
      <ContactHanding>{props.data.title}</ContactHanding>

      <ContactDiv>
        <ContactInfo data={props.data} />
        <ContactForm />
      </ContactDiv>
    </div>
  )
}

export default ContactIndex
