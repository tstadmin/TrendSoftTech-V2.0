import React from "react"

const SkipToMainContent = () => {
  return (
    <div>
      <a
        href="#mainContent"
        aria-aria-label="skip to main content"
        className="absolute z-50 p-1 bg-white text-blue-400 opacity-0 focus:left-[6%] focus:transform focus:translate-x-[-50%] focus:opacity-80"
      >
        Skip To Main Content
      </a>
    </div>
  )
}

export default SkipToMainContent
