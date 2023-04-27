import React from "react"
import { BsCalendarCheck } from "react-icons/bs"
import { MdOutlinePersonOutline } from "react-icons/md"
import { BiBookAlt } from "react-icons/bi"
// import { TiMessages } from "react-icons/ti"
import {
  Requirement,
  RequirementDiv,
  RequirementIcon,
  RequirementInfoDiv,
  RequirementInfoheading,
} from "./CareersStyle"
import CareersForm from "./CareersForm"
const RequirementInfo = props => {
  return (
    <Requirement>
      <div id="content" role="main">
        <h1 className="text-[#0b6ddc] font-semibold text-[28px]">
          Designation
        </h1>
      </div>
      <h2 className="md:text-xl sm:text-lg text-base font-semibold font-mono">
        {props.data.title}
      </h2>

      <ul className="space-y-3">
        {props.data.list?.map((item, idx) => (
          <li key={item.listItem.id}>{item.listItem.description}</li>
        ))}
      </ul>
      <div>
        <CareersForm />
      </div>
    </Requirement>
  )
}

export default RequirementInfo
