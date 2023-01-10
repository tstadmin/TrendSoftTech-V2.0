import React from "react"
import { BsCalendarCheck } from "react-icons/bs"
import { MdOutlinePersonOutline } from "react-icons/md"
import { BiBookAlt } from "react-icons/bi"
import { TiMessages } from "react-icons/ti"
import {
  Requirement,
  RequirementDiv,
  RequirementIcon,
  RequirementInfoDiv,
  RequirementInfoheading,
  FormHeading,
  InputDiv,
  Button,
} from "./CareersStyle"
const RequirementInfo = props => {
  return (
    <Requirement>
      <RequirementDiv>
        <RequirementIcon>
          <BsCalendarCheck />
          December 7, 2022
        </RequirementIcon>
        <RequirementIcon>
          <MdOutlinePersonOutline />
          admin
        </RequirementIcon>
        <BiBookAlt />
        <RequirementIcon>
          <TiMessages /> 0
        </RequirementIcon>
      </RequirementDiv>
      <RequirementInfoDiv>
        <RequirementInfoheading>{props.data.title}</RequirementInfoheading>
        {props.data.list?.map((item, idx) => (
          <li key={item.listItem.id}>{item.listItem.description}</li>
        ))}
      </RequirementInfoDiv>

      <div class="grid   border border-black  space-y-8 sm:p-7 p-2">
        <FormHeading>Apply for this position</FormHeading>
        <div className="grid space-y-6 justify-items-center">
          <InputDiv>
            <label for="floatingInput">Full Name</label>
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="Full Name"
            />
          </InputDiv>

          <InputDiv>
            <label for="floatingInput">Email address</label>
            <input
              type="email"
              className="block w-full p-3 rounded border-black border-2 focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="name@example.com"
            />
          </InputDiv>
          <InputDiv>
            <label for="floatingInput">Phone </label>
            <input
              type="number"
              className="block w-full p-3 rounded border-black border-2 focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="Phone number"
            />
          </InputDiv>
          <InputDiv>
            <label for="floatingInput">Cover Letter</label>
            <textarea
              type="text"
              className="block w-full  p-3 rounded border-black border-2 focus:border-blue-600 focus:outline-none"
              id="floatingInput"
              placeholder="Cover Letter"
            />
          </InputDiv>
          <InputDiv>
            <label className="text-lg" for="upload">
              Upload CV/Resume
            </label>
            <input
              type="file"
              id="myfile"
              name="myfile"
              className="block w-full p-3 rounded border-black border-2 text-sm focus:border-blue-600 focus:outline-none"
            />
          </InputDiv>
          <InputDiv>
            <div className=" sm:flex grid space-x-2">
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
    </Requirement>
  )
}

export default RequirementInfo
