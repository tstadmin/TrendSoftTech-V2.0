import React from "react"

import Tilt from "react-parallax-tilt"

import {
  Working,
  WorkingDescription,
  WorkingCard,
  WorkingCardTitle,
  WorkingCards,
} from "./HomeStyle"
const WorkingProcess = props => {
  return (
    <div className="lg:flex  gap-4 justify-center   1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4  ">
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[30%] lg:w-[34%] md:w-full sm:text-start lg:text-start bg-blue-50 sm:p-6 p-2 mt-16 rounded-md border-blue-400"
      >
        <WorkingDescription>
          {props.workingProcess.description}
        </WorkingDescription>
        <div></div>
      </Tilt>

      <WorkingCards>
        {props.workingProcess.list?.map((i, idx) => (
          <WorkingCard key={i.listItem.id}>
            <WorkingCardTitle>
              <span>{i.listItem.title}</span>
            </WorkingCardTitle>

            <p>{i.listItem.description}</p>
          </WorkingCard>
        ))}
      </WorkingCards>
    </div>
  )
}

export default WorkingProcess
