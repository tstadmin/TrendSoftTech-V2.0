import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import AnalysisInfo from "../WebsiteAnalysis/AnalysisInfo"
import "./Style.css"
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import { webAccessbilityForm } from "../../services/api"
import "../Services/AccessibleStyle.css"

const AccessibilityAudits = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm()

  const [fileUploaded, setFileUploaded] = useState(false)

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false)
      }, 50000) // 5 seconds
      return () => clearTimeout(timeout)
    }
  }, [fileUploaded])

  const RefCaptcha = useRef(null)
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  function onChange(value) {
    console.log("Captcha value:", value)
    // setCaptcha(true)
  }
  const onSubmit = data => {
    webAccessbilityForm(data, setFileUploaded(true))
      .then(res => {
        if (res.status === 200) {
          setFileUploaded(false)
          alert("Submit Successfully")

          window.location.reload()
        }
      })
      .catch(err => {
        window.location.reload(true)
        alert("Submit Successfully")
      })
  }

  return (
    <div className="mt-10 1920Screen:px-48 2xl:px-24  px-8 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-2 justify-center rounded-xl  shadow-lg shadow-black/20 ">
        <div className="p-4  -l-2xl bg-[#0b6ddc] web_access rounded-md">
          <div className="xl:space-y-8 space-y-3  p-5 lg:h-auto sm:h-[500px]  ">
            <div>
              <h2 className="text-white font-semibold mt-5  md:text-xl sm:text-lg text-base ">
                How do you know if your website is WCAG compliant?
              </h2>
            </div>
            <div className="space-y-4 text-[18px]">
              <p className="text-white ">
                To check WCAG compliance, you'll usually start with an automated
                analysis. The Trendsoft Technologies Pvt. Ltd provides a free,
                confidential graded report of your website, which tests content
                against WCAG 2.1 Level A and Level AA success criteria and gives
                you an overview report of how your website.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white -l-2xl ">
          <form
            className=" w-full  2xl:px-24  px-2 space-y-5 py-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between">
              <h2 className="text-xl text-[#0b6ddc] font-semibold">
                Contact Here
              </h2>
              <small className="text-[#EB1414] text-[14px]">
                * Fields required
              </small>
            </div>
            <div>
              <div className="flex justify-between">
                <label for="url">
                  Website URL <span className="text-[#EB1414]">*</span>
                </label>
              </div>
              <input
                type="text"
                aria-describedby="url_error"
                id="url"
                name="url"
                className={`block w-full p-2  border-black border-2 rounded-md  focus:border-blue-600 focus:outline-none ${
                  errors.website_url ? "border-[#EB1414]" : ""
                }`}
                placeholder="Website URL "
                {...register("website_url", {
                  required: "url is required",
                  pattern: {
                    value:
                      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
                    message: "Please enter Valid URl",
                  },
                })}
                onKeyUp={() => {
                  trigger("website_url")
                }}
              />
              {errors.website_url && (
                <small className="text-[#EB1414]" id="url_error">
                  {errors.website_url.message}
                </small>
              )}
            </div>

            <div>
              <label for="First_Name">
                First Name <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                id="First_Name"
                name="First_Name"
                aria-describedby="First_Name_error"
                className={`block w-full p-2  border-black border-2 rounded-md  focus:border-blue-600 focus:outline-none ${
                  errors.first_name ? "border-[#EB1414]" : ""
                }`}
                placeholder="First Name"
                {...register("first_name", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Please enter valid First Name",
                  },
                })}
                onKeyUp={() => {
                  trigger("first_name")
                }}
              />
              {errors.first_name && (
                <small className="text-[#EB1414]" id="First_Name_error">
                  {errors.first_name.message}
                </small>
              )}
            </div>

            <div>
              <label for="Last_Name">
                Last Name <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                id="Last_Name"
                name="Last_Name"
                aria-describedby="Last_Name_error"
                className={`block w-full p-2  border-black border-2 rounded-md  focus:border-blue-600 focus:outline-none ${
                  errors.last_name ? "border-[#EB1414]" : ""
                }`}
                placeholder="Last Name"
                {...register("last_name", {
                  required: "last name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Please enter valid Last Name",
                  },
                })}
                onKeyUp={() => {
                  trigger("last_name")
                }}
              />
              {errors.last_name && (
                <small className="text-[#EB1414]" id="Last_Name_error">
                  {errors.last_name.message}
                </small>
              )}
            </div>

            <div>
              <label for="Email">
                Email <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                aria-describedby="Email_error"
                className={`block w-full p-2  border-black border-2 rounded-md  focus:border-blue-600 focus:outline-none ${
                  errors.email ? "border-[#EB1414]" : ""
                }`}
                placeholder="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter valid  email address",
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

            <div>
              <label for="Phone_Number">
                Phone Number <span className="text-[#EB1414]">*</span>
              </label>
              <input
                type="text"
                id="Phone_Number"
                name="Phone_Number"
                aria-describedby="Phone_Number_error"
                className={`block w-full p-2  border-black border-2 rounded-md  focus:border-blue-600 focus:outline-none ${
                  errors.phone_no ? "border-[#EB1414]" : ""
                }`}
                placeholder="Phone Number"
                // minLength={10}
                // maxLength={10}
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
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className=" bg-blue-600  hover:text-blue-600 focus:text-blue-600 hover:bg-white focus:bg-white  sm:w-44 font-medium mt-4 border-blue-400 border-2 rounded-3xl p-3 text-white   text-[16px]"
            >
              {fileUploaded ? "Please wait..." : "Submit"}
            </button>
            {/* <span class="sr-only">Please Wait</span> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityAudits
