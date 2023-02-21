import React from "react"
import { FormHeading } from "./CareersStyle"

const CareersForm = () => {
  function Submit(e) {
    const formEle = document.querySelector("form")
    const formDatab = new FormData(formEle)
    fetch(
      "https://script.google.com/a/macros/trendsofttech.co.in/s/AKfycbz5cwrtQ-XPA1cUp39cX2dtMHtMdt7ZHURt9rOuTbEWiqKY-ONp2WIrYBLdA91h3gs/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="grid   border border-black  space-y-8 sm:p-7 p-5">
        <FormHeading>Apply for this position</FormHeading>

        <div className="grid space-y-6 justify-items-center">
          <form
            className=" md:w-[50vw] w-full space-y-6"
            onSubmit={e => Submit(e)}
          >
            <input
              placeholder="Your Name"
              name="Name"
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
            />

            <input
              type="email"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="email"
              placeholder="Email "
            />

            <input
              type="number"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="number"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="letter"
              placeholder="Cover Letter"
            />

            <input
              type="file"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              name="resume"
              placeholder="Enter your file"
            />

            <label className="text-lg" htmlFor="a">
              Select position{" "}
            </label>
            <select className="border-2 rounded-sm border-black">
              <option type="text">Select position</option>
              <option type="text" value="ReactJs Developer">
                ReactJs Developer{" "}
              </option>
              <option type="text" value="Laravel Developer">
                Laravel Developer
              </option>
              <option type="text" value="Web Designer">
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
