import tw, { styled } from "twin.macro"

//------- Service Cards page in Service component  --------------------------------

export const ServiceCardDiv = styled.div`
  ${tw` 2xl:px-52 lg:px-36 px-8`}
`
export const ServiceCard = styled.ul`
  ${tw`grid md:grid-cols-2 grid-cols-1 justify-items-center lg:px-0 sm:px-12 gap-8 mt-24`}
`
export const ServiceCardInfo = styled.li`
  ${tw`lg:min-w-[60%]  min-w-[60%] duration-500 bg-blue-50 hover:border-0 rounded-md hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/50 hover:cursor-pointer hover:scale-105 hover:ease-in-out`}
`
//---------  Cards component in Service page  --------------------------------

export const Cards = styled.div`
  ${tw`space-y-4 p-8`}
`
export const CardHanding = styled.h2`
  ${tw` text-[#0B70E1] `}
`
export const CardReading = styled.p`
  ${tw`text-blue-500  mt-4 hover:text-orange-500`}
`
export const CardDescription = styled.h1`
  ${tw`text-[#454545] text-[16px] font-serif`}
`

//--------- Services Development And Doc Accessibility component in Service page  --------------------------------

export const Description = styled.p`
  ${tw`mt-5`}
`
export const Title = styled.h2`
  ${tw` text-[#0B70E1] mt-5  md:text-xl sm:text-lg text-base `}
`
export const PhasesTitle = styled.h3`
  ${tw`mt-5  md:text-lg   text-sm `}
`
export const PhasesDescription = styled.p`
  ${tw`mt-2 `}
`
export const DescriptionList = styled.li`
  ${tw`mt-2 md:text-[16px] text-[14px] ml-6 font-Poppins`}
`
//--------- Tabs component in Service page  --------------------------------
////540Screen:grid-cols-2
export const TabsDiv = styled.div`
  ${tw`grid xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center  gap-8 md:px-24 px-6 mt-24 mb-24`}
`

export const TabsHeading = styled.h2`
  ${tw` underline underline-offset-8 hover:text-blue-500 active:text-blue-500 cursor-pointer hover:scale-125 hover:duration-700`}
  & 
    a[aria-current="page"] {
    color: #0b70e1 !important;
  }
`
export const PortfoliosButton = styled.div`
  .button {
    position: relative;
    text-decoration: none;
    z-index: 0;
    -webkit-transition: border-color 0.35s ease, background 0.35s ease;
    transition: border-color 0.35s ease, background 0.35s ease;
  }

  .button:before {
    background-color: white;
    content: "";
    display: block;
    position: absolute;
    top: 0%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: all 0.35s ease;
    transition: all 1.75em ease;
  }

  .button:hover:before {
    top: 100%;
  }

  .button:hover {
    color: white;
    transition: 0.25s;
  }

  .button:after {
    position: absolute;
    right: 2.34375rem;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(50%);
    -ms-transform: translateY(-50%) translateX(50%);
    transform: translateY(-50%) translateX(50%);
    font-size: 1.75em;
  }

  .button {
    padding: 10px;
  }
`

///---- Services development style component ------

export const DevelopmentDiv = styled.div`
  ${tw` xl:flex mt-10 justify-center  xl:space-x-14 2xl:px-48  sm:px-8 px-12 `}
`
export const DevelopmentLayout = styled.div`
  ${tw`mt-8 space-y-10`}
`
export const PortfolioLink = styled.a`
  ${tw`hover:bg-blue-500 border-2 border-blue-500  duration-700  p-3 rounded-none flex space-x-3 text-2xl justify-center `}
`
///------- Tabs style component ----------------

export const TabButton = styled.li`
  .Tab a[aria-current="page"] {
    color: #0b70e1 !important;
  }
  .Tab {
    position: relative;
    text-decoration: none;
    z-index: 0;
    -webkit-transition: border-color 0.35s ease, background 0.35s ease;
    transition: border-color 0.35s ease, background 0.35s ease;
  }

  .Tab:before {
    background-color: white;
    content: "";
    display: block;
    position: absolute;
    top: 0%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: all 0.35s ease;
    transition: all 1.75em ease;
  }

  .Tab:hover:before {
    top: 100%;
  }

  .Tab:hover {
    color: white;
    transition: 0.25s;
  }

  .Tab:after {
    position: absolute;
    right: 2.34375rem;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(50%);
    -ms-transform: translateY(-50%) translateX(50%);
    transform: translateY(-50%) translateX(50%);
    font-size: 1.75em;
  }

  .Tab {
    padding: 10px;
  }
`
