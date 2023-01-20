import React from "react"
import { FormHeading, InputDiv, Button } from "./CareersStyle"
const CareersForm = () => {
  return (
    <div>
      <div className="grid   border border-black  space-y-8 sm:p-7 p-5">
        <FormHeading>Apply for this position</FormHeading>
        <div className="grid space-y-6 justify-items-center">
          <InputDiv>
            <label>Full Name</label>
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="Full Name"
            />
          </InputDiv>

          <InputDiv>
            <label>Email address</label>
            <input
              type="email"
              className="block w-full p-3 rounded border-black border-2 focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="emailaddress@example.com"
            />
          </InputDiv>
          <InputDiv>
            <label>Phone </label>
            <input
              type="number"
              className="block w-full p-3 rounded border-black border-2 focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="Phone number"
            />
          </InputDiv>
          <InputDiv>
            <label>Cover Letter</label>
            <textarea
              type="text"
              className="block w-full  p-3 rounded border-black border-2 focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="Cover Letter"
            />
          </InputDiv>
          <InputDiv>
            <label className="text-lg">Upload CV/Resume</label>
            <input
              type="file"
              id="myfile"
              name="myfile"
              className="block w-full p-3 rounded border-black border-2 text-sm focus:border-blue-600 focus:outline-none"
            />
          </InputDiv>
          <InputDiv>
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

            <Button>Submit</Button>
          </InputDiv>
        </div>
      </div>
    </div>
  )
}

export default CareersForm
