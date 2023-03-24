import axios from "axios"
import React, { useState } from "react"
import { FormHeading } from "./CareersStyle"

const CareersForm = () => {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [letter, setLetter] = useState("")
  const [file, setFile] = useState("")
  const [position, setPosition] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    const data = {
      Name: name,
      PhoneNumber: phoneNumber,
      Email: email,
      Letter: letter,
      File: file,
      Position: position,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/b132641c-40b8-4c63-9a83-04abeec76923",
        data
      )
      .then(res => {
        if (res.status === 200) {
          e.target.reset()
          alert("Sumbit Successfully")
          setName("")
          setPhoneNumber("")
          setEmail("")
          setLetter("")
          setFile("")
          setPosition("")
        }
      })
  }

  return (
    <div>
      <div className="grid   border border-black  space-y-8 sm:p-7 p-5">
        <FormHeading>Apply for this position</FormHeading>

        <div className="grid space-y-6 justify-items-center">
          <form className=" md:w-[50vw] w-full space-y-6" onSubmit={onSubmit}>
            <input
              placeholder="Your Name"
              name="Name"
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              onChange={e => setName(e.target.value)}
            />

            <input
              type="email"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="email"
              placeholder="Email "
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="number"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="number"
              placeholder="Phone Number"
              onChange={e => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="letter"
              placeholder="Cover Letter"
              onChange={e => setLetter(e.target.value)}
            />

            <input
              type="file"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="resume"
              placeholder="Enter your file"
              onChange={e => setFile(e.target.value)}
            />

            <label className="text-lg" htmlFor="a">
              Select position
            </label>
            <select
              className="border-2 p-1  rounded-sm ml-4 border-black"
              onChange={e => setPosition(e.target.value)}
            >
              <option type="text">Select position</option>
              <option
                type="text"
                value="ReactJs Developer"
                onChange={e => setPosition(e.target.value)}
              >
                ReactJs Developer{" "}
              </option>
              <option
                type="text"
                value="Laravel Developer"
                onChange={e => setPosition(e.target.value)}
              >
                Laravel Developer
              </option>
              <option
                type="text"
                value="Web Designer"
                onChange={e => setPosition(e.target.value)}
              >
                Web Designer
              </option>
            </select>

            <div className="240Screen:flex grid space-x-2">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
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
