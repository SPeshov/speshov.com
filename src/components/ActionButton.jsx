import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

import {
  IoArrowGraphUpRight,
  IoAndroidClose,
  IoInformation,
} from "react-icons/lib/io/";

const ActionButton = ({
  topPx,
  rightPx,
  classes,
  isActive,
  isFixed,
  onClick,
  buttonRef,
  locationPathName,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${classes.block} 
        ${isActive ? classes.isActive : ""} 
        ${isFixed ? classes.isFixed : ""}
      `}
      style={{ top: topPx, right: rightPx }}
      ref={buttonRef}
      aria-label="Remark Me"
    >
      {isActive ? (
        locationPathName === "/" ? (
          <IoArrowGraphUpRight />
        ) : (
          <IoInformation />
        )
      ) : (
        <IoAndroidClose />
      )}
    </button>
  );
};

ActionButton.propTypes = {
  topPx: PropTypes.string.isRequired,
  rightPx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
};

export default ActionButton;
