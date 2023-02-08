import React, { useState} from "react"
import axios from "axios"
const ContactForm = () => {
  // const formRef = useRef(null)

  // function refreshPage() {
  //   window.location.reload(false)
  // }
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [number, setNumber] = useState("")
  // const [website, setWebsite] = useState("")
  // const [company, setCompany] = useState("")
  // const [options, setOptions] = useState("")
  // const [message, setMessage] = useState("")

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const data = {
  //     FullName: name,
  //     Email: email,
  //     Phone_Number: number,
  //     Website: website,
  //     Company: company,
  //     Inquiries: options,
  //     Message: message,
  //   }
  //   axios
  //     .post(
  //       "https://sheet.best/api/sheets/8f85aa39-8c5b-4b0f-a9ad-aae828374b76",
  //       data
  //     )
  //     .then(response => {
  //       // console.log(response);
  //       setName("")
  //       setEmail("")
  //       setNumber("")
  //       setWebsite("")
  //       setCompany("")
  //       setOptions("")
  //       setMessage("")
  //     })
  // }

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwxzuO-ylc4FNK4o5tFoVL9z_Bdadw4h6vhETXuaLDEVejwoL1N2NNZngHeukAFtDnjtg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form

        className="md:text-3xl text-lg grid  grid-cols-2  gap-10 sm:space-y-0"
        onSubmit={(e) => Submit(e)}
      >
       
       <input placeholder="Your Name" name="Name" type="text"
       className="border-[1px] rounded-sm border-black p-2 min-w-full col-span-2 md:col-span-1  bg-transparent outline-none border-b sm:text-base  "
       />
       <input placeholder="Phone Number" name="Number" type="text"
       className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2 md:col-span-1  bg-transparent outline-none border-b sm:text-base  " 
       />
          <input
          type="email"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  "
    
          placeholder="Email"
         name="Email"

        />
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base "
         
          placeholder="Enter your Websits"
          name="Websits"
        
        
        />
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  "
         
          placeholder="Enter your Company name"
          name="CompanyName"
        />

        <select
          className=" text-[16px] grid min-w-full col-span-2 border-[1px] rounded-sm border-black"

        >
          <option>Select Inquiries</option>
          <option
            type="text"
            value="General Inquiries"
            
          >
            General Inquiries
          </option>
          <option
            type="text"
            value="Business Inquiries"
         
          >
            Business Inquiries
          </option>
        </select>
        <input
          type="text"
          className="border-[1px] rounded-sm border-black p-2 min-w-full  col-span-2  bg-transparent outline-none border-b text-base  "
         
          placeholder="Enter your Message Here"
          name="Message"
          
        /> 


        <input
          type="submit"
          className="bg-blue-600 hover:bg-white sm:w-44 font-medium mt-2 border-blue-400 border hover:border hover:border-[#f37c05] hover:duration-700  rounded-xl p-1 text-white hover:text-blue-400  text-[16px]"
        />
      </form>
    </div>
  )
}

export default ContactForm
