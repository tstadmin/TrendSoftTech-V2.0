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
      {/* <CareersHanding>{props.careers.heading}</CareersHanding> */}
      <InfoCards>
        {props.careers.list?.map((item, idx) => (
          <CardDiv key={item.listItem.id}>
            <CardTitle>{item.listItem.title}</CardTitle>
            <CardInfoDiv>
              <p>{item.listItem.title}</p>
              <p>{props.careers.location}</p>

              <CardReadDiv>
                <Link
                  to={item.listItem.link}
                  className="text-[#116AD9] sm:text-base  text-sm"
                  aria-label={item.listItem.label}
                >
                  {props.careers.CTA}
                </Link>

                <BsArrowRight size={15} />
              </CardReadDiv>
            </CardInfoDiv>
          </CardDiv>
        ))}
      </InfoCards>
    </InfoCardDiv>
  )
}

export default InfoCard
