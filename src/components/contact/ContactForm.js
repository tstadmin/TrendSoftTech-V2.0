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

  const onSubmit = data => {
    console.log(data)

    axios
      .post(
        "https://sheet.best/api/sheets/b0c2741e-1e8d-46e9-96bc-66d750ae2bc8",
        data
      )
      .then(res => {
        if (res.status === 200) {
          reset()
          alert("Sumbit Successfully")
        }
      })
      .catch(err => {
        // console.log(err)
      })
  }

  return (
    <div>
      <form
        className="grid    gap-5 sm:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="xl:w-[600px] w-full ">
          <p>Name*</p>
          <input
            placeholder="Your Name"
            type="text"
            className={`  border-black/70 p-2 w-full    bg-transparent outline-none border-2 text-base    ${
              errors.Name ? "border-red-500" : ""
            }`}
            {...register("Name", {
              required: "Name is required",
            })}
            onKeyUp={() => {
              trigger("Name")
            }}
          />
          {errors.Name && (
            <small className="text-red-500">{errors.Name.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>Phone Number*</p>
          <input
            placeholder="Phone Number"
            type="number"
            className={`border-black/70 p-2 w-full    bg-transparent outline-none border-2 text-base     ${
              errors.PhoneNumber ? "border-red-500" : ""
            }`}
            {...register("PhoneNumber", {
              required: "Phone Number is required",

              pattern:
                '//"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"/gmi/i',
            })}
            onKeyUp={() => {
              trigger("PhoneNumber")
            }}
          />
          {errors.PhoneNumber && (
            <small className="text-red-500">{errors.PhoneNumber.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>Email*</p>
          <input
            type="email"
            placeholder="Email"
            className={`border-black/70 p-2 w-full    bg-transparent outline-none border-2 text-base     ${
              errors.Email ? "border-red-500" : ""
            }`}
            {...register("Email", {
              required: "Email is required",
            })}
            onKeyUp={() => {
              trigger("Email")
            }}
          />
          {errors.Email && (
            <small className="text-red-500">{errors.Email.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p> Websits*</p>
          <input
            type="text"
            placeholder="Enter your Websits"
            className={`border-black/70 p-2 w-full    bg-transparent outline-none border-2 text-base ${
              errors.EnteryourWebsits ? "border-red-500" : ""
            }`}
            {...register("EnteryourWebsits", {
              required: "Enter your Websitsis required",
            })}
            onKeyUp={() => {
              trigger("EnteryourWebsits")
            }}
          />
          {errors.EnteryourWebsits && (
            <small className="text-red-500">
              {errors.EnteryourWebsits.message}
            </small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p> Company Name*</p>
          <input
            type="text"
            placeholder="Enter your Company name"
            className={`border-black/70 p-2 w-full    bg-transparent outline-none border-2 text-base    ${
              errors.CompanyName ? "border-red-500" : ""
            }`}
            {...register("CompanyName", {
              required: "Company Name is required",
            })}
            onKeyUp={() => {
              trigger("CompanyName")
            }}
          />
          {errors.CompanyName && (
            <small className="text-red-500">{errors.CompanyName.message}</small>
          )}
        </div>

        <div>
          <p> Inquiries*</p>

          <select
            className={`border-black/70 p-2 w-full    bg-transparent outline-none border-2 text-base   ${
              errors.SelectInquries ? "border-red-500" : ""
            }`}
            {...register("SelectInquries", {
              required: "Select Inquries is required",
            })}
            onKeyUp={() => {
              trigger("SelectInquries")
            }}
          >
            <option>Select Inquiries</option>
            {InquriesData.map((c, idx) => (
              <option value={c.InquriesData} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.InquriesData && (
            <small className="text-red-500">
              {errors.SelectInquries.message}
            </small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>Message*</p>
          <input
            type="text"
            placeholder="Enter your Message Here"
            className={`border-black p-2 w-full    bg-transparent outline-none border-2 text-base   ${
              errors.Message ? "border-red-500" : ""
            }`}
            {...register("Message", {
              required: "Message is required",
            })}
            onKeyUp={() => {
              trigger("Message")
            }}
          />
          {errors.Message && (
            <small className="text-red-500">{errors.Message.message}</small>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-1 text-white hover:text-blue-400  text-[16px]"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
