import { Link } from "gatsby"

import React from "react"
import {
  InfoCardDiv,
  CareersHanding,
  InfoCards,
  CardDiv,
  CardTitle,
  CardInfoDiv,
  CardReadDiv,
} from "./CareersStyle"
import { BsArrowRight } from "react-icons/bs"

const InfoCard = props => {
  return (
    <InfoCardDiv>
      <CareersHanding>{props.careers.heading}</CareersHanding>
      <InfoCards>
        {props.careers.list?.map((item, idx) => (
          <CardDiv key={item.listItem.id}>
            <CardTitle>{item.listItem.title}</CardTitle>
            <CardInfoDiv>
              <h1>{item.listItem.title}</h1>
              <h1>{props.careers.location}</h1>

              <CardReadDiv>
                <Link to={item.listItem.link}>
                  {" "}
                  <h1>{props.careers.CTA}</h1>
                </Link>

                <BsArrowRight size={20} />
              </CardReadDiv>
            </CardInfoDiv>
          </CardDiv>
        ))}
      </InfoCards>
    </InfoCardDiv>
  )
}

export default InfoCard
