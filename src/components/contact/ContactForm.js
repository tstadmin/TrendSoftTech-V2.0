import React, { useState } from "react"
const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    findus: "",
    project: "",
  })
  const { username, phonenumber, email, findus, project } = data
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="flex gap-6 mb-6 md:grid-cols-2 md:p-14 p-4  w-full ">
      <form
        className="md:text-3xl md:space-y-16 space-y-8  m-4"
        onSubmit={submitHandler}
      >
        <div className="flex space-x-16">
          <input
            className="appearance-none bg-transparent outline-none border-b min-w-full"
            type="text"
            name="Name"
            placeholder="Full Name *"
            value={username}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b min-w-full"
            type="email"
            name="E-mail"
            placeholder="Phone Number *"
            value={phonenumber}
            onChange={changeHandler}
          />
        </div>
        <div className="flex space-x-16">
          <input
            className="appearance-none bg-transparent outline-none border-b min-w-full"
            type="number"
            name="Phone Number"
            placeholder="Phone Number"
            value={email}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b min-w-full"
            type="text"
            name="findus"
            placeholder="Your website"
            value={findus}
            onChange={changeHandler}
          />
        </div>

        <textarea
          className="appearance-none bg-transparent outline-none border-b min-w-full min-h-[20px]"
          type="text"
          name="Message"
          placeholder="Your Message Here"
          value={project}
          onChange={changeHandler}
        />
      </form>
    </div>
  )
}

export default ContactForm
