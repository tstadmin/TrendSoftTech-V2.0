import React from "react"

const AboutOurCompany = props => {
  return (
    <div>
      <div className="flex space-x-32 justify-center">
        <img src={props.aboutOurCompany.img} alt="retget" />

        <div className="w-[575px] space-y-5 relative">
          <div className="absolute left-28 -top-3">
            <img className="" src={props.aboutOurCompany.imgDot} alt="" />
          </div>
          <p className="text-xl font-bold text-blue-500">
            {props.aboutOurCompany.title}
          </p>

          <p className="text-[36px] font-bold">
            {props.aboutOurCompany.header}
          </p>

          <p className="text-[16px] from-neutral-400">
            {" "}
            <div
              dangerouslySetInnerHTML={{
                __html: props.aboutOurCompany.description,
              }}
            />
          </p>
          <button className="bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[122px] text=[16px]">
            {props.aboutOurCompany.CTA}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutOurCompany
