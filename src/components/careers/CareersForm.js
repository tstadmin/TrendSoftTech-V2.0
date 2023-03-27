import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FormHeading } from "./CareersStyle"

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

  const onSubmit = data => {
    console.log(data)
    axios
      .post(
        "https://sheet.best/api/sheets/b132641c-40b8-4c63-9a83-04abeec76923",
        data
      )
      .then(res => {
        if (res.status === 200) {
          reset()
          alert("Sumbit Successfully")
        }
      })
      .catch(err => {
        // console.log(err)
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
              <p>Name</p>
              <input
                placeholder="Name"
                type="text"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.Name ? "border-red-500" : ""
                }`}
                {...register("Name", {
                  required: "Name is required",
                })}
                onKeyUp={() => {
                  trigger("Name")
                }}
              />
              {errors.Name && (
                <small className="text-red-500">{errors.Name.message}</small>
              )}
            </div>
            <div>
              <p>Email</p>
              <input
                type="email"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.Email ? "border-red-500" : ""
                }`}
                placeholder="Email "
                {...register("Email", {
                  required: "Email is required",
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
              <p>Phone Number</p>
              <input
                type="number"
                placeholder="Phone Number"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.PhoneNumber ? "border-red-500" : ""
                }`}
                {...register("PhoneNumber", {
                  required: "Phone Number is required",
                  pattern:
                    '//"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"/gmi/i',
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

            <div>
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
            </div>

            <div>
              <p>Upload Resume</p>
              <input
                type="file"
                className={`block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none ${
                  errors.File ? "border-red-500" : ""
                }`}
                placeholder="Enter your file"
                {...register("File", {
                  required: "File is required",
                })}
                onKeyUp={() => {
                  trigger("File")
                }}
              />
              {errors.File && (
                <small className="text-red-500">{errors.File.message}</small>
              )}
            </div>

            <div>
              <label className="text-lg" htmlFor="a">
                Select position
              </label>
              <select
                className="border-2 p-1  rounded-sm ml-4 border-black"
                {...register("Position", {
                  required: "Position is required",
                })}
                onKeyUp={() => {
                  trigger("Position")
                }}
              >
                <option type="text">Select position</option>

                {Position.map((c, idx) => (
                  <option value={c.position} key={c.id}>
                    {c.position}
                  </option>
                ))}
              </select>
              {errors.Position && (
                <small className="text-red-500">
                  {errors.Position.message}
                </small>
              )}
            </div>

            <div className="240Screen:flex grid space-x-2">
              <input
                type="checkbox"
                {...register("checkbox", {
                  required: "checkbox is required",
                })}
                onKeyUp={() => {
                  trigger("checkbox")
                }}
                required="required"
              />
              <p>
                By using this form you agree with the storage and handling of
                your data by this website. *
              </p>
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

export default CareersForm
