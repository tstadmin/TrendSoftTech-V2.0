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
    </Requirement>
  )
}

export default RequirementInfo
