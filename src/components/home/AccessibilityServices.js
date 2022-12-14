import React from "react"
import Card from "../common/Card"

const AccessibilityServices = props => {
  return (
    <div>
      <div className="md:grid-cols-2 sm:grid gap-5 justify-center">
        {props.accessibilityServices.map((item, id) => (
          <Card
            img={item.listItem.img}
            key={id}
            title={item.listItem.title}
            description={item.listItem.description}
            CTA={item.listItem.CTA}
          />
        ))}
      </div>
    </div>
  )
}

export default AccessibilityServices
