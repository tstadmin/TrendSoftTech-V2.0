import { useEffect } from "react"

import { useState } from "react"

import React from "react"

import { IoArrowUpOutline } from "react-icons/io5"

export default function OnclickTop() {
  useEffect(() => {
    if (typeof window == undefined) {
      return
    }
    window.addEventListener("scroll", scroll)
  })

  const [scrolled, setScrolled] = useState(false)

  const scroll = () => {
    const scrollY = window.scrollY
    if (scrollY > 250) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <div>
      {scrolled && (
        <button
          // className="animate-bounce"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "40px",
          }}
          aria-label="bottom to top "
        >
          <IoArrowUpOutline
            className="text-white rounded-full bg-[#e27303] text-6xl p-3 h-[45px]
            w-[45px] "
          />
        </button>
      )}
    </div>
  )
}
