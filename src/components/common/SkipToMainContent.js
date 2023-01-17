import React from "react"

const SkipToMainContent = () => {
  return (
    <div>
      <a
        href="#mainContent"
        aria-label="skip to main content"
        className="text-xs absolute z-50 p-1 bg-white text-blue-400 opacity-0 sm:focus:left-[14%] focus:left-[23%] focus:top-3 focus:transform focus:translate-x-[-50%] focus:opacity-80"
      >
        Skip To Main Content
      </a>
    </div>
  )
}

export default SkipToMainContent
