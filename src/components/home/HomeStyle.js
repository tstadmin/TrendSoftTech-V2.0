import tw, { styled } from "twin.macro"
//-----All  Commer style component  in HomePage -- Home folder --------------------------------
export const Title = styled.h2`
  ${tw` text-[#913A1D]`}
`
// export const SubTitle = styled.h2`
//   ${tw` text-[#0B70E1] md:text-3xl text-xl   `}
// `
export const Description = styled.p`
  ${tw`text-[16px] text-[#454545]  `}
`
export const Button = styled.a`
  ${tw`bg-[#0b2d78] focus:bg-white  hover:bg-white font-medium  border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-3 text-white min-w-[122px] text-[16px] `}
`

// export const Button = styled.button`
//   ${tw`bg-blue-600  hover:bg-white font-medium border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]`}
// `

///  ----- Banner component in HomePage Home folder--------------------------------

export const BannerDiv = styled.div`
  ${tw`flex relative`}
`
export const BannerInfoDiv = styled.div`
  ${tw`absolute z-20 sm:space-y-14 space-y-4  lg:pl-8 2xl:pl-24  pl-8 lg:pt-40 pt-12 h-[100vh] w-[100vw] `}
`

export const BannerSubTitle = styled.p`
  ${tw`2xl:text-2xl sm:text-xl text-sm font-normal text-white `}
`

export const BannerImage = styled.img`
  ${tw`object-cover `}
`

///  ----- AboutOutCompany component in HomePage Home folder--------------------------------

// export const AboutOur = styled.div`
//   ${tw`lg:flex grid sm:mt-16 mt-32 2xl:space-x-60 xl:space-x-40 lg:space-x-16 md:space-y-20 space-y-10  justify-center 2xl:px-48 md:px-12  px-8`}
// `

export const AboutOurInfo = styled.div`
  ${tw`space-y-5 relative`}
`
export const AbourtDotImages = styled.div`
  ${tw`absolute 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-24  left-20 2xl:-top-3 xl:-top-3 lg:top-2 md:-top-3 sm:-top-7  top-0

`}
`
// export const AboutOurImage = styled.img`
//   ${tw`2xl:w-[500px] xl:w-[500px] lg:w-[280px]`}
// `
export const AboutOurH1 = styled.h2`
  ${tw`text-[16px] from-neutral-400 `}
`
// export const AboutOurTitle = styled.h2`
//   ${tw`text-[#de1926]`}
// `

export const AboutOurSubTitle = styled.h3`
  ${tw` text-[#0B70E1]`}
`
// export const AboutOurDotImage = styled.div`
//   ${tw`absolute 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-24  left-20 2xl:-top-3 xl:-top-3 lg:top-2 md:-top-3 sm:-top-7  top-0`}
// `

///  ----- AboutOutCompany component in HomePage Home folder--------------------------------

///  ----- Services  provide component in HomePage  Home folder--------------------------------

export const Services = styled.div`
  ${tw`text-center  bg-blue-50 py-8`}
`
export const ServicesTitleDiv = styled.div`
  ${tw`text-center mb-8 `}
`
// export const ServicesTitle = styled.h2`
//   ${tw`text-[#de1926]`}
// `
export const ServicesSubTitle = styled.h3`
  ${tw`text-[#0B70E1] `}
`
export const ServicesProvideCard = styled.ul`
  ${tw`xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2  grid grid-cols-1 gap-5 justify-items-center 2xl:px-24  md:px-16 px-8`}
`

///  ----- Accessibility Services component in HomePage Home folder--------------------------------

export const Accessibility = styled.div`
  ${tw`text-center mb-16 mt-16 space-y-4`}
`
export const AccessibilityCard = styled.ul`
  ${tw`lg:flex lg:justify-items-center  grid gap-7    2xl:px-48 xl:px-32 lg:px-14 px-8`}
`
// export const AccessibilityCardInfo = styled.li`
//   ${tw`flex hover:duration-700 md:space-x-11 space-x-5 shadow-2xl   xl:min-w-[500px]  min-h-[170px] lg:min-w-[460px]  p-7  shadow-blue-100 hover:shadow-none duration-1000 cursor-pointer  hover:bg-blue-50`}
// `
export const AccessibilityCardTitle = styled.h3`
  ${tw`text-[#0B70E1] md:text-3xl text-xl  `}
`
export const AccessibilityInfo = styled.div`
  ${tw`xl:text-3xl md:text-3xl  space-y-2 text-xl font-Poppins`}
`

export const AccessibilityImage = styled.img`
  ${tw`2xl:w-[85px] lg:w-[85px] md:w-[80px] w-[50px]  md:h-[85px] h-[55px]`}
`

///  ----- Counter component in HomePage Home folder--------------------------------

export const Counte = styled.ul`
  ${tw` sm:flex md:justify-center grid justify-items-center gap-24 md:gap-40  p-6 bg-white `}
`
export const CounterNumber = styled.p`
  ${tw`text-[50px] font-bold text-[#0B70E1]`}
`
export const CounterDescription = styled.p`
  ${tw`md:text-[20px] text-[#913A1D] font-[400] font-semibold mt-6 `}
`
///  ----- ContactUs 24/7 Banner component in HomePage Home  folder--------------------------------
export const Contact = styled.div`
  ${tw` 2xl:px-48  xl:px-28 lg:px-14 px-8  `}
`
export const ContactDiv = styled.div`
  ${tw`bg-blue-100 xl:flex grid  xl:items-center justify-items-center rounded-2xl`}
`
export const ContactInfo = styled.div`
  ${tw`space-y-8 text-center p-9 `}
`
export const ContactDescription = styled.p`
  ${tw`sm:text-[20px] text-base font-[400]  `}
`
export const ContactHeader = styled.h2`
  ${tw`text-[36px]  font-semibold text-black`}
`

///  ----- Working Process component in HomePage Home folder--------------------------------

export const Working = styled.div`
  ${tw`lg:flex justify-center gap-4  px-8 `}
`
export const WorkingDescription = styled.h2`
  ${tw`sm:text-lg text-sm font-semibold text-black lg:text-xl font-Poppins text-[#913A1D] md:mt-20 mt-10 `}
`
export const WorkingCardNumber = styled.h3`
  ${tw`text-orange-400 `}
`
export const WorkingCardTitle = styled.h3`
  ${tw`  text-[#0b6ddc]  `}
`
export const WorkingCard = styled.li`
  ${tw`border border-blue-400 min-h-full p-8 rounded-md space-y-4 shadow-sm shadow-blue-400 hover:bg-black/5  `}
`

export const WorkingCards = styled.ul`
  ${tw`mt-16 md:grid md:grid-cols-2 gap-4 w-full lg:w-[60%] md:w-full md:space-y-0 space-y-6`}
`

///  ----- Footers component in HomePage Home  folder--------------------------------

export const FooterDiv = styled.div`
  ${tw` bg-blue-50/80 py-2 mt-14 `}
`
export const FooterInfo = styled.div`
  ${tw`md:flex sm:grid  px-8 xl:px-12  md:space-y-0 space-y-12 md:space-x-6 lg:justify-center md:justify-center sm:justify-center my-20 mt-8 `}
`
export const FooterTitle = styled.h2`
  ${tw` md:text-lg  text-sm text-[#1a71d4] `}
`
export const FooterTrendInfo = styled.div`
  ${tw` basis-1/3 `}
`

export const FooterInfoDiv = styled.div`
  ${tw`space-y-3 basis-1/4 mt-5 `}
`
export const FooterIconInfo = styled.div`
  ${tw`flex mt-4 gap-5 `}
`
export const FooterHr = styled.div`
  ${tw`border-black border`}
`
export const FooterIconStyles = styled.div`
  ${tw`text-blue-500 text-center hover:text-white focus:text-white shadow-black/50 border-black/10  bg-white focus:bg-blue-600 hover:cursor-pointer hover:bg-blue-600 focus:bg-blue-600  rounded-full w-9 h-9 p-2 shadow-xl`}
`
export const FooterIconLogo = styled.div`
  ${tw`flex gap-2 text-start mt-8`}
`
export const IconSize = styled.div`
  ${tw`text-2xl`}
`
// export const UL = styled.ul`
//   ${tw` space-y-3  `}
// `
