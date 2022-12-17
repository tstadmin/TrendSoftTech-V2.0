import React from "react"
import tw from "twin.macro"
const Counter = () => {
  const Header = tw.h1`text-[50px] font-bold`
  const Description = tw.p`text-[20px] font-[400]`
  const Div = tw.div`md:flex md:justify-center grid justify-items-center gap-24 md:gap-56  p-6 bg-white`
  return (
    <Div>
      <div>
        <Header>100+</Header>
        <Description>Happy Clients</Description>
      </div>
      <div>
        <Header>50+</Header>
        <Description>Happy Clients</Description>
      </div>
      <div>
        <Header>100+</Header>

        <Description>Happy Clients</Description>
      </div>
    </Div>
  )
}

export default Counter
