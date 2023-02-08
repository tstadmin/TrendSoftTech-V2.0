import React from "react"
import { DescriptionList, Title } from "./ServicesStyled"
const Accessible = props => {
  return (
    <div>
       <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] font-semibold text-[#0B70E1]">{props.title}</h1>
      <div
        className="space-y-4 mt-5"
        dangerouslySetInnerHTML={{ __html: props.data.description }}
      />

      {props.data.list ? (
        <>
          {props.data.list?.map((item, idx) => (
            <div key={item.listItems.id}>
              <Title>{item.listItems.title}</Title>

              <div
                className="space-y-4 mt-5"
                dangerouslySetInnerHTML={{
                  __html: item.listItems.description,
                }}
              />

              {item.listItems.list?.map((i, idx) => (
                <DescriptionList key={i.listItems.id}>
                  {i.listItems.description}
                </DescriptionList>
              ))}

              {item.listItems.data ? (
                <div
                  className="space-y-4 mt-5"
                  dangerouslySetInnerHTML={{ __html: item.listItems.data }}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default Accessible
