import tw, { styled } from "twin.macro"

//------- Careers InfoCard page style Component  ------------

export const InfoCardDiv = styled.div`
  ${tw`mt-20 space-y-16`}
`
export const CareersHanding = styled.h1`
  ${tw`text-center sm:text-6xl text-5xl font-semibold`}
`
export const InfoCards = styled.div`
  ${tw`md:flex  justify-center md:space-x-10 md:px-0 px-8 md:space-y-0  space-y-6`}
`
export const CardDiv = styled.div`
  ${tw`space-y-4  hover:shadow-lg shadow-blue-100 hover:duration-500 cursor-pointer bg-black/5 hover:bg-blue-50    min-w-[20%] p-6`}
`
export const CardTitle = styled.h1`
  ${tw`text-xl text-[#146ABA]  font-semibold`}
`
export const CardInfoDiv = styled.div`
  ${tw`space-y-2 text-sm  font-medium`}
`
export const CardReadDiv = styled.div`
  ${tw`flex items-center text-[#146ABA]`}
`

//-------------- Requirement component page form  Careers component --------------------------------

export const Requirement = styled.div`
  ${tw`space-y-8 lg:px-52 sm:px-28 px-8`}
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
export const RequirementInfoheading = styled.h1`
  ${tw`text-2xl font-semibold`}
`
export const FormDiv = styled.div`
  ${tw`grid border-2 border-black justify-items-center space-y-8 p-7`}
`

export const FormHeading = styled.div`
  ${tw`md:text-4xl text-2xl  font-semibold`}
`
export const Form = styled.div`
  ${tw`grid space-y-2 w-[50vw] `};
  & input {
    border: 1px solid;
    padding: 15px;
  }
`
export const Button = styled.button`
  ${tw`bg-blue-600 hover:bg-white font-medium mt-5 border-blue-400 w-32 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-2  text-white hover:text-blue-400 text-[16px]`}
`
