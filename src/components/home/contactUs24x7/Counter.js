import React, { useState } from "react"
// import tw from "twin.macro"
import CountUp from "react-countup"
import { Counte, Counter_Number, Counter_Description } from "../HomeStyle"
import ScrollTrigger from "react-scroll-trigger"
const Counter = () => {
  const [counter, setCounter] = useState(false)
  // const Header = tw.h1`text-[50px] font-bold text-blue-500`
  // const Description = tw.p`text-[20px] font-[400] font-semibold font-mono`
  // const Div = tw.div`md:flex md:justify-center grid justify-items-center gap-24 md:gap-56  p-6 bg-white`
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <Counte>
        <div>
          <Counter_Number>{counter && <CountUp end={100} />}+</Counter_Number>
          <Counter_Description>Happy Clients</Counter_Description>
        </div>
        <div>
          <Counter_Number>{counter && <CountUp end={50} />}+</Counter_Number>
          <Counter_Description>Happy Clients</Counter_Description>
        </div>
        <div>
          <Counter_Number>{counter && <CountUp end={200} />}+</Counter_Number>
          <Counter_Description>Happy Clients</Counter_Description>
        </div>
      </Counte>
    </ScrollTrigger>
  )
}

export default Counter
