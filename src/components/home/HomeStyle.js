import tw, { styled } from "twin.macro"

//-----All  Commer style component  in HomePage -- Home folder --------------------------------
export const Title = styled.h1`
  ${tw`sm:text-lg text-sm text-blue-500 font-semibold`}
`
export const SubTitle = styled.h2`
  ${tw`sm:text-[36px] text-xl font-bold`}
`
export const Description = styled.h6`
  ${tw`text-lg font-normal`}
`
export const Button = styled.button`
  ${tw`bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border hover:duration-700  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text-[16px]`}
`

///  ----- Banner component in HomePage Home folder--------------------------------

// export const BannerComponent = styled.div`
//   ${tw`flex relative shadow-2xl shadow-black/40`}
// `
// export const Banner_Info = styled.div`
//   ${tw`space-y-14  text-white py-24 2xl:w-[60vw]  2xl:h-[100vh] lg:w-[60vw]  lg:h-[95vh] md:h-[80vh] h-[80vh] sm:pl-20 lg:pl-48 pl-8 lg:pt-48`}
// `
// export const Banner_Button = styled.div`
//   ${tw`text-2xl  hover:bg-white   hover:duration-700  text-white hover:text-blue-500  font-mono bg-blue-500 font-semibold duration-75  px-14 py-2 mb-1 rounded-full`}
// `
// export const Banner_Header = styled.h1`
//   ${tw`2xl:text-8xl xl:text-7xl md:text-5xl sm:text-6xl text-4xl  font-bold font-mono`}
// `
// export const Banner_subHeader = styled.h2`
//   ${tw`2xl:text-3xl md:text-2xl text-xl font-normal font-mono`}
// `
// export const Banner_Iamge = styled.Div`
//   ${tw`absolute -z-20`}
// `

///  ----- AboutOutCompany component in HomePage Home folder--------------------------------

export const AboutOur = styled.div`
  ${tw`lg:flex grid mt-24 2xl:space-x-60 xl:space-x-40 lg:space-x-28 md:space-y-20 space-y-10  justify-center 2xl:px-48 lg:px-20 md:px-20  px-8`}
`
export const AboutOurInfo = styled.div`
  ${tw`space-y-5 relative`}
`
export const AbourtDotImages = styled.div`
  ${tw`absolute 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-24  left-20 2xl:-top-3 xl:-top-3 lg:top-2 md:-top-3 sm:-top-7  top-0

`}
`
export const AboutOurImage = styled.img`
  ${tw`2xl:w-[500px] xl:w-[500px] lg:w-[280px]`}
`
export const AboutOurH1 = styled.h1`
  ${tw`text-[16px] from-neutral-400`}
`
export const AboutOurH2 = styled.h2`
  ${tw`2xl:text-xl lg:text-xl text-sm sm:text-lg font-bold  text-blue-500`}
`

export const AboutOurDescription = styled.p`
  ${tw`2xl:text-[36px] lg:text-[36px] md:text-[36px] text-[22px] font-bold`}
`
export const AboutOurDotImage = styled.div`
  ${tw`absolute 2xl:left-28 xl:left-28 lg:left-28 md:left-28 sm:left-24  left-20 2xl:-top-3 xl:-top-3 lg:top-2 md:-top-3 sm:-top-7  top-0`}
`

///  ----- Services  provide component in HomePage  Home folder--------------------------------

export const Services = styled.div`
  ${tw`text-center mt-24`}
`
export const ServicesTitleDiv = styled.div`
  ${tw`text-center mb-16`}
`
export const ServicesTitle = styled.h1`
  ${tw`md:text-lg text-sm font-semibold text-blue-500`}
`
export const ServicesSubTitle = styled.p`
  ${tw`md:text-[36px] text-xl font-bold `}
`
export const ServicesProvideCard = styled.div`
  ${tw`xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2  grid grid-cols-1 gap-5 justify-items-center 2xl:px-48 xl:px-28 lg:px-16  px-8`}
`

///  ----- Accessibility Services component in HomePage Home folder--------------------------------

export const Accessibility_Services = styled.div`
  ${tw`text-center mb-16 mt-24`}
`
export const Accessibility_Card = styled.div`
  ${tw`lg:flex lg:justify-items-center  grid gap-7   2xl:px-48 xl:px-32 lg:px-14 px-8`}
`
export const Accessibility_CardInfo = styled.div`
  ${tw`flex hover:duration-700 md:space-x-11 space-x-5 shadow-2xl   xl:min-w-[500px]  min-h-[170px] lg:min-w-[460px]  p-7  shadow-blue-100 hover:shadow-none duration-1000 cursor-pointer  hover:bg-blue-50`}
`
export const Accessibility_CardTitle = styled.p`
  ${tw`xl:text-3xl md:text-3xl  text-xl font-semibold`}
`
export const Accessibility_Info = styled.div`
  ${tw`xl:text-3xl md:text-3xl  text-xl font-semibold`}
`

export const Accessibility_Image = styled.img`
  ${tw`2xl:w-[85px] lg:w-[85px] md:w-[80px]  w-[50px] 2xl:h-[85px] lg:h-[85px] md:h-[85px] h-[55px]`}
`

///  ----- Counter component in HomePage Home folder--------------------------------

export const Counte = styled.div`
  ${tw`md:flex md:justify-center grid justify-items-center gap-24 md:gap-56  p-6 bg-white `}
`
export const Counter_Number = styled.h1`
  ${tw`text-[50px] font-bold text-blue-500`}
`
export const Counter_Description = styled.h6`
  ${tw`md:text-[20px] font-[400] font-semibold font-mono `}
`
///  ----- ContactUs 24/7 Banner component in HomePage Home  folder--------------------------------
export const Contact = styled.div`
  ${tw`lg:flex md:grid justify-center w-full  bg-blue-100 gap-24 p-10 items-center`}
`

export const Contact_Info = styled.div`
  ${tw`space-y-8 text-center`}
`
export const Contact_Description = styled.h6`
  ${tw`text-[20px] font-[400] font-mono`}
`
export const Contact_Header = styled.h1`
  ${tw`text-[36px] font-bold text-black`}
`

///  ----- Working Process component in HomePage Home folder--------------------------------

export const Working_Process = styled.div`
  ${tw`lg:flex justify-center gap-4 px-8 `}
`
export const Working_Description = styled.p`
  ${tw`text-2xl font-semibold lg:text-4xl `}
`
export const Working_CardNumber = styled.p`
  ${tw`text-5xl text-blue-600 font-semibold `}
`
export const Working_CardTitle = styled.p`
  ${tw`lg:text-3xl  md:text-xl  font-semibold `}
`
export const Working_Card = styled.div`
  ${tw`border border-blue-400 min-h-full p-8 rounded-md space-y-4 shadow-sm shadow-blue-400 hover:bg-black/5  hover:border-none hover:duration-[2s]`}
`

export const Working_Cards = styled.div`
  ${tw`mt-16 md:grid md:grid-cols-2 gap-4 w-full lg:w-[60%] md:w-full`}
`

///  ----- Footers component in HomePage Home  folder--------------------------------

export const Foote = styled.div`
  ${tw`mt-36`}
`
export const FooterInfo = styled.div`
  ${tw`md:flex sm:grid  px-8 xl:px-12 md:px-0 md:space-y-0 space-y-12 md:space-x-6 lg:justify-center md:justify-center sm:justify-center my-20`}
`
export const Footer_Title = styled.p`
  ${tw`text-[34px]   font-semibold text-blue-600`}
`
export const Footer_TrendInfo = styled.div`
  ${tw` basis-1/3`}
`

export const Footer_Info = styled.div`
  ${tw`space-y-3 basis-1/4`}
`
export const Footer_IconLogo = styled.div`
  ${tw`flex mt-4 gap-5 `}
`
export const Footer_Hr = styled.div`
  ${tw`border-black border`}
`
export const Footer_IconStyles = styled.div`
  ${tw`text-blue-500 text-center hover:text-white  bg-white hover:cursor-pointer hover:bg-blue-600 rounded-full w-9 h-9 p-2 shadow-xl`}
`
export const Footer_IconInfo = styled.div`
  ${tw`flex gap-2 text-start`}
`
export const IconSize = styled.div`
  ${tw`text-2xl`}
`
export const Footer_Ui = styled.p`
  ${tw` space-y-3 text-lg font-[400]`}
`
