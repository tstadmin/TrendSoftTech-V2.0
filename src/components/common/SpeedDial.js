import React from "react"
import { FaSms } from "react-icons/fa"
import { RiChatSmileLine } from "react-icons/ri"
import { IoLogoWhatsapp } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import styled from "@emotion/styled"
import "./Style.css"
import { Link } from "gatsby"
const Div = styled.div`
  .icons {
    display: none;
  }

  .btn:hover .icons {
    display: block;
  }
`

const SpeedDial = () => {
  return (
    <div data-dial-init className="fixed bottom-6 left-6 group z-20">
      <Div>
        <div className="btn space-y-2 grid justify-center">
          <div className="icons space-y-3 ">
            <FaSms className="text-5xl text-white  p-2 rounded-full bg-yellow-500 shadow-xl ml-1" />

            <IoLogoWhatsapp className="text-5xl text-white p-2 rounded-full bg-green-500 ml-1" />
          </div>
          <button
            type="button"
            class="flex  justify-center items-center w-14 h-14 text-white bg-orange-500 rounded-full"
          >
            <RiChatSmileLine className="w-8 h-8  transition-transform group-hover:rotate-180" />

            <span class="sr-only">Open actions menu</span>
          </button>
        </div>
      </Div>
    </div>
  )
}

export default SpeedDial
