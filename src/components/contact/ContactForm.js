import React, { useEffect, useRef, useState } from "react"

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
      name: "General Enquries",
    },
    {
      id: 2,
      name: "Business Enquries",
    },
  ]

  const [fileUploaded, setFileUploaded] = useState(false)

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false)
      }, 50000) // 5 seconds
      return () => clearTimeout(timeout)
    }
  }, [fileUploaded])

  const onSubmit = data => {
    contactForm(data, setFileUploaded(true))
      .then(res => {
        if (res.status === 200) {
          alert("Submit Successfully")
          setFileUploaded(false)
          window.location.reload()
        }
      })
      .catch(err => {
        // console.log(err)

        alert("Submit Successfully")
        window.location.reload()
        console.log(err)
      })
  }

  return (
    <div className="space-y-5  w-full">
      <div className="flex justify-between">
        <h2 className="text-xl text-[#0b6ddc] font-semibold">Contact Form</h2>
        <small className="text-[#EB1414] text-[14px]">* Fields required</small>
      </div>
      <form className="grid  gap-3 w-[100%] " onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full ">
          <label for="Name">
            Name <span className="text-[#EB1414]">*</span>
          </label>

          <input
            placeholder="Name"
            id="Name"
            name="Name"
            type="text"
            aria-describedby="Name_error"
            className={`block w-full 540Screen:p-2 p-1  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.name ? "border-[#EB1414]" : ""
            }`}
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Please enter valid name",
              },
            })}
            onKeyUp={() => {
              trigger("name")
            }}
          />
          {errors.name && (
            <small className="text-[#EB1414]" id="Name_error">
              {errors.name.message}
            </small>
          )}
        </div>

        <div className=" w-full">
          <label for="Phone_Number">
            Phone Number <span className="text-[#EB1414]">*</span>
          </label>

          <input
            placeholder="Phone Number"
            name="Phone_Number"
            type="text"
            id="Phone_Number"
            aria-describedby="Phone_Number_error"
            className={`block w-full 540Screen:p-2 p-1  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.phone_no ? "border-[#EB1414]" : ""
            }`}
            {...register("phone_no", {
              required: "Phone Number is required",
              pattern: {
                value: /^\d*(?:\.\d{1,2})?$/,
                message: "Please enter valid Phone Number",
              },
              maxLength: {
                value: 10,
                message: "Please enter 10 Digit Phone Number",
              },
              minLength: {
                value: 10,

                message: "Please enter  10 Digit Phone Number",
              },
            })}
            onKeyUp={() => {
              trigger("phone_no")
            }}
          />

          {errors.phone_no && (
            <small className="text-[#EB1414]" id="Phone_Number_error">
              {errors.phone_no.message}
            </small>
          )}
        </div>

        <div className=" w-full">
          <label for="Email">
            Email<span className="text-[#EB1414]">*</span>
          </label>
          <input
            type="text"
            aria-describedby="Email_error"
            id="Email"
            name="Email"
            placeholder="Email"
            className={`block w-full 540Screen:p-2 p-1 border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.email ? "border-[#EB1414]" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter valid email address",
              },
            })}
            onKeyUp={() => {
              trigger("email")
            }}
          />

          {errors.email && (
            <small className="text-[#EB1414]" id="Email_error">
              {errors.email.message}
            </small>
          )}
        </div>

        <div className=" w-full">
          <label for="Website">
            Website<span className="text-[#EB1414]">*</span>
          </label>
          <input
            type="text"
            aria-describedby="Website_error"
            id="Website"
            name="Website"
            placeholder="Enter your Website"
            className={`block w-full 540Screen:p-2 p-1  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.websits ? "border-[#EB1414]" : ""
            }`}
            {...register("websits", {
              required: " Website URL is required",
              pattern: {
                value:
                  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
                message: "Please enter Valid URL",
              },
            })}
            onKeyUp={() => {
              trigger("websits")
            }}
          />
          {errors.websits && (
            <small className="text-[#EB1414]" id="Website_error">
              {errors.websits.message}
            </small>
          )}
        </div>

        <div className=" w-full">
          <label for="Company_Name">
            Company Name <span className="text-[#EB1414]">*</span>
          </label>
          <input
            type="text"
            aria-describedby="Company_Name_error"
            id="Company_Name"
            name="Company_Name"
            placeholder="Enter your Company name"
            className={`block w-full 540Screen:p-2 p-1  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.websits ? "border-[#EB1414]" : ""
            }`}
            {...register("company_name", {
              required: "Company Name is required",
            })}
            onKeyUp={() => {
              trigger("company_name")
            }}
          />
          {errors.company_name && (
            <small className="text-[#EB1414]" id="Company_Name_error">
              {errors.company_name.message}
            </small>
          )}
        </div>

        <div className=" w-full ">
          <label for="Enquiries">
            Enquiries <span className="text-[#EB1414]">*</span>
          </label>

          <select
            aria-describedby="Enquiries_error"
            id="Enquiries"
            name="Enquiries"
            className={`block w-full 540Screen:p-2 p-1  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.inquiries ? "border-[#EB1414]" : ""
            }`}
            {...register("inquiries", {
              required: "Select Enquiries is required",
            })}
            onKeyUp={() => {
              trigger("inquiries")
            }}
          >
            <option value="">Select Enquiries</option>
            {InquriesData.map((c, idx) => (
              <option value={c.InquriesData} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.inquiries && (
            <small className="text-[#EB1414]" id="Enquiries_error">
              {errors.inquiries.message}
            </small>
          )}
        </div>

        <div className=" w-full">
          <label for="Message">
            Message <span className="text-[#EB1414]">*</span>
          </label>
          <input
            type="text"
            aria-describedby="Message_error"
            id="Message"
            name="Message"
            placeholder="Enter your Message Here"
            className={`block w-full 540Screen:p-2 p-1  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
              errors.message ? "border-[#EB1414]" : ""
            }`}
            {...register("message", {
              required: "Message is required",
            })}
            onKeyUp={() => {
              trigger("message")
            }}
          />
          {errors.message && (
            <small className="text-[#EB1414]" id="Message_error">
              {errors.message.message}
            </small>
          )}
        </div>
        {/* <div>
          <GoogleReCaptchaProvider reCaptchaKey="6Ld4ZEglAAAAACSwTInWhawv0pUboFJDqS2FBJx7">
            <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} />
          </GoogleReCaptchaProvider>
        </div> */}
        <button
          type="submit"
          // role="status"
          aria-live="polite"
          aria-atomic="true"
          className=" bg-blue-600  hover:text-blue-600 focus:text-blue-600 hover:bg-white focus:bg-white  sm:w-44 font-medium mt-4 border-blue-400 border-2 rounded-3xl 540Screen:p-2 p-1 text-white   text-[16px]"
        >
          {fileUploaded ? "Please wait..." : "Submit"}
        </button>
        {/* <span class="sr-only">Please Wait</span> */}
      </form>
    </div>
  )
}

export default ContactForm
