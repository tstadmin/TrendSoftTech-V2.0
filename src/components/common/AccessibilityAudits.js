import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

const AccessibilityAudits = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log("Sumbit Successfully")
    axios
      .post(
        "https://sheet.best/api/sheets/81fbce59-2b4a-4dc8-8a5c-5f88317d2b77",
        data
      )
      .then(res => {
        if (res.status === 200) {
          reset()
          alert("Sumbit Successfully")
          console.log("Sumbit Successfully")
        }
      })
      .catch(err => {
        // console.log(err)
      })
  }

  return (
    <div className="mt-10 1920Screen:px-48 2xl:px-24  px-8 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-8 justify-center">
        <div className="space-y-4 text-[18px] ">
          <p className="text-[#0B70E1] mt-5  md:text-xl sm:text-lg text-base ">
            How do you know if your website is compliant?
          </p>
          <p>
            To determine if your website is compliant, you need to consider
            various factors, including legal requirements, technical standards,
            and user accessibility. Here are some steps you can take to assess
            your website's compliance:
          </p>
          <p>
            Review legal requirements: Make sure your website complies with
            relevant laws and regulations, such as the General Data Protection
            Regulation (GDPR), the Americans with Disabilities Act (ADA), and
            the California Consumer Privacy Act (CCPA).
          </p>
          <p>
            Check technical standards: Ensure that your website meets technical
            standards, such as the World Wide Web Consortium's Web Content
            Accessibility Guidelines (WCAG) and the General Data Protection
            Regulation's (GDPR) technical requirements.
          </p>
        </div>
        <div>
          <form
            className=" w-full  2xl:px-24  px-2 space-y-5 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p>Website URL*</p>
              <input
                type="text"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.WebsiteURL ? "border-red-500" : ""
                }`}
                placeholder="Website URL "
                {...register("WebsiteURL", {
                  required: "url is required",
                })}
                onKeyUp={() => {
                  trigger("WebsiteURL")
                }}
              />
              {errors.WebsiteURL && (
                <small className="text-red-500">
                  {errors.WebsiteURL.message}
                </small>
              )}
            </div>

            <div>
              <p>First Name*</p>
              <input
                type="text"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.FirstName ? "border-red-500" : ""
                }`}
                placeholder="First Name"
                {...register("FirstName", {
                  required: "First Name is required",
                  pattern: { value: "^[a-zA-Zs]*$", message: "Only Alphabets" },
                })}
                onKeyUp={() => {
                  trigger("FirstName")
                }}
              />
              {errors.FirstName && (
                <small className="text-red-500">
                  {errors.FirstName.message}
                </small>
              )}
            </div>

            <div>
              <p>Last Name*</p>
              <input
                type="text"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.LastName ? "border-red-500" : ""
                }`}
                placeholder="Last Name"
                {...register("LastName", {
                  required: "LastName is required",
                })}
                onKeyUp={() => {
                  trigger("LastName")
                }}
              />
              {errors.LastName && (
                <small className="text-red-500">
                  {errors.LastName.message}
                </small>
              )}
            </div>

            <div>
              <p>Email*</p>
              <input
                type="email"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.Email ? "border-red-500" : ""
                }`}
                placeholder="Email"
                {...register("Email", {
                  required: "Email is required",
                  pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
                })}
                onKeyUp={() => {
                  trigger("Email")
                }}
              />
              {errors.Email && (
                <small className="text-red-500">{errors.Email.message}</small>
              )}
            </div>

            <div>
              <p>Phone No*</p>
              <input
                type="number"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.PhoneNumber ? "border-red-500" : ""
                }`}
                placeholder="Phone No"
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
                <small className="text-red-500">
                  {errors.PhoneNumber.message}
                </small>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-3 text-white hover:text-blue-400  text-[16px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityAudits
