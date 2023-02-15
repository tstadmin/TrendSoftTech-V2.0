import tw, { styled } from "twin.macro"


export const Header = styled.h1`
${tw`text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] mt-4 font-semibold text-[#913A1D] `}
  `

//------- Careers InfoCard page style Component  ------------

export const InfoCardDiv = styled.div`
  ${tw`mt-20 space-y-16 `}
`
export const InfoCards = styled.ul`
  ${tw`md:flex  justify-center md:space-x-10 md:px-0 px-8 md:space-y-0  space-y-6`}
`
export const CardDiv = styled.li`
  ${tw`space-y-4  hover:shadow-lg shadow-blue-100 hover:duration-500 cursor-pointer bg-black/5 hover:bg-blue-50    min-w-[20%] p-6`}
`
export const CardTitle = styled.h2`
  ${tw` text-[#346FB2] md:text-lg  text-sm `}
`
export const CardInfoDiv = styled.div`
  ${tw`space-y-2 text-sm font-Poppins `}
`
export const CardReadDiv = styled.div`
  ${tw`flex items-center text-[#1273EB] `}
`

//-------------- Requirement component page form  Careers component --------------------------------

export const Requirement = styled.div`
  ${tw`space-y-8 lg:px-52 sm:px-28 px-8  pt-8`}
`

export const RequirementDiv = styled.div`
  ${tw`space-y-3`}
`
export const RequirementIcon = styled.li`
  ${tw`flex gap-3`}
`
export const RequirementInfoDiv = styled.div`
  ${tw`space-y-3`}
`
export const RequirementInfoheading = styled.h2`
  ${tw`lg:text-2xl md:text-xl sm:text-lg text-base font-semibold font-mono`}
`
export const Description = styled.li`
  ${tw`font-serif`}
`
export const FormDiv = styled.div`
  ${tw`grid border border-black sm:justify-items-center space-y-8 p-7`}
`

export const FormHeading = styled.h3`
  ${tw`md:text-4xl text-2xl text-center font-semibold`}
`

export const Button = styled.button`
  ${tw`bg-blue-600 hover:bg-white font-medium mt-5 border-blue-400 w-32 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-2  text-white hover:text-blue-400 text-[16px]`}
`

export const InputDiv = styled.div`
  ${tw` md:w-[50vw] w-full `};
`
