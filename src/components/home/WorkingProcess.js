import React from "react"

import Tilt from "react-parallax-tilt"
// import tw from "twin.macro"
import {
  Title,
  Working_Process,
  Description,
  Working_Description,
  Working_Card,
  Working_CardNumber,
  Working_CardTitle,
  Working_Cards,
  Button,
} from "./HomeStyle"
const WorkingProcess = props => {
  // const H1 = tw.h1`text-xl font-medium text-blue-600`
  // const Button = tw.button`text-xl text-center bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 lg:w-[50%] sm:w-full hover:duration-700 cursor-pointer`
  // const H2 = tw.h2`text-5xl text-blue-600 font-semibold`
  // const H3 = tw.h3`lg:text-3xl  md:text-xl  font-semibold`
  // const H4 = tw.h4`text-lg`
  // const Card = tw.div`border border-blue-400 min-h-full p-8 rounded-md space-y-4 shadow-sm shadow-blue-400 hover:bg-black/5  hover:border-none hover:duration-[2s]`
  // const Div = tw.div`lg:flex justify-center gap-4 px-8 `
  // const Cards = tw.div`mt-16 md:grid md:grid-cols-2 gap-4 w-full lg:w-[60%] md:w-full`
  // const Description = tw.div`text-2xl font-semibold lg:text-4xl`
  // const DescriptionCard = tw.div`border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start  space-y-12 p-12 mt-16 rounded-md border-blue-400`
  return (
    <Working_Process>
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start  space-y-12 p-12 mt-16 rounded-md border-blue-400"
      >
        <Title>WORKING PROCESS</Title>

        <Working_Description>
          Our Working Process - How We Work For Our Customers
        </Working_Description>

        <Button>Contact us</Button>
      </Tilt>

      <Working_Cards>
        {props.workingProcess.map((i, idx) => (
          <Working_Card key={i.listItem.id}>
            <Working_CardNumber>{i.listItem.id}</Working_CardNumber>

            <Working_CardTitle>{i.listItem.title}</Working_CardTitle>

            <Description>{i.listItem.description}</Description>
          </Working_Card>
        ))}
      </Working_Cards>
    </Working_Process>
  )
}

export default WorkingProcess
