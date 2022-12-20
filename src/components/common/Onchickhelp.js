import React from "react"
import { FcSms } from "react-icons/fc"
import { RiAddFill } from "react-icons/ri"
import styled from "@emotion/styled"
const Div = styled.div`
  .parent .icons {
    background-color: red;
  }
  .parent .btn:hover {
    background-color: red;
  }
`
const Onchickhelp = () => {
  return (
    <div data-dial-init className="fixed bottom-6 left-6 group">
      <Div>
        <div className="parent">
          <div className="icons">
            <FcSms className="text-4xl" />
          </div>
          <button className="btn flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <RiAddFill className="w-8 h-8 transition-transform group-hover:rotate-45" />
          </button>
        </div>

        {/* <button
            type="button"
            class="flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              class="w-8 h-8 transition-transform group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span class="sr-only">Open actions menu</span>
          </button> */}
      </Div>
    </div>
  )
}

export default Onchickhelp
