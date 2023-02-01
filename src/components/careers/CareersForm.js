import React, { useState } from "react"
import { FormHeading } from "./CareersStyle"
import axios from "axios"

const CareersForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [resume, setResume] = useState("")
  const [options, setOptions] = useState("")
  const [letter, setLetter] = useState("")

  // function refreshPage() {
  //   window.location.reload(false)
  // }
  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      FullName: name,
      Email: email,
      Phone_Number: number,
      Cover_Letter: letter,
      Resume: resume,
      Position: options,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/df95d298-d4ba-4992-ba68-4d4b81b05c4c",
        data
      )
      .then(response => {
        // console.log(response);
        setName("")
        setEmail("")
        setNumber("")
        setLetter("")
        setResume("")

        setOptions("")
      })
  }

  return (
    <div>
      <div className="grid   border border-black  space-y-8 sm:p-7 p-5">
        <FormHeading>Apply for this position</FormHeading>

        <div className="grid space-y-6 justify-items-center">
          <form
            className=" md:w-[50vw] w-full space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              required
              placeholder="Full Name"
              onChange={e => setName(e.target.value)}
              value={name}
            />

            <input
              type="email"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              required
              placeholder="Email "
              onChange={e => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="number"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              required
              placeholder="Phone Number"
              onChange={e => setNumber(e.target.value)}
              value={number}
            />
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              required
              placeholder="Cover Letter"
              onChange={e => setLetter(e.target.value)}
              value={letter}
            />

            <input
              type="file"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              required
              placeholder="Enter your file"
              onChange={e => setResume(e.target.value)}
              value={resume}
            />
            {/* <div>
           <label >Send to Resume to Mail :<a
                  href="mailto:info@trendsofttech.com"
                  aria-label="company mail: info@trendsofttech.com"
                  className="ml-4 text-blue-500"
                >
                 info@trendsofttech.com
                </a> </label>
           </div> */}

            <label className="text-lg" htmlFor="a">Select position </label>
            <select
              className="border-2 rounded-sm border-black"
              onChange={e => setOptions(e.target.value)}
            >
              <option type="text">Select position</option>
              <option
                type="text"
                value="ReactJs Developer"
                onChange={e => setOptions(e.target.value)}
              >
                ReactJs Developer{" "}
              </option>
              <option
                type="text"
                value="Laravel Developer"
                onChange={e => setOptions(e.target.value)}
              >
                Laravel Developer
              </option>
              <option
                type="text"
                value="Web Designer"
                onChange={e => setOptions(e.target.value)}
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

            <input
              type="submit"
              className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-3 text-white hover:text-blue-400  text-[16px]"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CareersForm
