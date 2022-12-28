import { Link } from "gatsby"
import React from "react"

const Portfolios = props => {
  return (
    <div>
      <h1 className="text-center md:text-5xl text-2xl my-12 font-mono font-bold">
        Our Projects
      </h1>
      <div className="grid 2xl:grid-cols-3 440Screen:grid-cols-2 grid-cols-1 lg:px-44 sm:px-24 px-8 gap-16">
        {props.portfolio.map((i, idx) => (
          <div
            key={i.listItem.id}
            className="
            h-[70%]
            md:p-16
            sm:p-8
            p-2
            grid 
            justify-items-center 
             bg-blue-300 
             space-y-8 
             rounded-3xl 
             hover:duration-1000 
             hover:scale-105
             hover:ease-in-out"
          >
            <h1 className="lg:text-xl text-sm font-semibold text-white hover:text-blue-500 underline underline-offset-8">
              <Link to={i.listItem.link} target="_blank">
                {i.listItem.title}
              </Link>
            </h1>
            <img
              className="w-[100%] h-[50%] rounded-3xl object-cover object-top"
              src={i.listItem.img}
              alt="portfolio Images"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolios
