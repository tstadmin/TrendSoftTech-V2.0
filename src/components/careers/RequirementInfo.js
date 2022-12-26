import React from "react"
import { BsCalendarCheck } from "react-icons/bs"
import { MdOutlinePersonOutline } from "react-icons/md"
import { BiBookAlt } from "react-icons/bi"
import { TiMessages } from "react-icons/ti"
const RequirementInfo = props => {
  return (
    <div className="space-y-8 lg:px-52 sm:px-28 px-8">
      <div className="space-y-3">
        <li className="flex gap-3">
          <BsCalendarCheck />
          December 7, 2022
        </li>
        <li className="flex gap-3">
          {" "}
          <MdOutlinePersonOutline />
          admin
        </li>
        <BiBookAlt />
        <li className="flex gap-3">
          <TiMessages /> 0
        </li>
      </div>
      <div className="space-y-3">
        <p className="text-2xl font-semibold">{props.data.title}</p>
        {props.data.list?.map((item, idx) => (
          <li key={item.listItem.id}>{item.listItem.description}</li>
        ))}
      </div>
      <div className="grid border-2 border-black justify-items-center space-y-8 p-7">
        <h1 className="text-4xl font-semibold ">Apply for this position</h1>
        <form className="grid space-y-2">
          <label className="text-lg" htmlFor="name">
            Full Name *
          </label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg" htmlFor="email">
            Email *
          </label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg" htmlFor="Phone">
            {" "}
            Phone *
          </label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg" htmlFor="Cover">
            Cover Letter *
          </label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg" htmlFor="upload">
            Upload CV/Resume *
          </label>
          <input type="file" id="myfile" name="myfile" />
          <label for="vehicle1"> Allowed Type(s): .pdf, .doc, .docx</label>
        </form>
      </div>
    </div>
  )
}

export default RequirementInfo
