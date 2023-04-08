import React from "react"

const AnalysisInfo = () => {
  return (
    <div className="space-y-16 p-5">
      <div>
        <p className="text-white font-semibold mt-5  md:text-xl sm:text-lg text-base ">
          How do I know if your website is WCAG compliant?
        </p>
      </div>
      <div className="space-y-4 text-[18px]">
        <p className="text-white ">
          To check WCAG compliance, you'll usually start with an automated
          analysis. The Trendsoft Technologies Pvt. Ltd provides a free,
          confidential graded report, which tests content against WCAG 2.1 Level
          AA success criteria.
        </p>
        <p className="text-white">
          This report gives you an overview of how your website fares when
          tested against the WCAG A/AA checkpoints.
        </p>
        {/* <p className="text-white">
          such as the General Data Protection Regulation (GDPR), the Americans
          with Disabilities Act (ADA), and the California Consumer Privacy Act
          (CCPA).
        </p>

        <p className="text-white">
          Check technical standards: Ensure that your website meets technical
          standards, such as the World Wide Web Consortium's Web Content
          Accessibility Guidelines (WCAG) and the General Data Protection
          Regulation's (GDPR) technical requirements.
        </p> */}
      </div>
    </div>
  )
}

export default AnalysisInfo
