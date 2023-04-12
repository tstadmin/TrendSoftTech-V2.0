import React, { useEffect, useRef, useState } from "react"
import { set, useForm } from "react-hook-form"
import { FormHeading } from "./CareersStyle"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import { careerForm, careerfileupLoad, getCareerData } from "../../services/api"
import useApi from "../../Hook/useApi"
import axios from "axios"

const messageRequired = "Por favor, preencha este campo"
const messagePositive = "Por favor, informe um valor positivo"

// const UploadSchema = yup.object().shape({
//   fileInput: yup.mixed().test("file", "You need to provide a file", value => {
//     if (value.length > 0) {
//       return true
//     }
//     return false
//   }),
// })

const CareersForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm()

  const position = [
    {
      id: 1,
      position: "ReactJs Developer",
    },
    {
      id: 2,
      position: "Laravel Developer",
    },
    {
      id: 3,
      position: "Web Designer",
    },

    {
      id: 3,
      position: "Business Development",
    },
  ]
  const RefCaptcha = useRef(null)
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  function onChange(value) {
    console.log("Captcha value:", value)
  }
  const [image, setImage] = useState("")
  const onSubmit = async (data, event) => {
    console.log(data)
    careerForm(data)
      .then(res => {
        if (res.status === 200) {
          console.log("res", res)

          const file = event.target.elements.fileInput.files[0]
          console.log("file", file)

          const formData = new FormData()
          formData.append("image", file)
          console.log("formData", formData)

          axios
            .post(
              `https://enquiries.trendsofttech.work/api/career-image-update/${res.data.id}`,
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
    <div>
      <div className="grid   space-y-8 sm:p-7 p-5">
        <div className="grid space-y-6 justify-items-center ">
          <form
            className=" md:w-[50vw] w-full space-y-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="items-start flex justify-between">
              <h3 className="md:text-[29px] sm:text-[20px] 340Screen:text-[18px] text-[16px] font-semibold text-[#0b6ddc]">
                Apply for this position
              </h3>
              <p className="text-red-500  sm:text-[16px] text-[14px]">
                * Fields required
              </p>
            </div>
            <div>
              <label for="Name">
                Name <span className="text-red-500">*</span>
              </label>

              <input
                placeholder="Name"
                id="Name"
                name="Name"
                type="text"
                aria-describedby="Name_error"
                className={`block w-full p-3  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.name ? "border-red-500" : ""
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
                <small className="text-red-500" id="Name_error">
                  {errors.name.message}
                </small>
              )}
            </div>

            <div>
              <label for="Email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
                aria-describedby="Email_career_error"
                className={`block w-full p-3  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                  required: "Email is required",
                })}
                onKeyUp={() => {
                  trigger("email")
                }}
              />
              <span id="Email_career" class="d-none con-error"></span>
              {errors.email && (
                <small className="text-red-500" id="Email_career_error">
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
                name="Phone_Number"
                id="Phone_Number"
                placeholder="Phone Number"
                aria-describedby="Phone_Number_error"
                minLength={10}
                className={`block w-full p-3  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
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
                Upload Resume / CV (pdf or docx ){" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept=".docx,.pdf"
                aria-describedby="file-upload_error"
                className="block w-full p-3  border-black border-b-2
                 focus:border-b-2 focus:border-blue-600 focus:outline-none"
                {...register("fileInput", {
                  required: ".pdf  or .docx  is required",
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

            <div>
              <label className="text-lg" for="Select_position">
                Select position <span className="text-red-500">*</span>
              </label>
              <select
                name="Select_position"
                id="Select_position"
                aria-describedby="Select_position_error"
                className="block w-full p-3  border-black border-b-2
                focus:border-b-2 focus:border-blue-600 focus:outline-none"
                {...register("position", {
                  required: "Position is required",
                })}
                onKeyUp={() => {
                  trigger("position")
                }}
              >
                <option value="">Select position</option>

                {position.map((c, idx) => (
                  <option value={c.position} key={c.id}>
                    {c.position}
                  </option>
                ))}
              </select>
              {errors.position && (
                <small className="text-red-500" id="Select_position_error">
                  {errors.position.message}
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
              className=" bg-blue-600  hover:text-blue-600 focus:text-blue-600 hover:bg-white focus:bg-white  sm:w-44 font-medium mt-4 border-blue-400 border-2 rounded-3xl p-3 text-white   text-[16px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CareersForm
