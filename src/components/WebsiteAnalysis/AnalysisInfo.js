import React from "react"

const AnalysisInfo = () => {
  return (
    <div className="space-y-16 p-5">
      <div>
        <p className="text-white font-semibold mt-5  md:text-xl sm:text-lg text-base ">
          How do you know if your website is compliant?
        </p>
      </div>
      <div className="space-y-4 text-[18px]">
        <p className="text-white ">
          Accessibility compliance: Your website should be accessible to all
          users, including those with disabilities. Make sure it complies with
          the Web Content Accessibility Guidelines (WCAG) 2.1 AA.
        </p>
        <p className="text-white">
          Review legal requirements: Make sure your website complies with
          relevant laws and regulations,
        </p>
        <p className="text-white">
          such as the General Data Protection Regulation (GDPR), the Americans
          with Disabilities Act (ADA), and the California Consumer Privacy Act
          (CCPA).
        </p>

        <p className="text-white">
          Check technical standards: Ensure that your website meets technical
          standards, such as the World Wide Web Consortium's Web Content
          Accessibility Guidelines (WCAG) and the General Data Protection
          Regulation's (GDPR) technical requirements.
        </p>
      </div>
    </div>
  )
}

export default AnalysisInfo
