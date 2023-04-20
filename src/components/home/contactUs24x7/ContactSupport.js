import React from "react"
import Clients from "./Clients"

import Counter from "./Counter"

const ContactSupport = props => {
  return (
    <div className="space-y-8 mt-8   ">
      <Counter />
      <Clients clients={props.clients} />
    </div>
  )
}

export default ContactSupport
