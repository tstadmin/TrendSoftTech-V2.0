import React from "react"
import { CardHanding, CardReading, Cards } from "./ServicesStyled"
import { Link } from "gatsby"
const Card = props => {
  console.log(props)
  return (
    <Cards>
      <CardHanding>{props.data.title}</CardHanding>
      <p>{props.data.description}</p>
      <CardReading>
        <Link aria-label={props.data.label} to={props.data.link}>
          {props.data.CTA}
        </Link>
      </CardReading>
    </Cards>
  )
}

export default Card
