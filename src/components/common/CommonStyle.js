import tw, { styled } from "twin.macro"

//-----All  Commer style component  in HomePage Commer folder

export const Description = styled.h3`
  ${tw`text-lg font-normal`}
`

//-----BreadCrumb component  in Commer Folders-----

export const Image = styled.img`
  ${tw`relative w-[100vw] h-[60vh]`}
`
export const BreadCrumb_Header = styled.h1`
  ${tw`lg:text-[52px]  sm:text-[32px] text-[20px] font-semibold`}
`
export const BreadCrumb_SubHeader = styled.h2`
  ${tw`flex  w-full  justify-center space-x-6 lg:text-[20px]  text-[16px]  font-semibold`}
`
export const BreadCrumb_Info = styled.dev`
  ${tw`absolute xl:top-[35%] lg:top-[25%] md:top-[20%] sm:top-[20%] top-[14%] w-full  text-center md:space-y-3 space-y-2`}
`
//-----Card component  in Commer Folders-----
