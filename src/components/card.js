import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`card-base ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
