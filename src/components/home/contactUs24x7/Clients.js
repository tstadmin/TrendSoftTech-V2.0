import React from "react"
import Marquee from "react-fast-marquee"

const Clients = props => {
  return (
    <Marquee speed={30} gradientColor={0} className="z-0">
      <div className="xl:px-42 px-8 flex gap-44 py-8">
        {props.clients.list?.map((i, idx) => (
          <div key={i.listItem.id}>
            <img src={i.listItem.img} alt="" className="h-[65px] z-0" />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default Clients
