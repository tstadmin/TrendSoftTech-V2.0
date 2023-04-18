import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
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
  const MyBackgroundImage = "/img/accessibilityForm/docaccesibility.svg"

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
  const [fileUploaded, setFileUploaded] = useState(false)

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false)
      }, 50000) // 5 seconds
      return () => clearTimeout(timeout)
    }
  }, [fileUploaded])

  const onSubmit = async (data, event) => {
    console.log(data)
    docAccessbilityForm(data)
      .then(res => {
        if (res.status === 200) {
          console.log("res", res)
          const file = event.target.elements.fileInput.files[0]
          const formData = new FormData()
          formData.append("image", file)
          setFileUploaded(true)
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
                setFileUploaded(false)
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
    <div className="mt-10 1920Screen:px-48 2xl:px-24  ">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-2 justify-center      rounded-xl  shadow-lg shadow-black/20 ">
        <AnalysisInfo />

        <div className="bg-white rounded-l-2xl ">
          <form
            className=" w-full  2xl:px-24  space-y-5 px-5 py-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between">
              <h2 className="text-xl text-[#0b6ddc] font-semibold">
                Contact Here
              </h2>
              <small className="text-red-500 text-[14px]">
                <span className="text-red-500">*</span> Fields required
              </small>
            </div>

            <div>
              <label for="First_Name">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                aria-describedby="First_Name_error"
                id="First_Name"
                name="First_Name"
                placeholder="First Name"
                className={`block w-full p-2 border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
                  errors.first_name ? "border-red-500" : ""
                }`}
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
                <small className="text-red-500" id="First_Name_error">
                  {errors.first_name.message}
                </small>
              )}
            </div>

            <div>
              <label for="Last_Name">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                aria-describedby="Last_Name_error"
                id="Last_Name"
                name="Last_Name"
                placeholder="Last Name"
                className={`block w-full p-2  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
                  errors.last_name ? "border-red-500" : ""
                }`}
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
                <small className="text-red-500" id="Last_Name_error">
                  {errors.last_name.message}
                </small>
              )}
            </div>

            <div>
              <label for="">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                aria-describedby="Email_error"
                id="Email"
                name="Email"
                placeholder="Email"
                className={`block w-full p-2  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
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
                <small className="text-red-500" id="Email_error">
                  {errors.email.message}
                </small>
              )}
            </div>

            <div>
              <label for="Phone_Number">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                aria-describedby="Phone_Number_error"
                id="Phone_Number"
                name="Phone_Number"
                placeholder="Phone Number"
                className={`block w-full p-2  border-black border-2 rounded-md focus:border-blue-600 focus:outline-none ${
                  errors.phone_no ? "border-red-500" : ""
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
                <small className="text-red-500" id="Phone_Number_error">
                  {errors.phone_no.message}
                </small>
              )}
            </div>

            <div>
              <label for="file-upload" class="button">
                Upload file
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                aria-describedby="file-upload_error"
                className="block w-full p-3 border-black border-2 rounded-md
                 focus:border-2 focus:border-blue-600 focus:outline-none"
                {...register("fileInput", {
                  required: "Upload file  is required",

                  pattern: {
                    value: /(\.pdf|\.xlsx|\.docx)$/i,
                    message: ".pdf or .xlsx or .docx  is required",
                  },
                })}
                onKeyUp={() => {
                  trigger("fileInput")
                }}
              />
              {errors.fileInput && (
                <small className="text-red-500" id="file-upload_error">
                  {errors.fileInput.message}
                </small>
              )}
            </div>

            {/* <div>
              <div>
                <GoogleReCaptchaProvider reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI">
                  <GoogleReCaptcha
                    ref={RefCaptcha}
                    onChange={onChange}
                    refreshReCaptcha={() => setRefreshReCaptcha(r => !r)}
                  />
                </GoogleReCaptchaProvider>
              </div>
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

export default DocAnalysis
