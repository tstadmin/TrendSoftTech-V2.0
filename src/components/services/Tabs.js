import React from "react"

import tabsImage from "../../../static/img/services/Services_1.svg"

// <-- tabsIcons -->

import icon1 from "../../../static/img/services/tabsIcons/Accessibility.svg"
import icon2 from "../../../static/img/services/tabsIcons/EcommerceDevelopment.svg"
import icon3 from "../../../static/img/services/tabsIcons/MobileDevelopment.svg"
import icon4 from "../../../static/img/services/tabsIcons/ProductDevelopment.svg"
import icon5 from "../../../static/img/services/tabsIcons/Testing.svg"
import icon6 from "../../../static/img/services/tabsIcons/UiUXDesign.svg"
import icon7 from "../../../static/img/services/tabsIcons/WebDevelopment.svg"

const tabs = () => {
  return (
    <div className="bg-black relative ">
      <img src={tabsImage} alt="tabs-img" />
      <div className="">
        <img
          className="absolute top-[14%] left-[2.8%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon1}
          alt=""
        />
        <img
          className="absolute top-[13%] left-[8.7%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon2}
          alt=""
        />
        <img
          className="absolute top-[15%] left-[14.8%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon3}
          alt=""
        />
        <img
          className="absolute top-[38%] left-[18%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon4}
          alt=""
        />
        <img
          className="absolute top-[69%] left-[16.8%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon5}
          alt=""
        />
        <img
          className="absolute top-[81%] left-[11.6%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon6}
          alt=""
        />
        <img
          className="absolute top-[70%] left-[6%] w-6 hover:scale-150 hover:duration-700 hover:ease-in-out hover:cursor-pointer"
          src={icon7}
          alt=""
        />
      </div>
    </div>
  )
}

export default tabs
