import React from "react"

const Clients = props => {
  console.log(props)
  return (
    <div className="px-52 grid grid-cols-3 justify-items-center gap-10">
      {props.clients.list?.map((i, idx) => (
        <div key={i.listItem.id}>
          <img src={i.listItem.img} alt="" className="h-[75px]" />
        </div>
      ))}
    </div>
  )
}

export default Clients
