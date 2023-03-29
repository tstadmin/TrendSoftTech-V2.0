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
    <div className="space-y-5 ">
      <div className="flex justify-between">
        <p className="text-xl text-[#0b6ddc] font-semibold">Contact Form</p>
        <small className="text-red-500 text-[14px]">* Field required</small>
      </div>
      <form
        className="grid    gap-3 sm:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="xl:w-[600px] w-full ">
          <p>Name*</p>
          <input
            placeholder="Your Name"
            type="text"
            aria-label="required"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base ${
              errors.Name ? "border-red-500" : ""
            }`}
            {...register("Name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Only Alphabets are allowed",
              },
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
            aria-label="required"
            type="text"
            maxlength="10"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base ${
              errors.PhoneNumber ? "border-red-500" : ""
            }`}
            {...register("PhoneNumber", {
              required: "Phone Number is required",
              maxLength: {
                value: 10,
                message: "Only number 10  required",
              },
              pattern: {
                value: /^\d*(?:\.\d{1,2})?$/,
                message: "Only number allower",
              },
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
            aria-label="required"
            placeholder="Email"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base ${
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
          <p> Website*</p>
          <input
            type="text"
            aria-label="required"
            placeholder="Enter your Website"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base ${
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
            aria-label="required"
            placeholder="Enter your Company name"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base ${
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
          <p> Inquiries *</p>

          <select
            aria-label="required"
            className={`border-black/70 p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base   ${
              errors.SelectInquries ? "border-red-500" : ""
            }`}
            {...register("SelectInquries", {
              required: "Select Inquries is required",
            })}
            onKeyUp={() => {
              trigger("SelectInquries")
            }}
          >
            <option value="">Select Inquiries</option>
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
            aria-label="required"
            placeholder="Enter your Message Here"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-2 text-base ${
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
          className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-2 text-white hover:text-blue-400  text-[16px]"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
