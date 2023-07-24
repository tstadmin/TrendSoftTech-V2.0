import React from "react"
import { ContactInfoDiv, Image, Info } from "./Contactstyled"
const ContactInfo = props => {
  return (
    <div className="">
      <ContactInfoDiv>
        <Info>
          <img
            className="text-4xl sm:w-10 h-14"
            src={props.data.emailimg}
            alt=""
            aria-hidden="true"
          />
          <div className=" ">
            <div>
              <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
                {props.data.emailTitle}
              </p>
              <a
                aria-label="Email: service@trendsofttech.com "
                href="mailto:info@trendsofttech.com"
              >
                {props.data.email}
              </a>
            </div>

            <div>
              <p className="md:text-lg text-[#0b6ddc] font-semibold text-sm">
                {props.data.businessMailTitle}{" "}
              </p>
              <a
                aria-label="Business Email: service@trendsofttech.com "
                href="mailto:service@trendsofttech.com"
              >
                {props.data.businessEmail}
              </a>
            </div>
          </div>
        </Info>
      </ContactInfoDiv>
      <div className="xl:flex 2xl:justify-between  justify-around  gap-7 mt-10">
        <div className="md:mt-0 mt-5">
          <div>
            <a
              target="_blank"
              href="https://goo.gl/maps/S2NJTW9PYefydb8q6"
              className="text-center rounded-md  text-white p-3 underline bg-[#0b2d78] hover:text-[#F9761F] focus:text-[#F9761F]   hover:underline focus:decoration-[#f9761f]  hover:decoration-[#f9761f]"
              aria-label="View Mangalagiri Location  "
            >
              Mangalagiri
            </a>
          </div>
          <div className="rounded-md  mt-3 border-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d294.9387316932675!2d80.5768317!3d16.4227811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f154bff9fd17%3A0x440006bb3f58773a!2sTrendsoft%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1681128206538!5m2!1sen!2sin"
              className="2xl:w-[620px] 2xl:h-[350px]  w-[100%] h-[200px]  "
            ></iframe>
          </div>
        </div>
        <div>
          {/* <div className="">
            <a
              href="https://goo.gl/maps/tdZ21hysERZumgqu8"
              className="text-center text-white p-3  rounded-md  underline bg-[#0b2d78] hover:text-[#F9761F] focus:text-[#F9761F]   hover:underline focus:decoration-[#f9761f]  hover:decoration-[#f9761f]"
              target="_blank"
              aria-label="View Hyderabad Location  "
            >
              Hyderabad
            </a>
          </div> */}

          {/* <div className=" rounded-md mt-3 border-2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.796120592011!2d78.401868!3d17.4910426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a0e9651d9b%3A0x25823406ac81f76a!2sTrendsoft%20Technologies%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1681133163369!5m2!1sen!2sin"
              // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d293.26660929450827!2d78.4019202!3d17.4911187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91949a17dd21%3A0x9bb114860820bc25!2sMIG-37%2C%20K%20P%20H%20B%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e1!3m2!1sen!2sin!4v1681128146833!5m2!1sen!2sin"
              className="2xl:w-[320px]  w-[100%] h-[200px]  "
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
