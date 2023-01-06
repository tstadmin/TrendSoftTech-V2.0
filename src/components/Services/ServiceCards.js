import React from "react"
import Cards from "./Cards"

import { ServiceCard, ServiceCardInfo, ServiceCardDiv } from "./ServicesStyled"

const ServiceCards = props => {
  console.log(props)
  return (
    <ServiceCardDiv>
      <ServiceCard>
        {props.data.map((value, idx) => (
          <ServiceCardInfo key={value.id}>
            <Cards data={value.listItem} />
          </ServiceCardInfo>
        ))}
      </ServiceCard>
    </ServiceCardDiv>
  )
}

export default ServiceCards
