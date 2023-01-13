import React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"

const Awards = () => {
  return (
    <div>
      <center>
        <img
          className="mt-20"
          src="/img/ComingSoon.jpg"
          alt=""
          width="700px"
          height="700px"
        />
      </center>
      {/* <PhotoProvider>
        <PhotoView src="https://img.freepik.com/free-vector/team-happy-employees-winning-award-celebrating-success-business-people-enjoying-victory-getting-gold-cup-trophy-vector-illustration-reward-prize-champions-s_74855-8601.jpg?w=2000">
          <center>
            <img
              src="https://img.freepik.com/free-vector/team-happy-employees-winning-award-celebrating-success-business-people-enjoying-victory-getting-gold-cup-trophy-vector-illustration-reward-prize-champions-s_74855-8601.jpg?w=2000"
              alt=""
              width="200px"
              height="800px"
              className="mt-8 shadow-2xl"
            />
          </center>
        </PhotoView>
      </PhotoProvider> */}
    </div>
  )
}

export default Awards
