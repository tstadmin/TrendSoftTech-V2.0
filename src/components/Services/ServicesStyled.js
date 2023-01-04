import tw, { styled } from "twin.macro"

//------- Service Cards page in Service component  --------------------------------

export const ServiceCardDiv = styled.div`
  ${tw` 2xl:px-52 lg:px-36 px-8`}
`
export const ServiceCard = styled.div`
  ${tw`grid md:grid-cols-2 grid-cols-1 justify-items-center lg:px-0 sm:px-12 gap-8 mt-24`}
`
export const ServiceCardInfo = styled.div`
  ${tw`lg:min-w-[60%]  min-w-[60%] duration-500 bg-blue-50 hover:border-0 rounded-md hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/50 hover:cursor-pointer hover:scale-105 hover:ease-in-out`}
`
//---------  Cards component in Service page  --------------------------------

export const Cards = styled.div`
  ${tw`space-y-4 p-8`}
`
export const CardHanding = styled.h2`
  ${tw` text-[#0B70E1] `}
`
export const CardReading = styled.p`
  ${tw`text-blue-500  mt-4 hover:text-orange-500`}
`
export const CardDescription = styled.h1`
  ${tw`text-[#454545] text-[16px] font-serif`}
`

//--------- Services Development And Doc Accessibility component in Service page  --------------------------------

export const Description = styled.p`
  ${tw`mt-5`}
`
export const Title = styled.h3`
  ${tw` text-[#0B70E1] mt-5 `}
`
export const PhasesTitle = styled.h2`
  ${tw`mt-5`}
`
export const PhasesDescription = styled.p`
  ${tw`mt-2 `}
`
export const DescriptionList = styled.li`
  ${tw`mt-2 text-[16px]  ml-6 font-Poppins`}
`
//--------- Tabs component in Service page  --------------------------------
////540Screen:grid-cols-2
export const TabsDiv = styled.div`
  ${tw`grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center  gap-8 md:px-24 px-6 mt-24 mb-24`}
`

export const TabsHeading = styled.h2`
  ${tw` underline underline-offset-8 hover:text-blue-500 active:text-blue-500 cursor-pointer hover:scale-125 hover:duration-700`}
  & 
    a[aria-current="page"] {
    color: #0b70e1 !important;
  }
`
