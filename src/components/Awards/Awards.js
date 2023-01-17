import React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"

const Awards = () => {
  return (
    <div>
      {/* <center>
        <img
          className="mt-20"
          src="/img/ComingSoon.jpg"
          alt=""
          width="700px"
          height="700px"
        />
      </center> */}
      <PhotoProvider>
        <PhotoView src="/img/Awards/TRENDSOFT TECHNOLOGIES PRIVATE LIMITED 9001 - 3737.jpg">
          <center>
            <img
              src="/img/Awards/TRENDSOFT TECHNOLOGIES PRIVATE LIMITED 9001 - 3737.jpg"
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
