const baseStyle = {
  color: "black.900",
  fontFamily: "Montserrat",
};
const sizes = {
  s: {
    fontSize: '{"md":"70px","base":"48px"}',
    fontWeight: 700,
  },
  md: {
    fontSize: '{"md":"90px","base":"48px"}',
    fontWeight: 700,
  },
  xs: {
    fontSize: '{"md":"35px","base":"31px","sm":"33px"}',
    fontWeight: 600,
  },
};
const defaultProps = {
  size: "s",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
