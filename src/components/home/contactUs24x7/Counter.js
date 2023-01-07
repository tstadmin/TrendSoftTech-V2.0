import React, { useState } from "react"
// import tw from "twin.macro"
import CountUp from "react-countup"
import { Counte, CounterNumber, CounterDescription } from "../HomeStyle"
import ScrollTrigger from "react-scroll-trigger"
const Counter = () => {
  const [counter, setCounter] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <Counte>
        <div>
          <CounterNumber>
            {counter && <CountUp end={100} duration={1} />}+
          </CounterNumber>
          <CounterDescription>Happy Clients</CounterDescription>
        </div>
        <div>
          <CounterNumber>
            {counter && <CountUp end={50} duration={1} />}+
          </CounterNumber>
          <CounterDescription>Companies</CounterDescription>
        </div>
        <div>
          <CounterNumber>
            {counter && <CountUp end={200} duration={1} />}+
          </CounterNumber>
          <CounterDescription>Projects Done</CounterDescription>
        </div>
      </Counte>
    </ScrollTrigger>
  )
}

export default Counter
