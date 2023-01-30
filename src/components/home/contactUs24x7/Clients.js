import React from "react"

const Clients = props => {
  console.log(props)
  return (
    <div className="xl:px-42 px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center  gap-10">
      {props.clients.list?.map((i, idx) => (
        <div key={i.listItem.id}>
          <img src={i.listItem.img} alt="" className="h-[45px]" />
        </div>
      ))}
    </div>
  )
}

export default Clients
