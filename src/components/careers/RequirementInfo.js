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
  Form,
  FormDiv,
  FormHeading,
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
          {" "}
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
      <FormDiv>
        <FormHeading>Apply for this position</FormHeading>
        <Form>
          <label className="text-lg" htmlFor="name">
            Full Name *
          </label>
          <input placeholder="Full Name" />
          <label className="text-lg" htmlFor="email">
            Email *
          </label>
          <input placeholder="Email" />
          <label className="text-lg" htmlFor="Phone">
            {" "}
            Phone *
          </label>
          <input placeholder="Phone" />
          <label className="text-lg" htmlFor="Cover">
            Cover Letter *
          </label>
          <input placeholder="Cover Letter" />
          <label className="text-lg" htmlFor="upload">
            Upload CV/Resume *
          </label>
          <input type="file" id="myfile" name="myfile" />
          <label for="vehicle1"> Allowed Type(s): .pdf, .doc, .docx</label>
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            className="text-start"
          />
          <p>
            By using this form you agree with the storage and handling of your
            data by this website. *
          </p>
          <Button>Submit</Button>
        </Form>
      </FormDiv>
    </Requirement>
  )
}

export default RequirementInfo
