import React from "react"
import {
  PhasesTitle,
  PhasesDescription,
  Description,
  Title,
} from "./ServicesStyled"
const Development = props => {
  return (
    <div>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
      </Description>
      {props.data.title ? <Title>{props.data.title}</Title> : ""}
      {props.data.test ? (
        <>
          {props.data.test?.map((item, id) => (
            <div key={item.listItems.id}>
              <PhasesTitle>{item.listItems.title}</PhasesTitle>
              <PhasesDescription>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.listItems.description,
                  }}
                />
              </PhasesDescription>
            </div>
          ))}
        </>
      ) : (
        ""
      )}

      {props.data.list?.map((item, idx) => (
        <div key={item.listItems.id}>
          <Title>{item.listItems.title}</Title>
          <Description>
            <div
              dangerouslySetInnerHTML={{ __html: item.listItems.description }}
            />
          </Description>

          {item.listItems.list?.map((i, idx) => (
            <div key={i.listItems.id}>
              <PhasesTitle>{i.listItems.title}</PhasesTitle>
              <PhasesDescription>{i.listItems.description}</PhasesDescription>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Development
