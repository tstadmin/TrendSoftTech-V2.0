import axios from "axios"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { FormHeading } from "./CareersStyle"

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import { careerForm, careerfileupLoad } from "../../services/api"

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
  ]
  const RefCaptcha = useRef(null)
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  function onChange(value) {
    console.log("Captcha value:", value)
  }

  const [image, setImage] = useState("")
  function handleImage(e) {
    setImage("image", e.target.files[0])
  }
  function handleApi() {
    const formData = new FormData()
    formData.append("image", image)
    careerfileupLoad(formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onSubmit = data => {
    careerForm(data)
      .then(res => {
        // window.location.reload()

        console.log(res.data.errors)
        alert("Submit Successfully")
      })
      .catch(err => {
        // console.log(err)
      })
  }
  // const handleUpload = data => {
  //   careerfileupLoad(data)
  //     .then(res => {
  //       window.location.reload()
  //     })
  //     .catch(err => {
  //       // console.log(err)
  //     })
  // }
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
                <p>
                  Name <span className="text-red-500">*</span>
                </p>
                <p className="text-red-500  text-[14px]">* Field required</p>
              </div>

              <input
                placeholder="Name"
                type="text"
                aria-label="required"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
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
              <p>
                Email <span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                aria-label="required"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
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
              <p>
                Phone Number <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                aria-label="required"
                placeholder="Phone Number"
                maxLength={10}
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
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
                <small className="text-red-500">
                  {errors.phone_no.message}
                </small>
              )}
            </div>

            {/* <div>
              <p> Cover Letter</p>
              <input
                type="text"
                placeholder=" Cover Letter"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.Letter ? "border-red-500" : ""
                }`}
                {...register("Letter", {
                  required: "Letter is required",
                })}
                onKeyUp={() => {
                  trigger("Letter")
                }}
              />
              {errors.Letter && (
                <small className="text-red-500">{errors.Letter.message}</small>
              )}
            </div> */}

            <div>
              <p>
                Upload Resume / CV <span className="text-red-500">*</span>
              </p>
              <input
                type="file"
                aria-label="required"
                onChange={handleImage}
                className={`block w-full p-3 rounded border-black border-2 focus:border-2  focus:border-blue-600 focus:outline-none ${
                  errors.image ? "border-red-500" : ""
                }`}
                placeholder="Enter your file"
                {...register("image", {
                  required: "File is required",
                })}
                onKeyUp={() => {
                  trigger("image")
                }}
              />
              {errors.image && (
                <small className="text-red-500">{errors.image.message}</small>
              )}
            </div>

            <div>
              <label className="text-lg" htmlFor="a">
                Select position <span className="text-red-500">*</span>
              </label>
              <select
                className="border-2 p-1  rounded-sm ml-4 border-black"
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
              <GoogleReCaptchaProvider reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI">
                <GoogleReCaptcha
                  ref={RefCaptcha}
                  onChange={onChange}
                  refreshReCaptcha={() => setRefreshReCaptcha(r => !r)}
                />
              </GoogleReCaptchaProvider>
            </div>
            <button
              type="submit"
              onClick={handleApi}
              className="bg-blue-600  sm:w-44 font-medium mt-2 border-blue-400 border hover:border   rounded-xl p-3 text-white   text-[16px]
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
