import axios from "axios"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import AnalysisInfo from "../WebsiteAnalysis/AnalysisInfo"

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import {
  docAccessbilityForm,
  uploadDocAccessbilityForm,
} from "../../services/api"

const DocAnalysis = () => {
  const MyBackgroundImage = "/img/form/Accessibility.jpg"

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

  const [image, setImage] = useState("")

  const onSubmit = async (data, event) => {
    console.log(data)
    docAccessbilityForm(data)
      .then(res => {
        if (res.status === 200) {
          console.log("res", res)
          const file = event.target.elements.fileInput.files[0]
          const formData = new FormData()
          formData.append("image", file)

          axios
            .post(
              `https://enquiries.trendsofttech.work/api/doc-image-update/${res.data.id}`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then(res => {
              if (res.status === 200) {
                console.log("image", res)
                alert("Submit Successfully")
                window.location.reload()
              }
            })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="mt-10 1920Screen:px-48 2xl:px-24  px-8  ">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-8 justify-center     rounded-xl  shadow-lg shadow-black/20 ">
        <div className="p-4 bg-[#0b6ddc] rounded-l-2xl">
          <AnalysisInfo />
        </div>
        <div className="bg-white rounded-l-2xl ">
          <form
            className=" w-full  2xl:px-24  space-y-5 px-5 py-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between">
              <p className="text-xl text-[#0b6ddc] font-semibold">
                Contact Here
              </p>
              <small className="text-red-500 text-[14px]">
                * Fields required
              </small>
            </div>

            <div>
              <p>First Name*</p>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2 border-black/20 border-b focus:border-blue-600 focus:outline-none ${
                  errors.first_name ? "border-red-500" : ""
                }`}
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
              <p>Last Name*</p>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2  border-black/20 border-b focus:border-blue-600 focus:outline-none ${
                  errors.last_name ? "border-red-500" : ""
                }`}
                {...register("last_name", {
                  required: "last_name is required",
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
              <p>Email*</p>
              <input
                type="email"
                aria-label="required"
                className={`block w-full p-2  border-black/20 border-b focus:border-blue-600 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
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
              <p>Phone No*</p>
              <input
                type="text"
                aria-label="required"
                className={`block w-full p-2  border-black/20 border-b focus:border-blue-600 focus:outline-none ${
                  errors.phone_no ? "border-red-500" : ""
                }`}
                maxLength={10}
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

            <div className="space-y-3">
              <p>Upload PDF / Document *</p>

              <input
                type="file"
                name="fileInput"
                className="block w-full p-2  border-black/20 border-b focus:border-blue-600 focus:outline-none "
                required
              />
            </div>

            <div>
              <div>
                <GoogleReCaptchaProvider reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI">
                  <GoogleReCaptcha
                    ref={RefCaptcha}
                    onChange={onChange}
                    refreshReCaptcha={() => setRefreshReCaptcha(r => !r)}
                  />
                </GoogleReCaptchaProvider>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600  sm:w-44 font-medium mt-2 border-blue-400 border hover:border   rounded-xl p-2 text-white   text-[16px]
              disabled:opacity-60 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DocAnalysis
