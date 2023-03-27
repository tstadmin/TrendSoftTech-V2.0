import { Link } from "gatsby"
import React from "react"
import { PhasesTitle, Title } from "./ServicesStyled"

const Development = props => {
  const MyBackgroundImage = "/img/services/tabsIcons/closeuphandwheel.svg"

  return (
    <div>
      <div>
        <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] text-[#913A1D] font-semibold">
          {props.title}
        </h1>

        <div
          className="space-y-4 mt-5"
          dangerouslySetInnerHTML={{ __html: props.data.description }}
        />
        <div className="w-[100%]  bg-[#0084FF]  h-[280px] mt-5">
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
                <div className="md:flex grid lg:gap-24 gap-5 items-center p-4 rounded-3xl bg-white">
                  <p className="text-[#0084FF] text-[22px] lg:ml-20  ml-3  ">
                    Start with a free analysis of your website's accessibility.
                  </p>

                  <Link
                    to="/services/audit/"
                    aria-label="  Start with a free analysis of your website's accessibility Get Started"
                    className=" p-3   bg-blue-500 text-center text-white rounded-2xl w-[150px]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {props.data.title ? <Title>{props.data.title}</Title> : ""}
        {props.data.test ? (
          <>
            {props.data.test?.map((item, idx) => (
              <div key={item.listItems.id}>
                <PhasesTitle>{item.listItems.title}</PhasesTitle>

                <div
                  className="space-y-4 mt-2"
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

        {props.data.list?.map((item, idx) => (
          <div key={item.listItems.id}>
            <Title>{item.listItems.title}</Title>

            <div
              className="space-y-4 mt-5"
              dangerouslySetInnerHTML={{ __html: item.listItems.description }}
            />

            {item.listItems.list?.map((i, idx) => (
              <div key={i.listItems.id}>
                <PhasesTitle>{i.listItems.title}</PhasesTitle>
                <div
                  className="space-y-4 mt-2 "
                  dangerouslySetInnerHTML={{ __html: i.listItems.description }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Development
