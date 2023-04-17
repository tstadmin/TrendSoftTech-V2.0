import { Link } from "gatsby"
import React from "react"
import Marquee from "react-fast-marquee"

const Clients = props => {
  return (
    // <Marquee speed={30} gradientColor={0} className="z-0">
    <div>
      <ul className=" 2xl:px-32 grid 2xl:grid-cols-3 md:grid-cols-2  justify-self-center justify-items-center  grid-cols-1  gap-16 lg:px-10 sm:px-20 px-8 py-8">
        {props.clients.list?.map((i, idx) => (
          <li
            key={i.listItem.id}
            className="border-2 p-10 rounded-md  shadow-lg  opacity-60 hover:opacity-100"
          >
            <img
              src={i.listItem.img}
              alt={i.listItem.label}
              className="h-[90px]"
            />
            {/* <p className="p-4 text-center mt-5">{i.listItem.label}</p> */}
          </li>
        ))}
      </ul>
    </div>
    // </Marquee>
  )
}

export default Clients
