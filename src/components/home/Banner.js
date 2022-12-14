import React from "react"

const Banner = props => {
  return (
    <div className="flex relative">
      <div className="space-y-14 bg-white shadow-xl shadow-white py-24 w-[60vw] h-[92.2vh] pl-20">
        <h1 className="text-8xl font-semibold ">
          <div dangerouslySetInnerHTML={{ __html: props.banner.headers }} />
        </h1>
        <h1 className="text-3xl font-medium">{props.banner.title}</h1>
        <button className="text-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-75 px-6 py-2 rounded-2xl">
          {props.banner.CTA}
        </button>
      </div>
      <div className="absolute -z-10">
        <img
          className="object-cover w-[100vw] h-[85vh]"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="bannerImage"
        />
      </div>
    </div>
  )
}

export default Banner
