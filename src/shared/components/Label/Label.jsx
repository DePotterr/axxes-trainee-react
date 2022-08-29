import { string } from "prop-types";

const Label = ({ text }) => {
  return <p>{text}</p>;
};

Label.propTypes = {
  text: string,
};

export default Label;
