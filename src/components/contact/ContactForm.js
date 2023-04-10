import axios from "axios"
import React, { useRef, useState } from "react"

import { useForm } from "react-hook-form"

import ReCAPTCHA from "react-google-recaptcha"

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import { contactForm } from "../../services/api"

const ContactForm = () => {
  const [captcha, setCaptcha] = useState(false)
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  const captchaReset = useRef(null)
  const doRefresh = () => {
    setRefreshReCaptcha(r => !r)
  }

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
    contactForm(data)
      .then(res => {
        window.location.reload()

        alert("Submit Successfully")
      })
      .catch(err => {
        // console.log(err)
      })
  }

  return (
    <div className="space-y-5 ">
      <div className="flex justify-between">
        <p className="text-xl text-[#0b6ddc] font-semibold">Contact Form</p>
        <small className="text-red-500 text-[14px]">* Fields required</small>
      </div>
      <form
        className="grid    gap-3 sm:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="xl:w-[600px] w-full ">
          <p>
            Name<span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Your Name"
            type="text"
            aria-label="required"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Only Alphabets are allowed",
              },
            })}
            onKeyUp={() => {
              trigger("name")
            }}
          />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>
            Phone Number<span className="text-red-500">*</span>
          </p>
          <input
            placeholder="Phone Number"
            aria-label="required"
            type="text"
            maxlength="10"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base ${
              errors.phone_no ? "border-red-500" : ""
            }`}
            {...register("phone_no", {
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
              trigger("phone_no")
            }}
          />

          {errors.phone_no && (
            <small className="text-red-500">{errors.phone_no.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>
            Email<span className="text-red-500">*</span>
          </p>
          <input
            type="email"
            aria-label="required"
            placeholder="email"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base ${
              errors.email ? "border-red-500" : ""
            }`}
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

        <div className="xl:w-[600px] w-full">
          <p>
            {" "}
            Website<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            aria-label="required"
            placeholder="Enter your Website"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base ${
              errors.websits ? "border-red-500" : ""
            }`}
            {...register("websits", {
              required: "Enter your Websitsis required",
            })}
            onKeyUp={() => {
              trigger("websits")
            }}
          />
          {errors.websits && (
            <small className="text-red-500">{errors.websits.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>
            {" "}
            Company Name <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            aria-label="required"
            placeholder="Enter your Company name"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base ${
              errors.company_name ? "border-red-500" : ""
            }`}
            {...register("company_name", {
              required: "Company Name is required",
            })}
            onKeyUp={() => {
              trigger("company_name")
            }}
          />
          {errors.company_name && (
            <small className="text-red-500">
              {errors.company_name.message}
            </small>
          )}
        </div>

        <div>
          <p>
            {" "}
            Inquiries <span className="text-red-500">*</span>
          </p>

          <select
            aria-label="required"
            className={`border-black/70 p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base   ${
              errors.inquiries ? "border-red-500" : ""
            }`}
            {...register("inquiries", {
              required: "Select Inquries is required",
            })}
            onKeyUp={() => {
              trigger("inquiries")
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
            <small className="text-red-500">{errors.inquiries.message}</small>
          )}
        </div>

        <div className="xl:w-[600px] w-full">
          <p>
            Message<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            aria-label="required"
            placeholder="Enter your Message Here"
            className={`border-black p-2 w-full  focus:border-blue-600    bg-transparent outline-none border-b-2 text-base ${
              errors.Message ? "border-red-500" : ""
            }`}
            {...register("message", {
              required: "message is required",
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
          <GoogleReCaptchaProvider reCaptchaKey="6Ld4ZEglAAAAACSwTInWhawv0pUboFJDqS2FBJx7">
            <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} />
          </GoogleReCaptchaProvider>
        </div>
        <button
          onClick={doRefresh}
          type="submit"
          className=" bg-blue-600  sm:w-44 font-medium mt-2 border-blue-400 border    rounded-xl p-2 text-white   text-[16px]"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
