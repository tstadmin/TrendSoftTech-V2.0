import { Link } from "gatsby"
import React from "react"
import { DescriptionList, Title } from "./ServicesStyled"
const Accessible = props => {
  const MyBackgroundImage = "/img/services/tabsIcons/closeuphandwheel.svg"
  return (
    <div>
      <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#913A1D]">
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
              <div className="md:flex grid lg:gap-20 gap-5 items-center p-4 rounded-3xl bg-white">
                <p className="text-[#0084FF] lg:text-[28px] md:text-[18px] text-[16px] lg:ml-10  ml-3  ">
                  Start with a free analysis of your website's accessibility.
                </p>

                <Link
                  to="/services/audit/"
                  className=" p-3   bg-blue-500 text-center text-white rounded-2xl w-[150px]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
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

              {item.listItems.list?.map((i, idx) => (
                <DescriptionList key={i.listItems.id}>
                  {i.listItems.description}
                </DescriptionList>
              ))}

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
