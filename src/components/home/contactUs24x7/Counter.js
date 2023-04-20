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
      // onExit={() => setCounter(false)}
    >
      <ul className="320Screen:flex justify-center grid justify-items-center gap-24 md:gap-40  p-6 bg-white ">
        <li>
          <CounterNumber>
            {counter && <CountUp end={15} duration={1} />}+
          </CounterNumber>
          <CounterDescription>
            <Link
              to="/portfolio/"
              aria-label="projects Done"
              className="underline"
            >
              Projects Done
            </Link>
          </CounterDescription>
        </li>

        <li>
          <CounterNumber>
            {counter && <CountUp end={30} duration={1} />}+
          </CounterNumber>
          <CounterDescription>Happy Clients</CounterDescription>
        </li>
      </ul>
    </ScrollTrigger>
  )
}

export default Counter
