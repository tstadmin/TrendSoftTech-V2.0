import { Select } from "@mantine/core"

import { Button, Form, FormDiv } from "./Contactstyled"
import React, { useState, useRef } from "react"

const ContactForm = () => {
  // const formRef = useRef(null)
  // const [data, setData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   phoneNumber: "",
  //   email: "",
  //   yourWebsite: "",
  //   Message: "",
  //   ComponyName: "",
  // })
  // const {
  //   ComponyName,
  //   firstname,
  //   lastname,
  //   phoneNumber,
  //   email,
  //   yourWebsite,
  //   Message,
  // } = data
  // const changeHandler = e => {
  //   setData({ ...data, [e.target.name]: e.target.value })
  // }
  // const onSubmit = e => {
  //   e.preventDefault()
  // }

  // const scriptUrl = "get yours by practicing"
  // const [loading, setLoading] = useState(false)

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   setLoading(true)

  //   fetch(scriptUrl, {
  //     method: "POST",
  //     body: new FormData(formRef.current),
  //   })
  //     .then(res => {
  //       console.log("SUCCESSFULLY SUBMITTED")
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
  // }

  function Submit(e) {
    const formEle = document.querySelector("form")
    const formDatab = new FormData(formEle)
    fetch(
      "https://script.google.com/macros/s/AKfycbx3UwDJdB6rTJwOeLihTpl1vZU7mFwK2tzzf1xFg2t3MYQU8zXm9cvJ2wDvuNQgnas7/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <form
        className="md:text-3xl text-lg grid  grid-cols-1  gap-10 sm:space-y-0 space-y-10"
        onSubmit={e => Submit(e)}
      >
        <input
          className="border-[1px] rounded-sm border-black  min-w-full p-2 bg-transparent outline-none border-b text-base  text-sm"
          type="text"
          name="FullName"
          placeholder="Full Name"
        />
        <input
          className="border-[1px] rounded-sm border-black  min-w-full  p-2 bg-transparent outline-none border-b  text-base  text-sm"
          type="email"
          name="Email"
          placeholder="email Address"
        />
        {/* <input
          className="border-[1px] rounded-sm border-black  min-w-full  col-span-2 p-2 bg-transparent outline-none border-b text-base  text-sm  "
          type="number"
          name="PhoneNumber"
          placeholder="Phone Number"
        /> */}
        {/* <input
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          type="text"
          name="YourWebsite"
          placeholder="Your website"
        /> */}
        {/* <input
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          type="text"
          name="ComponyName"
          placeholder="Compony Name"
        /> */}

        {/* <select className=" text-[16px] grid min-w-full col-span-2 border-[1px] rounded-sm border-black">
          <option>Select Inquiries</option>
          <option type="text" name="GeneralInquiries">
            General Inquiries
          </option>
          <option type="text" name="BusinessInquiries">
            Business Inquiries
          </option>
        </select> */}
        {/* 
        <textarea
          className="border-[1px] rounded-sm border-black p-2 bg-transparent outline-none border-b min-w-full col-span-2 text-base  text-sm  "
          type="text"
          name="Message"
          placeholder="Your Message Here"
        /> */}
        <input
          type="submit"
          className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-1 text-white hover:text-blue-400  text-[16px]"
        />
      </form>
    </div>
  )
}

export default ContactForm
