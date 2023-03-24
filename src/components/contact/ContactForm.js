import axios from "axios"
import React, { useState } from "react"

import { useForm } from "react-hook-form"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm()

  const InquriesData = [
    {
      id: 1,
      name: "General Inquries",
    },
    {
      id: 2,
      name: "Business Inquries",
    },
  ]

  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [enteryourWebsits, setEnteryourWebsits] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [message, setMessage] = useState("")
  const [selectInquries, setSelectInquries] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    const data = {
      Name: name,
      PhoneNumber: phoneNumber,
      Email: email,
      EnteryourWebsits: enteryourWebsits,
      CompanyName: companyName,
      SelectInquries: selectInquries,
      Message: message,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/b0c2741e-1e8d-46e9-96bc-66d750ae2bc8",
        data
      )
      .then(res => {
        if (res.status === 200) {
          e.target.reset()
          alert("Sumbit Successfully")
          reset()
          setName("")
          setPhoneNumber("")
          setEmail("")
          setEnteryourWebsits("")
          setCompanyName("")
          setMessage("")
          setSelectInquries("")
        }
      })
  }

  return (
    <div>
      <form
        className="md:text-3xl text-lg grid  grid-cols-2  gap-10 sm:space-y-0"
        onSubmit={onSubmit}
      >
        <input
          placeholder="Your Name"
          name="Name"
          value={name}
          type="text"
          onChange={e => setName(e.target.value)}
          className="border-[1px] rounded-sm border-black p-2 min-w-full col-span-2 md:col-span-1  bg-transparent outline-none border-b sm:text-base  "
        />
        <input
          placeholder="Phone Number"
          name="Number"
          value={phoneNumber}
          type="text"
          onChange={e => setPhoneNumber(e.target.value)}
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2 md:col-span-1  bg-transparent outline-none border-b sm:text-base  "
        />
        <input
          type="email"
          value={email}
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  "
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          name="Email"
        />
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base "
          placeholder="Enter your Websits"
          onChange={e => setEnteryourWebsits(e.target.value)}
          value={enteryourWebsits}
          name="Websits"
        />
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  "
          placeholder="Enter your Company name"
          onChange={e => setCompanyName(e.target.value)}
          value={companyName}
          name="CompanyName"
        />

        <select
          className=" text-[16px] grid min-w-full col-span-2 border-[1px] rounded-sm border-black p-2"
          onChange={e => setSelectInquries(e.target.value)}
        >
          <option>Select Inquiries</option>
          <option
            type="text"
            value="General Inquiries"
            onChange={e => setSelectInquries(e.target.value)}
          >
            General Inquiries
          </option>
          <option
            type="text"
            value="Business Inquiries"
            onChange={e => setSelectInquries(e.target.value)}
          >
            Business Inquiries
          </option>
        </select>
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  "
          placeholder="Enter your Message Here"
          onChange={e => setMessage(e.target.value)}
          name="Message"
        />

        <button
          type="submit"
          onClick={e => e.target.reset}
          className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-1 text-white hover:text-blue-400  text-[16px]"
        >
          Submit
        </button>
      </form>
      {/* <form
        className=" grid  grid-cols-2  gap-8 sm:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className={`border-[1px] rounded-sm border-black p-2 min-w-full col-span-2 md:col-span-1  bg-transparent outline-none border-b sm:text-base   ${
              errors.name ? "border-red-500" : ""
            }`}
            type="text"
            placeholder=" Name"
            {...register("name", {
              required: "name is required",
            })}
            onKeyUp={() => {
              trigger("name")
            }}
          />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div>
          <input
            className={`border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2 md:col-span-1  bg-transparent outline-none border-b sm:text-base   ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
            type="number"
            placeholder="Phone Number"
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            onKeyUp={() => {
              trigger("phoneNumber")
            }}
          />
          {errors.phoneNumber && (
            <small className="text-red-500">{errors.phoneNumber.message}</small>
          )}
        </div>

        <div>
          <input
            className={`border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base    ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "email is required",
            })}
            onKeyUp={() => {
              trigger("email")
            }}
          />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>

        <div>
          <input
            className={`border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base    ${
              errors.enteryourWebsits ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Enter your Websits"
            {...register("enteryourWebsits", {
              required: "Enter your Websits is required",
            })}
            onKeyUp={() => {
              trigger("enteryourWebsits")
            }}
          />
          {errors.enteryourWebsits && (
            <small className="text-red-500">
              {errors.enteryourWebsits.message}
            </small>
          )}
        </div>

        <div>
          <input
            className={`border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base    ${
              errors.companyName ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Company Name"
            {...register("companyName", {
              required: "Company Name is required",
            })}
            onKeyUp={() => {
              trigger("companyName")
            }}
          />
          {errors.companyName && (
            <small className="text-red-500">{errors.companyName.message}</small>
          )}
        </div>

        <div>
          <select
            className={`border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  ${
              errors.selectInquries ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Select Inquries"
            {...register("selectInquries", {
              required: "Select Inquries is required",
            })}
            onKeyUp={() => {
              trigger("selectInquries")
            }}
          >
            <option value="">Select Inquries</option>
            {InquriesData?.map((s, idx) => (
              <option value={s.id} key={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.selectInquries && (
            <small className="text-red-500">
              {errors.selectInquries.message}
            </small>
          )}
        </div>

        <div>
          <input
            className={`border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  ${
              errors.message ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Enter Your Message Here"
            {...register("message", {
              required: "Message is required",
            })}
            onKeyUp={() => {
              trigger("message")
            }}
          />
          {errors.message && (
            <small className="text-red-500">{errors.message.message}</small>
          )}
        </div>
        <div>
          <button className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-2 text-white hover:text-blue-400  text-[16px]">
            Submit
          </button>
        </div>
      </form> */}
    </div>
  )
}

export default ContactForm
