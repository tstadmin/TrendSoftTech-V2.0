import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import AnalysisInfo from "../WebsiteAnalysis/AnalysisInfo"

const DocAnalysis = () => {
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
        <div>
          <AnalysisInfo />
        </div>
        <div>
          <form
            className=" w-full  2xl:px-24  px-2 space-y-5 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="flex justify-between">
                <p>Upload PDF / Document *</p>
                <p className="text-red-500  text-[14px]">* Field required</p>
              </div>
              <input
                type="file"
                aria-label="required"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.WebsiteURL ? "border-red-500" : ""
                }`}
                placeholder="Website URL "
                {...register("WebsiteURL", {
                  required: "PDF or Document is required",
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
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only Alphabets are allowed",
                  },
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
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only Alphabets are allowed",
                  },
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
                type="text"
                className={`block w-full p-2 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.PhoneNumber ? "border-red-500" : ""
                }`}
                placeholder="Phone No"
                maxLength={10}
                {...register("PhoneNumber", {
                  required: "Phone Number is required",

                  pattern: {
                    value: /^\d*(?:\.\d{1,2})?$/,
                    message: "Only number allower",
                  },
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

export default DocAnalysis
