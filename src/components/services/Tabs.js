import React from "react"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "gatsby"
import { TabButton } from "./ServicesStyled"

const data =[
  {
    id:1,
    title: "Accessible PDF/UA",
    link: "/services/docAccessibility/accessiblePDFUA",
  },
  {
    id: 2,
    title: "Accessible PDF Form",
    link: "/services/docAccessibility/accessiblePDFForms",
  },
  {
    id: 3,
    title: "Accessible Word",
    link: "/services/docAccessibility/accessibleWord",
  },
  {
    id: 4,
    title: "Accessible PPT",
    link: "/services/docAccessibility/accessiblePPT",
  },
  {
    id: 5,
    title: "Accessible Excel",
    link: "/services/docAccessibility/accessibleExcel" ,
  }
 
    
  
]
const Tabs = () => {
  // const query = useStaticQuery(TabsData)
  // const data =query.allMarkdownRemark.edges[0].node.frontmatter.services.digitalMarketing




  return (
    <div className="2xl:px-24 px-8 mt-16">
      <ul className="grid 2xl:grid-cols-5 lg:grid-cols-3 gap-3 ">
        {data.map((item, idx) => (
          <TabButton key={item.id}>
            <Link
              className="hover:bg-blue-500 border-2 border-blue-500 text-[#bd5005] duration-700   rounded-none flex space-x-3 text-xl justify-center Tab "
              href={item.link}
            >
              {item.title}
              <IoIosArrowForward className="mt-1 ml-1 text-xl text-[#bd5005] " />
            </Link>
          </TabButton>
        ))}
      </ul>
    </div>
  )
}

export default Tabs

// const TabsData = graphql`
// query MyQuery {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           AccessibilityTabs {
//             list {
//               listItem {
//                 id
//                 link
//                 title
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`