import React, { useState } from "react"
import { Button, Form, FormDiv } from "./Contactstyled"

const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    yourWebsite: "",
    Message: "",
  })
  const { username, phoneNumber, email, yourWebsite, Message } = data
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // const submitHandler = e => {
  //   e.preventDefault()
  //   console.log(data)
  // }
  return (
    <div>
      <Form>
        <FormDiv>
          <input
            className="appearance-none bg-transparent outline-none border-b  "
            type="text"
            name="username"
            placeholder="Name"
            value={username}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b "
            type="email"
            name="E-mail"
            placeholder="email"
            value={email}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b "
            type="number"
            name="Phone Number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b "
            type="text"
            name="yourWebsite"
            placeholder="Your website"
            value={yourWebsite}
            onChange={changeHandler}
          />

          <textarea
            className="appearance-none bg-transparent outline-none border-b min-w-full col-span-2 "
            type="text"
            name="Message"
            placeholder="Your Message Here"
            value={Message}
            onChange={changeHandler}
          />

          <Button>Submit Now</Button>
        </FormDiv>
      </Form>
    </div>
  )
}

export default ContactForm
