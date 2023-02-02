import React, { useState} from "react"
import axios from "axios"
const ContactForm = () => {
  // const formRef = useRef(null)

  // function refreshPage() {
  //   window.location.reload(false)
  // }
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [website, setWebsite] = useState("")
  const [company, setCompany] = useState("")
  const [options, setOptions] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      FullName: name,
      Email: email,
      Phone_Number: number,
      Website: website,
      Company: company,
      Inquiries: options,
      Message: message,
    }
    axios
      .post(
        "https://sheet.best/api/sheets/8f85aa39-8c5b-4b0f-a9ad-aae828374b76",
        data
      )
      .then(response => {
        // console.log(response);
        setName("")
        setEmail("")
        setNumber("")
        setWebsite("")
        setCompany("")
        setOptions("")
        setMessage("")
      })
  }

  return (
    <div>
      <form
        className="md:text-3xl text-lg grid  grid-cols-2  gap-10 sm:space-y-0"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full col-span-2 md:col-span-1  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder="Full Name"
          onChange={e => setName(e.target.value)}
          value={name}
        />

        <input
          type="number"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2 md:col-span-1  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder="Phone Number"
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
        <input
          type="email"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder="Email "
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder="Enter your Websits"
          onChange={e => setWebsite(e.target.value)}
          value={website}
        />
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder="Enter your Company name"
          onChange={e => setCompany(e.target.value)}
          value={company}
        />

        {/* <input type='text'
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder='Enter  General Inquiries /  Business Inquiries' onChange={(e) => setInquiries(e.target.value)}
          value={inquiries}
        /> */}
        <select
          className=" text-[16px] grid min-w-full col-span-2 border-[1px] rounded-sm border-black"
          onChange={e => setOptions(e.target.value)}
        >
          <option>Select Inquiries</option>
          <option
            type="text"
            value="General Inquiries"
            onChange={e => setOptions(e.target.value)}
          >
            General Inquiries
          </option>
          <option
            type="text"
            value="Business Inquiries"
            onChange={e => setOptions(e.target.value)}
          >
            Business Inquiries
          </option>
        </select>
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  text-sm "
          required
          placeholder="Enter your Message Here"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />

        {/* <select className=" text-[16px] grid min-w-full col-span-2 border-[1px] rounded-sm border-black">
          <option>Select Inquiries</option>
          <option type="text" name="GeneralInquiries">
            General Inquiries
          </option>
          <option type="text" name="BusinessInquiries">
            Business Inquiries
          </option>
        </select> */}

        <input
          type="submit"
          className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-1 text-white hover:text-blue-400  text-[16px]"
        />
      </form>
    </div>
  )
}

export default ContactForm
