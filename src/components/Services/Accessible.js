import { Link } from "gatsby"
import React from "react"
import { DescriptionList, Title } from "./ServicesStyled"
import DocAnalysis from "../WebsiteAnalysis/DocAnalysis"
import AccessibilityAudits from "../common/AccessibilityAudits"
const Accessible = props => {
  const MyBackgroundImage = "/img/accessibilityForm/docaccesibility.svg"
  console.log(props)
  return (
    <div>
      <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#B8000C]">
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
      {props.data.wthreec ? (
        <>
          {props.data.wthreec?.map((item, idx) => (
            <div key={item.listItems.id}>
              <Title>{item.listItems.title}</Title>

              <div
                className="space-y-4 mt-5"
                dangerouslySetInnerHTML={{
                  __html: item.listItems.description,
                }}
              />
            </div>
          ))}
        </>
      ) : (
        ""
      )}

      <div>
        <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#B8000C] mt-8">
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
