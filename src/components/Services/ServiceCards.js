import { Link } from "gatsby"
import React from "react"

const ServiceCards = props => {
  console.log(props)
  return (
    <div className="space-y-5">
      <div className="text-center mt-8">
        <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#B8000C]">
          {props.title}
        </h1>
      </div>
      <ul className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 lg:justify-items-start justify-items-center grid grid-cols-1 gap-5 1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
        {props.data.map((item, idx) => (
          <li className="lg:flex grid  max-w-[500px] 2xl:gap-8 gap-4 min-h-[220px]  justify-items-center rounded-lg  lg:p-6 2xl:px-8 md:p-8 p-5 bg-white border border-[#377bf1]">
            <div className=" text-center md:space-y-3  space-y-5  grid">
              <h2 className="md:text-lg  text-[18px]  font-semibold text-[#0b6ddc]">
                {item.listItem.title}
              </h2>

              <p>{item.listItem.description}</p>
              <div className="text-center">
                <Link
                  aria-label={item.listItem.label}
                  to={item.listItem.link}
                  className="text-[#1472E6] "
                >
                  read more...
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCards
