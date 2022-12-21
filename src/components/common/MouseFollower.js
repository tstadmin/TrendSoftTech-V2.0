import React from "react"

export default class MouseFollower extends React.Component {
  state = {
    left: 0,
    top: 0,
  }
  componentDidMount = () => {
    document.addEventListener("mousemove", this.updatePosition)
  }
  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.updatePosition)
  }
  updatePosition = event => {
    this.setState({
      left: event.clientX,
      top: event.clientY,
    })
  }
  render() {
    const styles = {
      width: 30,
      height: 30,
      position: "fixed",
      left: this.state.left,
      top: this.state.top,
      borderRadius: "50%",
      zIndex: "99999",
    }
    return <div style={styles} className="duration-300 bg-red-500/60 " />
  }
}
