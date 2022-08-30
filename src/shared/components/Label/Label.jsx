import { string } from "prop-types"
const Label = ({ text }) => {
  return <div>{text}</div>
}

Label.prototype = {
  test: string,
}

export default Label
