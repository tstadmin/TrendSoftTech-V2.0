import React from "react"

import Tilt from "react-parallax-tilt"

import {
  Title,
  Working,
  Description,
  WorkingDescription,
  WorkingCard,
  WorkingCardNumber,
  WorkingCardTitle,
  WorkingCards,
  Button,
} from "./HomeStyle"
const WorkingProcess = props => {
  return (
    <Working>
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start  space-y-12 p-12 mt-16 rounded-md border-blue-400"
      >
        <Title>WORKING PROCESS</Title>

        <WorkingDescription>
          Our Working Process - How We Work For Our Customers
        </WorkingDescription>

        <Button>Contact us</Button>
      </Tilt>

      <WorkingCards>
        {props.workingProcess.map((i, idx) => (
          <WorkingCard key={i.listItem.id}>
            <WorkingCardNumber>{i.listItem.id}</WorkingCardNumber>

            <WorkingCardTitle>{i.listItem.title}</WorkingCardTitle>

            <Description>{i.listItem.description}</Description>
          </WorkingCard>
        ))}
      </WorkingCards>
    </Working>
  )
}

export default WorkingProcess
