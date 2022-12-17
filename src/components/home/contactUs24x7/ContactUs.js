import React from "react"

import tw from "twin.macro"
const ContactUs = props => {
  const Div = tw.div`relative`
  const Header = tw.h1`text-[36px] font-bold text-black`
  const ContactInfo = tw.div`space-y-8 text-center`
  const Description = tw.p`text-[20px] font-[400]`
  const Button = tw.button`bg-blue-600 hover:bg-white font-medium border-blue-400 hover:border  rounded-3xl p-3 text-white hover:text-blue-400 min-w-[142px] text-[16px]`
  const Contact = tw.div`lg:flex md:grid justify-center w-full  bg-blue-100 gap-24 p-10 items-center`
  return (
    <Div>
      <Contact>
        <img src={props.contactUs.personsImage} alt="image" />

        <ContactInfo>
          <Header>{props.contactUs.title}</Header>
          <Description>
            Have any idea or project for in your mind call us or schedule a
            appointment. Our representative will reply you shortly.
          </Description>
          <Button>Contact Us</Button>
        </ContactInfo>
      </Contact>
    </Div>
  )
}

export default ContactUs
