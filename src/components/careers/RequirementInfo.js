import React from "react"

const RequirementInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <ul>
          <li>Coffee</li>
          <li>admin</li>
          <li> 0</li>
        </ul>
        <h1 className="">Requirements</h1>
        <ul>
          <li>3+ years of experience in React.js</li>
        </ul>
      </div>
      <div className="grid border-2 border-black justify-items-center space-y-8 p-7">
        <h1 className="text-4xl font-semibold ">Apply for this position</h1>
        <form className="grid space-y-2">
          <label className="text-lg">Full Name *</label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg">Email *</label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg"> Phone *</label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg">Cover Letter *</label>
          <input className="border border-blue-400 w-[76vw] p-5" />
          <label className="text-lg">Upload CV/Resume *</label>
          <input type="file" id="myfile" name="myfile" />
          <label for="vehicle1"> Allowed Type(s): .pdf, .doc, .docx</label>
        </form>
      </div>
    </div>
  )
}

export default RequirementInfo
