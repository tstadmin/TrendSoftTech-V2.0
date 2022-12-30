import React from "react"
import { Description, DescriptionList, Title } from "./ServicesStyled"
const Accessible = props => {
  return (
    <div>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
      </Description>
      {props.data.list ? (
        <>
          {props.data.list?.map((item, idx) => (
            <div key={item.listItems.id}>
              <Title>{item.listItems.title}</Title>
              <Description>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.listItems.description,
                  }}
                />
              </Description>
              {item.listItems.list?.map((i, idx) => (
                <DescriptionList key={i.listItems.id}>
                  {i.listItems.description}
                </DescriptionList>
              ))}
              {item.listItems.data ? (
                <Description>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.listItems.data }}
                  />
                </Description>
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
