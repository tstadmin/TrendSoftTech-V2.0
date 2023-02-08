import React from "react"
import { PhasesTitle, Title } from "./ServicesStyled"
const Development = props => {
  return (
    <div>
      <div >
        
        <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] text-[#0B70E1] font-semibold">{props.title}</h1>

        <div
          className="space-y-4 mt-5"
          dangerouslySetInnerHTML={{ __html: props.data.description }}
        />

        {props.data.title ? <Title>{props.data.title}</Title> : ""}
        {props.data.test ? (
          <>
            {props.data.test?.map((item, idx) => (
              <div key={item.listItems.id}>
                <PhasesTitle>{item.listItems.title}</PhasesTitle>

                <div
                  className="space-y-4 mt-2"
                  dangerouslySetInnerHTML={{
                    __html: item.listItems.description,
                  }}
                />
              </div>
            ))}
          </>
        ) : (
          ""
        )}

        {props.data.list?.map((item, idx) => (
          <div key={item.listItems.id}>
            <Title>{item.listItems.title}</Title>

            <div
              className="space-y-4 mt-5"
              dangerouslySetInnerHTML={{ __html: item.listItems.description }}
            />

            {item.listItems.list?.map((i, idx) => (
              <div key={i.listItems.id}>
                <PhasesTitle>{i.listItems.title}</PhasesTitle>
                <div
                  className="space-y-4 mt-2"
                  dangerouslySetInnerHTML={{ __html: i.listItems.description }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Development
