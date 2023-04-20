import { Link } from "gatsby"
import React from "react"
import Marquee from "react-fast-marquee"

const Clients = props => {
  return (
    // <Marquee speed={30} gradientColor={0} className="z-0">
    <div>
      <ul className=" grid 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  justify-items-center  grid-cols-1   1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
        {props.clients.list?.map((i, idx) => (
          <li
            key={i.listItem.id}
            className=" w-[200px] h-[200px]  flex justify-center items-center "
          >
            <img
              src={i.listItem.img}
              alt={i.listItem.label}
              className="h-20 "
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
