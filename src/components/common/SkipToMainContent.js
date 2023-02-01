import React from "react"

const SkipToMainContent = () => {
  return (
    <div>
      <a
        href="#mainContent"
        aria-label="skip to main content"
        className="text-base absolute z-50 p-1 bg-white  text-[#146aba] opacity-0 focus:text-[#146aba] hover:underline hover:decoration-[#146aba] sm:focus:left-[14%] focus:left-[23%] focus:top-2 focus:transform focus:translate-x-[-50%] focus:opacity-100"
      >
        Skip To Main Content
      </a>
    </div>
  )
}

export default SkipToMainContent
