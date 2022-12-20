import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"

const BreadCrumb = props => {
  const Header = tw.h1`lg:text-[52px]  sm:text-[32px] text-[20px] font-semibold`
  const Subheader = tw.div`flex  w-full  justify-center space-x-6 lg:text-[20px]  text-[16px]  font-semibold`
  const Info = tw.div`absolute xl:top-[35%] lg:top-[25%] md:top-[20%] sm:top-[20%] top-[14%] w-full  text-center md:space-y-3 space-y-2`
  const Images = tw.div`relative min-w-full `
  return (
    <div>
      <div>
        {/* <img
          src={props.img}
          className="relative min-w-full "
          alt="BreadCrumb about images"
        /> */}
        <Images>
          <img src={props.img} width="100%" />
        </Images>
        <Info>
          <Header>{props.title}</Header>
          <Subheader>
            <Link to="/">
              {" "}
              <h1>Trendsoft Tech</h1>
            </Link>

            <h1>/</h1>
            <h1>{props.title}</h1>
          </Subheader>
        </Info>
      </div>
    </div>
  )
}

export default BreadCrumb
