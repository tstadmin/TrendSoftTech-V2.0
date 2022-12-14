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
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start bg-blue-50 space-y-12 p-12 mt-16 rounded-md border-blue-400"
      >
        <Title>{props.workingProcess.title}</Title>

        <WorkingDescription>
          {props.workingProcess.description}
        </WorkingDescription>
        <div>
          <Link
            to="/contact/"
            className="bg-blue-600  hover:bg-white font-medium border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]"
          >
            {props.workingProcess.CTA}
          </Link>
        </div>
      </Tilt>

      <WorkingCards>
        {props.workingProcess.list?.map((i, idx) => (
          <WorkingCard key={i.listItem.id}>
            <WorkingCardTitle>
              <span className="text-orange-400 ">{i.listItem.id}.</span>
              {i.listItem.title}
            </WorkingCardTitle>

            <p>{i.listItem.description}</p>
          </WorkingCard>
        ))}
      </WorkingCards>
    </Working>
  )
}

export default WorkingProcess
