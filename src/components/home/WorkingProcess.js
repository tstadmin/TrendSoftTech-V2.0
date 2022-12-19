import React from "react"

import Tilt from "react-parallax-tilt"
import tw from "twin.macro"

const WorkingProcess = props => {
  const H1 = tw.h1`text-xl font-medium text-blue-600`
  const Button = tw.button`text-xl text-center bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 lg:w-[50%] sm:w-full hover:duration-700 cursor-pointer`
  const H2 = tw.h2`text-5xl text-blue-600 font-semibold`
  const H3 = tw.h3`lg:text-3xl  md:text-xl  font-semibold`
  const H4 = tw.h4`text-lg`
  const Card = tw.div`border border-blue-400 min-h-full p-8 rounded-md space-y-4 shadow-sm shadow-blue-400 hover:bg-black/5  hover:border-none hover:duration-[2s]`
  const Div = tw.div`lg:flex justify-center gap-4 px-8 `
  const Cards = tw.div`mt-16 md:grid md:grid-cols-2 gap-4 w-full lg:w-[60%] md:w-full`
  const Description = tw.div`text-2xl font-semibold lg:text-4xl`
  const DescriptionCard = tw.div`border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start  space-y-12 p-12 mt-16 rounded-md border-blue-400`
  return (
    <Div>
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="border 2xl:w-[22%] xl:w-[27%] lg:w-[34%] md:w-full sm:text-center lg:text-start  space-y-12 p-12 mt-16 rounded-md border-blue-400"
      >
        <H1>WORKING PROCESS</H1>
        {/* className="440Screen:text-4xl text-2xl font-semibold lg:text-4xl " */}
        <Description>
          Our Working Process - How We Work For Our Customers
        </Description>

        <Button>Contact us</Button>
      </Tilt>

      <Cards>
        {props.workingProcess.map((i, idx) => (
          <Card key={i.listItem.id}>
            <H2>{i.listItem.id}</H2>

            <H3>{i.listItem.title}</H3>

            <H4>{i.listItem.description}</H4>
          </Card>
        ))}
      </Cards>
    </Div>
  )
}

export default WorkingProcess
