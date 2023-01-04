import { Link } from "gatsby"
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
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start bg-blue-50 space-y-12 p-12 mt-16 rounded-md border-blue-400"
      >
        <Title>{props.workingProcess.title}</Title>

        <WorkingDescription>
          {props.workingProcess.description}
        </WorkingDescription>

        <Link to="/contact/">
          <Button className="mt-10 "> {props.workingProcess.CTA}</Button>
        </Link>
      </Tilt>

      <WorkingCards>
        {props.workingProcess.list?.map((i, idx) => (
          <WorkingCard key={i.listItem.id}>
            <WorkingCardNumber>{i.listItem.id}</WorkingCardNumber>

            <WorkingCardTitle>{i.listItem.title}</WorkingCardTitle>

            <p>{i.listItem.description}</p>
          </WorkingCard>
        ))}
      </WorkingCards>
    </Working>
  )
}

export default WorkingProcess
