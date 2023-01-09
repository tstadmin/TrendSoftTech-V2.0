import { Link } from "gatsby"
import React from "react"
import {
  PortfoloHeading,
  PortfoloDiv,
  PortfoloCard,
  CardTitle,
  Image,
} from "./PortfolioStyled"
const Portfolios = props => {
  return (
    // <div>
    //   <PortfoloHeading>{props.portfolio.title}</PortfoloHeading>
    //   <PortfoloDiv>
    //     {props.portfolio.list?.map((i, idx) => (
    //       <PortfoloCard key={i.listItem.id}>
    //         <CardTitle>
    //           <Link to={i.listItem.link} target="_blank">
    //             {i.listItem.title}
    //           </Link>
    //         </CardTitle>
    //         <Image src={i.listItem.img} width="250px" alt={i.listItem.alt} />
    //       </PortfoloCard>
    //     ))}
    //   </PortfoloDiv>
    // </div>
    <div className=" mt-20 p-5 2xl:px-24  bg-blue-200">
      <div className="text-center">
        <h1>Portfolio</h1>
        <h3>Our Works</h3>
      </div>

      <div className="relative mt-10 p-5  ">
        <div>
          <img
            src="/img/port/uadtree.svg"
            className="lg:h-[500px] md:h-[400px] h-[300px] md:w-[85%] w-full object-cover  object-left-top "
          />
        </div>
        {/* <div className="bg-black/30 absolute h-[400px] w-[600px] right-64  top-32"></div> */}
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
      </div>

      <div className="relative mt-10 p-5 xl:ml-56 lg:ml-36 md:ml-20 ml-0">
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
      </div>
      <div className="relative mt-10 p-5  ">
        <div>
          <img
            src="/img/port/Annapurna.svg"
            className="lg:h-[500px] md:h-[400px] h-[300px] md:w-[85%] w-full object-cover  object-left-top "
          />
        </div>
        {/* <div className="bg-black/30 absolute h-[400px] w-[600px] right-64  top-32"></div> */}
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
      </div>
    </div>
  )
}

export default Portfolios
