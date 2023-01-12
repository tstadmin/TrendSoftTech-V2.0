import { Link } from "gatsby"
import React from "react"

const Portfolios = props => {
  return (
    <div className=" mt-10 1920Screen:px-44 2xl:px-24 px-8 md:py-10 py-28 bg-blue-100">
      <div className="text-center space-y-2">
        <h2 className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-5xl sm:text-2xl text-lg ">
          Portfolio
        </h2>
        <h3>Our Works</h3>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {props.data.portfolios.map((item, index) => (
          <div className="relative mt-10 py-4 ">
            <img
              src={item.listItem.img}
              className="lg:h-[500px] md:h-[400px] h-[300px] md:w-[90%] w-full object-cover  object-left-top "
            />

            <div className="grid justify-center  lg:w-72 w-52 h-auto space-y-3 bg-white shadow-xl lg:p-5 p-2   md:right-0 540Screen:right-[25%] sm:right-[32%]  340Screen:right-[20%] right-12 absolute md:top-32  top-56  ">
              <h4 className="lg:text-lg  text-xs">{item.listItem.title}</h4>
              <span className="lg:text-lg  text-xs">{item.listItem.about}</span>
              <Link
                className="bg-blue-400 p-2 rounded-md text-center lg:text-lg  text-xs"
                to={item.listItem.link}
                target="_blank"
              >
                Expolre
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="relative mt-10 p-5 xl:ml-56 lg:ml-36 md:ml-20 ml-0">
        <div>
          <img
            src="/img/port/KtTexh.svg"
            className="lg:h-[500px] md:h-[400px] h-[300px]  w-full object-cover  object-left-top "
          />
        </div>

        <div className="grid justify-center md:w-72 w-52 h-auto space-y-3 bg-yellow-100 p-5 xl:-left-28 lg:-left-32 md:-left-24  sm:left-[32%] 540Screen:left-[30%] 440Screen:left-[23%] 340Screen:left-[18%] left-0 absolute md:top-32  top-52">
          <h2 className="lg:text-lg md:text-sm text-xs">KN Tech</h2>
          <span className="lg:text-lg md:text-sm text-xs">
            In today’s world, it’s not easy to get a well-paid job with a decent
            employer without putting ...
          </span>
          <Link className="bg-blue-400 p-2 rounded-md text-center lg:text-lg md:text-sm text-xs">
            Expolre
          </Link>
        </div>
      </div> */}
      {/* <div className="relative mt-10 p-5  ">
        <div>
          <img
            src="/img/port/Annapurna.svg"
            className="lg:h-[500px] md:h-[400px] h-[300px] md:w-[85%] w-full object-cover  object-left-top "
          />
        </div>

        <div className="grid justify-center  md:w-72 w-52 h-auto space-y-3 bg-yellow-100 p-5  xl:right-20 lg:right-8 md:right-0 540Screen:right-[25%] sm:right-[30%] 440Screen:right-[23%] 340Screen:right-[12%] right-0 absolute md:top-32  top-52  ">
          <h2 className="lg:text-lg md:text-sm text-xs">KN Tech</h2>
          <span className="lg:text-lg md:text-sm text-xs">
            In today’s world, it’s not easy to get a well-paid job with a decent
            employer without putting ...
          </span>
          <Link className="bg-blue-400 p-2 rounded-md text-center lg:text-lg md:text-sm text-xs">
            Expolre
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default Portfolios
