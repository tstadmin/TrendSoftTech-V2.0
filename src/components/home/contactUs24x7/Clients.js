import React from "react"

const Clients = props => {
  return (
    <div>
      <ul className=" grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-items-center  grid-cols-1   1920Screen:px-48  2xl:px-24 440Screen:px-8 px-4">
        {props.clients.list?.map((i, idx) => (
          <li
            key={i.listItem.id}
            className=" w-[200px] h-[200px]  flex justify-center items-center  "
          >
            <img
              src={i.listItem.img}
              alt={i.listItem.label}
              className="h-[105px] "
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
