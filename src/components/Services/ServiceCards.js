import { Link } from "gatsby"
import React from "react"
import { TabsData } from "../../../data/TabsData"
import {
  ServiceCard,
  ServiceCardInfo,
  Cards,
  CardHanding,
  CardReading,
  CardDescription,
  ServiceCardDiv,
} from "./ServicesStyled"
const ServiceCards = props => {
  return (
    <ServiceCardDiv>
      <ServiceCard>
        {TabsData.data.map((value, idx) => (
          <ServiceCardInfo key={value.id}>
            <Card data={value} />
          </ServiceCardInfo>
        ))}
      </ServiceCard>
    </ServiceCardDiv>
  )
}

const Card = ({ data }) => {
  return (
    <Cards>
      <CardHanding>{data.title}</CardHanding>
      <p>{data.description}</p>
      <CardReading>
        <Link to={data.link}>{TabsData.metaData.CTA}</Link>
      </CardReading>
    </Cards>
  )
}

export default ServiceCards
