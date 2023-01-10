import * as React from "react"
import Seo from "../components/seo"
import errorImage from "../../static/img/404error.svg"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="relative">
    <img className="h-[100vh] w-full object-cover" src={errorImage} alt="" />
    <Link to="/">
      <h1 className="absolute sm:left-[45%] left-[30%] top-[79%] text-white hover:cursor-pointer ring-4 p-4 ring-white rounded-lg hover:ring-blue-400 hover:text-blue-400 ">
        Go To Home Page
      </h1>
    </Link>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
