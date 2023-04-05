import axios from "axios"
import { useEffect, useState } from "react"

const devUrls = {
  tst: "dev.tst.trendsofttech.work",
  api: "https://enquiries.trendsofttech.work/",
}

const prodUrls = {
  tst: "dev.tst.trendsofttech.work",
  api: "https://enquiries.trendsofttech.work/",
}
let urls = devUrls
const isBrowser = () => typeof window !== "undefined"
if (typeof window !== "undefined") {
  if (
    window.location.href.includes("localhost") ||
    window.location.href.includes("dev")
  ) {
    urls = devUrls
  } else {
    urls = prodUrls
  }
}

const api = axios.create({
  baseURL: urls.api,
})

export const careerForm = args =>
  api.post("api/career-store", {
    name: args.name,
    email: args.email,
    phone_no: args.phone_no,
    position: args.position,
  })

export const getCareerData = args => api.get("api/career-show")

export const careerfileupLoad = args =>
  api.post(`api/career-image-update/${args.state}`, {
    id: args,
    image: args.image,
  })

export const contactForm = args =>
  api.post("api/contact-store", {
    name: args.name,
    phone_no: args.phone_no,
    email: args.email,
    websits: args.websits,
    company_name: args.company_name,
    inquiries: args.inquiries,
    message: args.message,
  })

export const webAccessbilityForm = args =>
  api.post("api/web-store", {
    website_url: args.website_url,
    first_name: args.first_name,
    last_name: args.last_name,
    email: args.email,
    phone_no: args.phone_no,
  })

export const docAccessbilityForm = args =>
  api.post("api/doc-store", {
    first_name: args.first_name,
    last_name: args.last_name,
    email: args.email,
    phone_no: args.phone_no,
  })
