import tw, { styled } from "twin.macro"
//-----BreadCrumb component  in Commer Folders-----

export const Image = styled.img`
  ${tw`relative w-[100%] lg:h-[50vh] md:h-[30vh]  `}
`

export const BreadCrumInfo = styled.div`
  ${tw`absolute 2xl:top-[40%] top-[35%] w-full  text-center`}
`

export const BreadCrumbHeader = styled.div`
  ${tw`lg:text-5xl md:text-3xl font-semibold `}
`
//-----Grow Your Businnes component  in Commer Folders-----

export const GrowBusinnes = styled.div`
  ${tw`bg-blue-400/25  border border-blue-500  rounded-md p-12 space-y-6  px-12`}
`
export const GrowBusinnesHeading = styled.h2`
  ${tw`text-2xl`}
`
//-----Brochure component  in Commer Folders-----

export const BrochureDiv = styled.div`
  ${tw`bg-blue-400/25 border border-blue-500 text-center space-y-6 p-6 rounded-lg px-12`}
`
export const BrochuresHeading = styled.h2`
  ${tw`text-2xl`}
`

//-----All  Commer style component  in HomePage Commer folder

export const Hyperlink = styled.p`
  ${tw`text-[#1472E6] hover:text-orange-500 hover:underline hover:underline-offset-4`}
`
