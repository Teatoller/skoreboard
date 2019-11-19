import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

const Header = props => {
  const { title } = props;
  return (
    <header>
      <Stats />
      <h1>{title}</h1>
      <StopWatch />
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string
};
export default Header;
