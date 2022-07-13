import React from "react";
import "./VacationInfo.css";
import {
  PRIMARY_TYPOGRAPHY,
  SECONDARY_TYPOGRAPHY,
} from "../../constants/COLORS";

const VacationInfo = (props) => {
  return (
    <div className="vacation-info-container">
      <p className="title" style={{ color: PRIMARY_TYPOGRAPHY }}>
        {props.title}
      </p>
      <p className="vacations" style={{ color: SECONDARY_TYPOGRAPHY }}>
        {props.vacations} vacation days
      </p>
    </div>
  );
};

export default VacationInfo;
