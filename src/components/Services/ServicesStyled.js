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
export const CardHanding = styled.h1`
  ${tw`font-bold text-[#146ABA] sm:text-[22px] text-[20px]`}
`
export const CardReading = styled.h1`
  ${tw`text-blue-500 font-medium mt-4`}
`
export const CardDescription = styled.h1`
  ${tw`text-[#454545] text-[16px] font-serif`}
`

//--------- Services Development And Doc Accessibility component in Service page  --------------------------------

export const Description = styled.h1`
  ${tw`text-[16px] mt-2 font-Poppins `}
`
export const Title = styled.h1`
  ${tw`md:text-3xl font-mono sm:text-2xl text-xl font-semibold mt-7 text-[#146ABA] `}
`
export const PhasesTitle = styled.h1`
  ${tw`text-xl font-semibold mt-5 font-mono`}
`
export const PhasesDescription = styled.h1`
  ${tw`text-[16px] mt-2  font-Poppins`}
`
export const DescriptionList = styled.li`
  ${tw`mt-2 text-[16px]  ml-6 font-Poppins`}
`
//--------- Tabs component in Service page  --------------------------------
////540Screen:grid-cols-2
export const TabsDiv = styled.div`
  ${tw`grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center  gap-8 md:px-24 px-6 mt-24 mb-24`}
`

export const TabsHeading = styled.h1`
  ${tw`lg:text-lg  text-sm  font-semibold underline underline-offset-8 hover:text-blue-500 active:text-blue-500 cursor-pointer`}
  & 
    a[aria-current="page"] {
    color: #0b70e1 !important;
  }
`
