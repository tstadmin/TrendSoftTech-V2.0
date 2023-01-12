import React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"

import imx from "../../../static/img/portfolio/HOME.svg"

const Awards = () => {
  return (
    <div>
      <PhotoProvider>
        <PhotoView src={imx}>
          <center>
            <img
              src={imx}
              alt=""
              width="200px"
              height="800px"
              className="mt-8 shadow-2xl"
            />
          </center>
        </PhotoView>
      </PhotoProvider>
    </div>
  )
}

export default Awards
