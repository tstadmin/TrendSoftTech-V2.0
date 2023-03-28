import { Link } from "gatsby"
import React from "react"
import Marquee from "react-fast-marquee"

const Clients = props => {
  return (
    <Marquee speed={30} gradientColor={0} className="z-0">
      <div className="xl:px-42 px-8 flex gap-44 py-8">
        {props.clients.list?.map((i, idx) => (
          <div key={i.listItem.id}>
            {/* <Link to="#" aria-label={i.listItem.label}> */}
            <img
              src={i.listItem.img}
              alt=""
              aria-label={i.listItem.label}
              className="h-[50px] z-0"
            />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default Clients
