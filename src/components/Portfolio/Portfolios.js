import { Link } from "gatsby"
import React from "react"
import {
  PortfoloHeading,
  PortfoloDiv,
  PortfoloCard,
  CardTitle,
  Image,
} from "./PortfolioStyled"
const Portfolios = props => {
  return (
    <div>
      <PortfoloHeading>{props.portfolio.title}</PortfoloHeading>
      <PortfoloDiv>
        {props.portfolio.list?.map((i, idx) => (
          <PortfoloCard key={i.listItem.id}>
            <CardTitle>
              <Link to={i.listItem.link} target="_blank">
                {i.listItem.title}
              </Link>
            </CardTitle>
            <Image src={i.listItem.img} width="250px" alt="portfolio Images" />
          </PortfoloCard>
        ))}
      </PortfoloDiv>
    </div>
  )
}

export default Portfolios
