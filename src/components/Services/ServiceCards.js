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
} from "./ServicesStyled"
const ServiceCards = props => {
  return (
    <ServiceCard>
      {TabsData.data.map((value, idx) => (
        <ServiceCardInfo>
          <Card data={value} />
        </ServiceCardInfo>
      ))}
    </ServiceCard>
  )
}

const Card = ({ data }) => {
  return (
    <Cards>
      <CardHanding>{data.title}</CardHanding>
      <CardDescription>{data.description}</CardDescription>
      <Link to={data.link}>
        <CardReading>{TabsData.metaData.CTA}</CardReading>
      </Link>
    </Cards>
  )
}

export default ServiceCards
