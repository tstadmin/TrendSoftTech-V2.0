import React, { useState } from "react"
// import tw from "twin.macro"
import CountUp from "react-countup"
import { Counte, CounterNumber, CounterDescription } from "../HomeStyle"
import ScrollTrigger from "react-scroll-trigger"
import { Link } from "gatsby"
const Counter = () => {
  const [counter, setCounter] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <Counte>
        <li>
          <CounterNumber>
            {counter && <CountUp end={20} duration={1} />}+
          </CounterNumber>
          <CounterDescription> Happy Clients</CounterDescription>
        </li>
        {/* <li>
          <CounterNumber>
            {counter && <CountUp end={50} duration={1} />}+
          </CounterNumber>
          <CounterDescription> Companies</CounterDescription>
        </li> */}
        <li>
          <CounterNumber>
            {counter && <CountUp end={30} duration={1} />}+
          </CounterNumber>
          <CounterDescription>
            <Link
              to="/portfolio/"
              aria-label="project Done"
              className="underline"
            >
              Projects Done
            </Link>
          </CounterDescription>
        </li>
      </Counte>
    </ScrollTrigger>
  )
}

export default Counter
