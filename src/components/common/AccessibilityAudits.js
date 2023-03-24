import axios from "axios"
import React, { useState } from "react"

const AccessibilityAudits = () => {
  const [url, setUrl] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    const data = {
      WebsiteURL: url,
      FirestName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: phone,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/81fbce59-2b4a-4dc8-8a5c-5f88317d2b77",
        data
      )
      .then(res => {
        if (res.status === 200) {
          e.target.reset()
          alert("Sumbit Successfully")

          setFirstName("")
          setLastName("")
          setPhone("")
          setEmail("")
        }
      })
  }

  return (
    <div className="mt-10 1920Screen:px-48 2xl:px-24  px-8 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-2 gap-8 justify-center">
        <div className="space-y-4 text-[18px] ">
          <p className="text-[#0B70E1] mt-5  md:text-xl sm:text-lg text-base ">
            How do you know if your website is compliant?
          </p>
          <p>
            To determine if your website is compliant, you need to consider
            various factors, including legal requirements, technical standards,
            and user accessibility. Here are some steps you can take to assess
            your website's compliance:
          </p>
          <p>
            Review legal requirements: Make sure your website complies with
            relevant laws and regulations, such as the General Data Protection
            Regulation (GDPR), the Americans with Disabilities Act (ADA), and
            the California Consumer Privacy Act (CCPA).
          </p>
          <p>
            Check technical standards: Ensure that your website meets technical
            standards, such as the World Wide Web Consortium's Web Content
            Accessibility Guidelines (WCAG) and the General Data Protection
            Regulation's (GDPR) technical requirements.
          </p>
        </div>
        <div>
          <form className=" w-full px-24 space-y-5 " onSubmit={onSubmit}>
            {/* <p>Website URL*</p> */}
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              placeholder="Website URL "
              onChange={e => setUrl(e.target.value)}
            />
            {/* <p>First Name*</p> */}
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              placeholder="First Name"
              onChange={e => setFirstName(e.target.value)}
            />
            {/* <p>Last Name*</p> */}
            <input
              type="text"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)}
            />
            {/* <p>Email*</p> */}
            <input
              type="email"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            {/* <p>Phone No*</p> */}
            <input
              type="number"
              className="block w-full p-3 rounded border-black border-2  focus:border-blue-600 focus:outline-none"
              placeholder="Phone No"
              onChange={e => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-3 text-white hover:text-blue-400  text-[16px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityAudits
