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
    <Working>
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start bg-blue-50 space-y-12 sm:p-12 p-5 mt-16 rounded-md border-blue-400"
      >

        <WorkingDescription>
          {props.workingProcess.description}
        </WorkingDescription>
        <div>
      
        </div>
      </Tilt>

      <WorkingCards>
        {props.workingProcess.list?.map((i, idx) => (
          <WorkingCard key={i.listItem.id}>
            <WorkingCardTitle>
              
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
