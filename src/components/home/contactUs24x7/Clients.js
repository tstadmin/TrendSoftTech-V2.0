import { Link } from "gatsby"
import React from "react"
import Marquee from "react-fast-marquee"

const Clients = props => {
  return (
    // <Marquee speed={30} gradientColor={0} className="z-0">
    <div>
      <ul className="  2xl:px-32  xl:flex lg:justify-around grid md:grid-cols-3 412Screen:grid-cols-2 justify-self-center justify-items-center  grid-cols-1  gap-16 lg:px-10 sm:px-20 px-8 py-8">
        {props.clients.list?.map((i, idx) => (
          <li key={i.listItem.id}>
            {/* <Link to="#" aria-label={i.listItem.label}> */}
            <img
              src={i.listItem.img}
              alt=""
              aria-label={i.listItem.label}
              className="h-[60px] z-0  opacity-100 "
            />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
    // </Marquee>
  )
}

export default Clients
