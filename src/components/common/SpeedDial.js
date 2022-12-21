import React, { useEffect } from "react"
import { Widget, addResponseMessage } from "react-chat-widget"

import "react-chat-widget/lib/styles.css"

import { FaSms } from "react-icons/fa"
import { RiChatSmileLine } from "react-icons/ri"
import { IoLogoWhatsapp } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import styled from "@emotion/styled"
import "./Style.css"
import { Link } from "gatsby"
import logo from "../../../static/img/HomeImages/trendsoftlogo.svg"

const SpeedDial = () => {
  useEffect(() => {
    addResponseMessage("Welcome to this **awesome** chat!")
  }, [])

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
  }
  return (
    <div>
      <Widget
        className="chatbox"
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />
    </div>
  )
}

export default SpeedDial
