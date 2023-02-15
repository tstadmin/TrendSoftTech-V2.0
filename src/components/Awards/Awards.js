import { Link } from "gatsby"
import React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"
import { AwardHeading,AwardDiv } from "./AwardStyled"
const Awards = props => {
  
  return (
    <div>
      <PhotoProvider>
      <AwardHeading>{props.title}</AwardHeading>
        <AwardDiv>
          {props.data.list.map((item, idx) => (
            <PhotoView src={item.listItem.img} key={item.listItem.id}>
              <Link to="" aria-label={item.listItem.label}>
                <center className="space-y-4">
                  <img
                    src={item.listItem.img}
                    alt=""
                    className="mt-8 shadow-2xl border-8 border-black/60 max-h-[300px]"
                  />
                  <p>{item.listItem.title}</p>
                </center>
              </Link>
            </PhotoView>
          ))}
        </AwardDiv>
      </PhotoProvider>
    </div>
  )
}

export default Awards
