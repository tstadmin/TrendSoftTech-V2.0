import { Link } from "gatsby"

import React from "react"
import {
  InfoCardDiv,
  InfoCards,
  CardDiv,
  CardTitle,
  CardInfoDiv,
  CardReadDiv,
} from "./CareersStyle"
import { BsArrowRight } from "react-icons/bs"
import CareersForm from "./CareersForm"

const InfoCard = props => {
  return (
    <InfoCardDiv>
      {/* <CareersHanding>{props.careers.heading}</CareersHanding> */}
      <h1 className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl sm:text-lg text-[16px] mt-4 font-semibold text-[#0B70E1]">{props.title}</h1>
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
      <div>
        <CareersForm />
      </div>
    </InfoCardDiv>
  )
}

export default InfoCard
