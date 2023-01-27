import { Link } from "gatsby"
import React from "react"

import Tilt from "react-parallax-tilt"

import {
  Title,
  Working,
  WorkingDescription,
  WorkingCard,
  WorkingCardTitle,
  WorkingCards,
} from "./HomeStyle"
const WorkingProcess = props => {
  return (
    <Working>
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start bg-blue-50 space-y-12 sm:p-12 p-5 mt-16 rounded-md border-blue-400"
      >
        <h2 className=" md:text-lg  text-sm font-semibold  text-[#dc1f2c]">
          {props.workingProcess.title}
        </h2>

        <WorkingDescription>
          {props.workingProcess.description}
        </WorkingDescription>
        <div>
          <Link
            to="/contact/"
            className="bg-[#0b2d78] focus:bg-white  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#1e6ff6] hover:duration-700  rounded-3xl p-3 text-white min-w-[122px] text-[16px]"
          >
            {props.workingProcess.CTA}
          </Link>
        </div>
      </Tilt>

      <WorkingCards>
        {props.workingProcess.list?.map((i, idx) => (
          <WorkingCard key={i.listItem.id}>
            <WorkingCardTitle>
              {/* <span className="text-[#dc1f2c] ">{i.listItem.id}</span> */}
              <span className="ml-2">{i.listItem.title}</span>
            </WorkingCardTitle>

            <p>{i.listItem.description}</p>
          </WorkingCard>
        ))}
      </WorkingCards>
    </Working>
  )
}

export default WorkingProcess
