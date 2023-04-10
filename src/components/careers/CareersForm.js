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

  const Position = [
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
      <div className="grid   border border-black  space-y-8 sm:p-7 p-5">
        <FormHeading>Apply for this position</FormHeading>
        <div className="grid space-y-6 justify-items-center">
          <form
            className=" md:w-[50vw] w-full space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="flex justify-between">
                <label>
                  Name <span className="text-red-500">*</span>
                </label>
                <p className="text-red-500  text-[14px]">* Field required</p>
              </div>

              <input
                placeholder="Name"
                type="text"
                aria-label="required"
                className={`block w-full p-3  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
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

            <div>
              <label>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                aria-label="required"
                className={`block w-full p-3  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="email "
                {...register("email", {
                  required: "Email is required",
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
              <label>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                aria-label="required"
                placeholder="Phone Number"
                minLength={10}
                className={`block w-full p-3  border-black border-b-2  focus:border-blue-600 focus:outline-none ${
                  errors.phone_no ? "border-red-500" : ""
                }`}
                {...register("phone_no", {
                  required: "Phone Number is required",
                  minLength: {
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
                <small className="text-red-500">
                  {errors.phone_no.message}
                </small>
              )}
            </div>

            <div>
              <label className="text-lg" htmlFor="a">
                Select position <span className="text-red-500">*</span>
              </label>
              <select
                className="block w-full p-3  border-black border-b-2
                focus:border-b-2 focus:border-blue-600 focus:outline-none"
                aria-label="required"
                {...register("position", {
                  required: "Position is required",
                })}
                onKeyUp={() => {
                  trigger("position")
                }}
              >
                <option type="text">Select position</option>

                {Position.map((c, idx) => (
                  <option value={c.position} key={c.id}>
                    {c.position}
                  </option>
                ))}
              </select>
              {errors.position && (
                <small className="text-red-500">
                  {errors.position.message}
                </small>
              )}
            </div>

            <div>
              <label>
                Upload Resume / CV <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="fileInput"
                className="block w-full p-3  border-black border-b-2
               focus:border-b-2 focus:border-blue-600 focus:outline-none"
                required
              />
              {errors.fileInput && <p>{errors.fileInput.message}</p>}
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
              className="bg-blue-600  sm:w-44 font-medium mt-2 border-blue-400 border hover:border rounded-xl p-2 text-white   text-[16px]
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

export default CareersForm
