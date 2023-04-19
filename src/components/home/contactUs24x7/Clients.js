import { Link } from "gatsby"
import React from "react"
import Marquee from "react-fast-marquee"

const Clients = props => {
  return (
    // <Marquee speed={30} gradientColor={0} className="z-0">
    <div>
      <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#913A1D]">
        Our Clients
      </h1>
      <ul className=" 2xl:px-32 grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-self-center justify-items-center  grid-cols-1  gap-16 lg:px-10 sm:px-20 px-8 py-8">
        {props.clients.list?.map((i, idx) => (
          <li
            key={i.listItem.id}
            className=" w-[300px] h-[200px] p-10 rounded-md  "
          >
            <img
              src={i.listItem.img}
              alt={i.listItem.label}
              className="h-20 opacity-50 hover:opacity-100"
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
