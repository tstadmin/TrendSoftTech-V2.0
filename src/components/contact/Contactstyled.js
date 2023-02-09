import tw, { styled } from "twin.macro"

export const Button = styled.button`
  ${tw`bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-1 text-white hover:text-blue-400  text-[16px]`}
`
export const ContactHanding = styled.h1`
  ${tw`text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[#913A1D] text-[16px] mt-4 font-semibold `}
`
export const ContactDiv = styled.div`
  ${tw`xl:flex  justify-evenly  px-8 md:mt-14 mt-5 sm:space-y-14 space-y-10 2xl:space-x-44  xl:space-y-0 lg:space-y-10 lg:space-x-2`}
`
export const ContactInfoDiv = styled.ul`
  ${tw`space-y-6 text-sm sm:text-lg`}
`
export const EmailDiv = styled.div`
  ${tw`sm:flex  grid sm:space-x-4`}
`
export const Image = styled.img`
  ${tw`text-4xl sm:w-10 h-14`}
`
export const EmailInfo = styled.div`
  ${tw`space-y-1`}
`

export const Info = styled.li`
  ${tw`sm:flex  grid sm:space-x-4 `}
`

export const AdderssInfo = styled.div`
  ${tw`space-y-1 sm:w-[550px] w-[300px]`}
`
export const Form = styled.form`
  ${tw`md:text-3xl text-lg `}
`
export const FormDiv = styled.div`
  ${tw`sm:grid sm:grid-cols-2 grid-cols-1  gap-16 sm:space-y-0 space-y-10`}
`
