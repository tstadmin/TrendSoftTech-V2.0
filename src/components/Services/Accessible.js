import { Link } from "gatsby"
import React from "react"
import { DescriptionList, Title } from "./ServicesStyled"
import DocAnalysis from "../WebsiteAnalysis/DocAnalysis"
import AccessibilityAudits from "../common/AccessibilityAudits"
const Accessible = props => {
  const MyBackgroundImage = "/img/services/tabsIcons/closeuphandwheel.svg"
  console.log(props)
  return (
    <div>
      <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#913A1D]">
        {props.title}
      </h1>
      <div
        className="space-y-4 mt-5"
        dangerouslySetInnerHTML={{ __html: props.data.description }}
      />
      {props.data.accesibilityList ? (
        <ul style={{ listStyleType: "disc" }} className="space-y-2 mt-2">
          {props.data.accesibilityList?.map((i, idx) => (
            <li
              className="`mt-2 md:text-[16px] text-[14px] ml-6 font-Poppins"
              key={i.listItems.id}
            >
              {i.listItems.description}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}

      {/* <div className="w-[100%]  bg-[#0084FF]  h-[280px] mt-5">
        <div
          className="  bg-cover  w-full bg-no-repeat  "
          style={{
            backgroundImage: `url(${MyBackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="w-full h-[280px] items-center grid justify-self-center">
            <div className="md:flex    justify-center items-center px-2">
              <div className="md:flex grid lg:gap-20 gap-5 items-center p-4 rounded-3xl bg-white">
                <p className="text-[#0084FF] lg:text-[28px] md:text-[18px] text-[16px] lg:ml-10  ml-3  ">
                  Start with an accessibility audit of a website
                </p>

                <Link
                  to={props.data.analysisLink}
                  aria-label="Get Started with an accessibility audit of a website "
                  className="bg-[#0b2d78] hover:text-[#f9761f] focus:text-[#f9761f] p-2 rounded-md text-center lg:text-lg  text-xs text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#913A1D] mt-8">
          Free WCAG 2.1 AA Compliance Summary of Your Website
        </h1>
        {props.data.docaccessibility ? <DocAnalysis /> : ""}
        {props.data.webaccessibility ? <AccessibilityAudits /> : ""}
      </div>

      {props.data.list ? (
        <>
          {props.data.list?.map((item, idx) => (
            <div key={item.listItems.id}>
              <Title>{item.listItems.title}</Title>

              <div
                className="space-y-4 mt-5"
                dangerouslySetInnerHTML={{
                  __html: item.listItems.description,
                }}
              />
              {item.listItems.list ? (
                <ul style={{ listStyleType: "disc" }}>
                  {item.listItems.list?.map((i, idx) => (
                    <li
                      className="`mt-2 md:text-[16px] text-[14px] ml-6 font-Poppins"
                      key={i.listItems.id}
                    >
                      {i.listItems.description}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}

              {item.listItems.data ? (
                <div
                  className="space-y-4 mt-5"
                  dangerouslySetInnerHTML={{ __html: item.listItems.data }}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default Accessible
