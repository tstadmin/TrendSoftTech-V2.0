import React from "react"
import Card from "../common/Card"

const WorkingProcess = props => {
  return (
    <div className="grid grid-cols-2  justify-items-center">
      {props.workingProcess.map(item => (
        <Card
          num={item.listItem.num}
          title={item.listItem.title}
          description={item.listItem.description}
        />
      ))}
    </div>
  )
}

export default WorkingProcess
