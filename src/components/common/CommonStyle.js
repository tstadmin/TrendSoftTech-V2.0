import tw, { styled } from "twin.macro"

//-----BreadCrumb component  in Commer Folders-----

export const Image = styled.img`
  ${tw`relative w-[100%] lg:h-[50vh] md:h-[30vh] `}
`

export const BreadCrumbSubHeader = styled.h2`
  ${tw`flex  w-full  justify-center sm:space-x-6 font-Poppins space-x-2 lg:text-[20px]  text-[10px]  font-medium`}
`

export const BreadCrumbHeader = styled.h1`
  ${tw`lg:text-[52px]  sm:text-[22px] text-[10px] font-semibold font-mono`}
`

export const BreadCrumbInfo = styled.div`
  ${tw`absolute xl:top-[25%] lg:top-[25%] md:top-[21%] sm:top-[16%] top-[12%] w-full  text-center md:space-y-3 space-y-2`}
`
//-----Card component  in Commer Folders-----

//-----All  Commer style component  in HomePage Commer folder

export const Description = styled.h3`
  ${tw`text-lg font-Poppins text-[#454545]`}
`
export const Hyperlink = styled.h3`
  ${tw`text-lg font-normal text-blue-500 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4`}
`
