import React from "react";
import "./Absence.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { SECONDARY_TYPOGRAPHY } from "../../constants/COLORS";

const Absence = (props) => {
  return (
    <div className="container">
      <div className="separator" />
      <div className="absence-container">
        <div className="left">
          <p className="type">{props.type}</p>
          <p className="duration-to-from">
            {props.durationFrom} to {props.durationTo}
          </p>
        </div>
        <div className="middle">
          <p className="duration">{props.duration} days</p>
        </div>
        <div className="right">
          <IconContext.Provider
            value={{ color: SECONDARY_TYPOGRAPHY, size: 15 }}
          >
            <AiOutlineClockCircle />
          </IconContext.Provider>
          <span className="status">{props.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Absence;
