import { Center } from "@mantine/core"
import React from "react"
import "../Services/AccessibleStyle.css"
const AnalysisInfo = () => {
  return (
    <div className="access bg-blue-600 rounded-md">
      <div className="space-y-8 p-5 lg:h-auto 440Screen:h-[500px]  ">
        <div>
          <h2 className="text-white font-semibold mt-5  md:text-xl sm:text-lg text-base ">
            How do you know if your website is WCAG compliant?
          </h2>
        </div>
        <div className="space-y-4 text-[18px]">
          <p className="text-white ">
            To check WCAG compliance, you'll usually start with an automated
            analysis. The Trendsoft Technologies Pvt. Ltd provides a free,
            confidential graded report of your website, which tests content
            against WCAG 2.1 Level A and Level AA success criteria and gives you
            an overview report of how your website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnalysisInfo
