import React from "react";
import "./AbsenceInfo.css";
import {
  PRIMARY_TYPOGRAPHY,
  SECONDARY_TYPOGRAPHY,
  SECONDARY_BTN,
} from "../../constants/COLORS";
import { IconContext } from "react-icons";
import { AiOutlineCheck } from "react-icons/ai";

const AbsenceInfo = (props) => {
  return (
    <div className="absence-info-container">
      <p className="absence-info-text">There has been requested</p>
      <p
        className="absence-info-vacations"
        style={{ color: PRIMARY_TYPOGRAPHY }}
      >
        {props.vacations} days of vacation
      </p>
      <p
        className="absence-info-absences"
        style={{ color: SECONDARY_TYPOGRAPHY }}
      >
        <IconContext.Provider value={{ color: SECONDARY_BTN, size: 15 }}>
          <AiOutlineCheck />
        </IconContext.Provider>{" "}
        {props.absences} days approved
      </p>
    </div>
  );
};

export default AbsenceInfo;
