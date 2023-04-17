import { Link } from "gatsby"
import React from "react"

const Portfolios = props => {
  return (
    <div className=" mt-10 1920Screen:px-44 2xl:px-24 px-8 py-10 bg-blue-100">
      <div className="text-center space-y-2">
        <h2 className="md:text-3xl sm:text-lg text-base text-[#0B70E1]">
          Portfolio
        </h2>
      </div>

      <ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {props.data.portfolios.map((item, index) => (
          <li className="relative mt-10 py-4 " key={item.listItem.id}>
            {/* <Link
              aria-label={item.listItem.label}
              to={item.listItem.link}
              target="_blank"
            > */}
            <img
              src={item.listItem.img}
              alt=""
              className="lg:h-[320px] md:h-[400px] h-[300px] md:w-[90%] w-full object-cover  object-left-top "
            />

            <div className="grid justify-center  lg:w-72 w-52 h-auto space-y-3 bg-white shadow-xl lg:p-5 p-2   md:right-0 540Screen:right-[25%] sm:right-[32%]  340Screen:right-[20%] right-12 absolute md:top-32  top-56  ">
              <h3 className="lg:text-lg  text-xs">{item.listItem.title}</h3>
              <span className="lg:text-lg  text-xs">{item.listItem.about}</span>
              <Link
                aria-label={item.listItem.label}
                className="bg-[#0b2d78]  p-2 rounded-md text-center lg:text-lg  text-xs text-white"
                to={item.listItem.link}
                target="_blank"
              >
                Explore
              </Link>
            </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolios
