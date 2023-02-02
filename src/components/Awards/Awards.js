import { Link } from "gatsby"
import React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"

const Awards = props => {
  
  return (
    <div>
      <PhotoProvider>
        <div className="sm:flex grid  justify-center gap-10">
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
        </div>
      </PhotoProvider>
    </div>
  )
}

export default Awards
