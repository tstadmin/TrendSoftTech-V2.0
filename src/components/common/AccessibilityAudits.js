import axios from "axios"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import AnalysisInfo from "../WebsiteAnalysis/AnalysisInfo"
import "./Style.css"
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import { webAccessbilityForm } from "../../services/api"

const AccessibilityAudits = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm()

  const RefCaptcha = useRef(null)
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  function onChange(value) {
    console.log("Captcha value:", value)
    // setCaptcha(true)
  }
  const onSubmit = data => {
    webAccessbilityForm(data)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.errors)
          alert("Submit Successfully")
          window.location.reload()
        }
      })
      .catch(err => {
        // console.log(err)
      })
  }

  return (
    <div className="mt-10 1920Screen:px-48 2xl:px-24  px-8 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-8 justify-center rounded-xl  shadow-lg shadow-black/20 ">
        <div className="p-4 bg-[#0b6ddc] -l-2xl">
          <AnalysisInfo />
        </div>

        <div className="bg-white -l-2xl ">
          <form
            className=" w-full  2xl:px-24  px-2 space-y-5 py-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between">
              <label className="text-xl text-[#0b6ddc] font-semibold">
                Contact Here
              </label>
              <small className="text-red-500 text-[14px]">
                * Fields required
              </small>
            </div>
            <div>
              <div className="flex justify-between">
                <label>Website URL*</label>
              </div>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.website_url ? "border-red-500" : ""
                }`}
                placeholder="Website URL "
                {...register("website_url", {
                  required: "url is required",
                })}
                onKeyUp={() => {
                  trigger("website_url")
                }}
              />
              {errors.website_url && (
                <small className="text-red-500">
                  {errors.website_url.message}
                </small>
              )}
            </div>

            <div>
              <label>First Name*</label>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.first_name ? "border-red-500" : ""
                }`}
                placeholder="First Name"
                {...register("first_name", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only Alphabets are allowed",
                  },
                })}
                onKeyUp={() => {
                  trigger("first_name")
                }}
              />
              {errors.first_name && (
                <small className="text-red-500">
                  {errors.first_name.message}
                </small>
              )}
            </div>

            <div>
              <label>Last Name*</label>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.last_name ? "border-red-500" : ""
                }`}
                placeholder="Last Name"
                {...register("last_name", {
                  required: "last name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only Alphabets are allowed",
                  },
                })}
                onKeyUp={() => {
                  trigger("last_name")
                }}
              />
              {errors.last_name && (
                <small className="text-red-500">
                  {errors.last_name.message}
                </small>
              )}
            </div>

            <div>
              <label>Email*</label>
              <input
                type="email"
                aria-label="required"
                className={`block w-full p-2  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="email"
                {...register("email", {
                  required: "email is required",
                  pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
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
              <label>Phone No*</label>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.phone_no ? "border-red-500" : ""
                }`}
                placeholder="Phone No"
                minLength={10}
                {...register("phone_no", {
                  required: "Phone Number is required",

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
                <small className="text-red-500">
                  {errors.phone_no.message}
                </small>
              )}
            </div>

            {/* <div>
              <GoogleReCaptchaProvider reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI">
                <GoogleReCaptcha
                  ref={RefCaptcha}
                  onChange={onChange}
                  refreshReCaptcha={() => setRefreshReCaptcha(r => !r)}
                />
              </GoogleReCaptchaProvider>
            </div> */}

            <button
              type="submit"
              className="bg-blue-600  sm:w-44 font-medium mt-2 border-blue-400 border hover:border rounded-xl p-2 text-white   text-[16px]"
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
