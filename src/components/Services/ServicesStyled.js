import tw, { styled } from "twin.macro"

//------- Service Cards page in Service component  --------------------------------

export const ServiceCard = styled.div`
  ${tw`grid sm:grid-cols-2 justify-items-center lg:px-0 sm:px-12 px-8  gap-8 mt-24`}
`
export const ServiceCardInfo = styled.div`
  ${tw`lg:w-[50%] min-w-[60%] duration-500 bg-blue-50 hover:border-0 rounded-md hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/50 hover:cursor-pointer hover:scale-105 hover:ease-in-out`}
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
  ${tw`text-[#454545] text-[16px]`}
`

//--------- Services Development And Doc Accessibility component in Service page  --------------------------------

export const Description = styled.h1`
  ${tw`text-[16px] mt-2 `}
`
export const Title = styled.h1`
  ${tw`text-3xl font-semibold mt-7 `}
`
export const PhasesTitle = styled.h1`
  ${tw`text-xl font-semibold mt-5`}
`
export const PhasesDescription = styled.h1`
  ${tw`text-[16px] mt-2`}
`
export const DescriptionList = styled.li`
  ${tw`mt-2 text-[16px]  ml-6`}
`
