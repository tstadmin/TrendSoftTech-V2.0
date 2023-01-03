import tw, { styled } from "twin.macro"

//------- Careers InfoCard page style Component  ------------

export const PortfoloHeading = styled.h1`
  ${tw`text-center md:text-5xl text-2xl my-12  font-bold`}
`
export const PortfoloDiv = styled.div`
  ${tw`grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-44 sm:px-24 px-8 gap-16`}
`
export const PortfoloCard = styled.div`
  ${tw` hover:scale-105 sm:p-8 p-2 grid justify-items-center bg-blue-300 space-y-8  rounded-3xl  hover:duration-1000 hover:ease-in-out`}
`
export const CardTitle = styled.h1`
  ${tw`lg:text-xl text-sm font-semibold text-white hover:text-blue-500 underline underline-offset-8`}
`
export const Image = styled.img`
  ${tw`object-cover object-top  rounded-lg `}
`
