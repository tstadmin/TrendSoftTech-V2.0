import React from "react"
import Clients from "./Clients"
// import ClientsCarousel from "./ClientsCarousel"
import Counter from "./Counter"

const ContactSupport = props => {

  return (
    <div className="space-y-28  mt-24 ">
      <Counter />
      <Clients clients={props.clients} />
      {/* <ContactUs contactUs={props.contactUs} /> */}
      {/* <ClientsCarousel clients={props.clients} /> */}
    </div>
  )
}

export default ContactSupport
