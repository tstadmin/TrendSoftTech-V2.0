import { Select } from "@mantine/core"
import React, { useState } from "react"
import { Button, Form, FormDiv } from "./Contactstyled"

const ContactForm = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    yourWebsite: "",
    Message: "",
    ComponyName: "",
  })
  const {
    ComponyName,
    firstname,
    lastname,
    phoneNumber,
    email,
    yourWebsite,
    Message,
  } = data
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormDiv>
          <input
            className="appearance-none bg-transparent outline-none border-b text-base  text-sm  "
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={changeHandler}
          />
          <input
            className="appearance-none bg-transparent outline-none border-b text-base  text-sm  "
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={changeHandler}
          />
          <input
            className="appearance-none bg-transparent outline-none border-b  text-base  text-sm "
            type="email"
            name="E-mail"
            placeholder="email Address"
            value={email}
            onChange={changeHandler}
          />
          <input
            className="appearance-none bg-transparent outline-none border-b text-base  text-sm  "
            type="number"
            name="Phone Number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={changeHandler}
          />
          <input
            className="appearance-none min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
            type="text"
            name="yourWebsite"
            placeholder="Your website"
            value={yourWebsite}
            onChange={changeHandler}
          />
          <input
            className="appearance-none min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
            type="text"
            name="ComponyName"
            placeholder="Compony Name"
            value={ComponyName}
            onChange={changeHandler}
          />
          <div className="text-[16px] grid min-w-full col-span-2  ">
            <label>Select Inquiries :</label>
            <select className="border-[1px] rounded-sm border-black">
              <option value="GeneralInquiries">Select Inquiries </option>
              <option value="GeneralInquiries">General Inquiries </option>
              <option value="BusinessInquiries"> Business Inquiries</option>
            </select>
          </div>
          <textarea
            className="appearance-none bg-transparent outline-none border-b min-w-full col-span-2 text-base  text-sm  "
            type="text"
            name="Message"
            placeholder="Your Message Here"
            value={Message}
            onChange={changeHandler}
          />
          {/* <input type="checkbox" className="min-w-10" />
          <p>
            By using this form you agree with the storage and handling of your
            data by this website. *
          </p> */}
          <Button>Submit Now</Button>
        </FormDiv>
      </Form>
    </div>
  )
}

export default ContactForm
