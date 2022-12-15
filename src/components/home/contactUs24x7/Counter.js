import React from "react"

const Counter = () => {
  return (
    <div className=" absolute  top-[39%] ">
      <div className="lg:flex md:grid  gap-32 shadow-xl min-w-[700px] md:w-[300px] p-6 rounded-2xl bg-white">
        <div>
          <p className="text-[50px] font-bold">100+</p>
          <p className="text-[20px] font-[400]">Happy Clients</p>
        </div>
        <div>
          <p className="text-[50px] font-bold">50+</p>
          <p className="text-[20px] font-[400]">Happy Clients</p>
        </div>
        <div>
          <p className="text-[50px] font-bold">100+</p>
          <p className="text-[20px] font-[400]">Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
