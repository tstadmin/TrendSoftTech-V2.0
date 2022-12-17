import React, { useState } from "react"
import tw from "twin.macro"
import CountUp from "react-countup"

import ScrollTrigger from "react-scroll-trigger"
const Counter = () => {
  const [counter, setCounter] = useState(false)
  const Header = tw.h1`text-[50px] font-bold text-blue-500`
  const Description = tw.p`text-[20px] font-[400] font-semibold`
  const Div = tw.div`md:flex md:justify-center grid justify-items-center gap-24 md:gap-56  p-6 bg-white`
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <Div>
        <div>
          <Header>{counter && <CountUp end={100} />}+</Header>
          <Description>Happy Clients</Description>
        </div>
        <div>
          <Header>{counter && <CountUp end={50} />}+</Header>
          <Description>Happy Clients</Description>
        </div>
        <div>
          <Header>{counter && <CountUp end={200} />}+</Header>

          <Description>Happy Clients</Description>
        </div>
      </Div>
    </ScrollTrigger>
  )
}

export default Counter
