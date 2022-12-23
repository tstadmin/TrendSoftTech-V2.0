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
    <div>
      <form className="md:text-3xl text-lg " onSubmit={submitHandler}>
        <div className="sm:grid sm:grid-cols-2 grid-cols-0   gap-8 px-8">
          <input
            className="appearance-none bg-transparent outline-none border-b  "
            type="text"
            name="Name"
            placeholder="Name"
            value={phonenumber}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b "
            type="email"
            name="E-mail"
            placeholder="email"
            value={phonenumber}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b "
            type="number"
            name="Phone Number"
            placeholder="Phone Number"
            value={email}
            onChange={changeHandler}
          />

          <input
            className="appearance-none bg-transparent outline-none border-b "
            type="text"
            name="findus"
            placeholder="Your website"
            value={findus}
            onChange={changeHandler}
          />

          <textarea
            className="appearance-none bg-transparent outline-none border-b min-w-full col-span-2 "
            type="text"
            name="Message"
            placeholder="Your Message Here"
            value={project}
            onChange={changeHandler}
          />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
