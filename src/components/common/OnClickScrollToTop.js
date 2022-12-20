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
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            height: "45px",
            width: "45px",
          }}
        >
          <IoArrowUpOutline className="text-white rounded-full bg-blue-500 text-6xl p-3  " />
        </button>
      )}
    </div>
  )
}
