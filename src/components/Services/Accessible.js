import React from "react"
import { DescriptionList, Title } from "./ServicesStyled"
const Accessible = props => {
  return (
    <div>
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
