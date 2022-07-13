import React, { useState, useEffect } from "react";
import "./Absences.css";
import { IconContext } from "react-icons";
import { BsSun } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";
import { NAVBAR_BG } from "../../constants/COLORS";
import AbsenceInfo from "../../components/AbsenceInfo/AbsenceInfo";
import Absence from "../../components/Absence/Absence";

const Absences = ({ user, absence }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getRequestedHolidays = () => {
    let holidays = 0;
    absence.leaves.forEach((leave) => {
      if (leave.type == "Holiday") holidays += leave.duration;
    });
    return holidays;
  };
  const getApprovedHolidays = () => {
    let holidays = 0;
    absence.leaves.forEach((leave) => {
      if (leave.status == "approved" && leave.type == "Holiday")
        holidays += leave.duration;
    });
    return holidays;
  };
  const getRequestedOthers = () => {
    let holidays = 0;
    absence.leaves.forEach((leave) => {
      if (leave.type != "Holiday") holidays += leave.duration;
    });
    return holidays;
  };
  const getApprovedOthers = () => {
    let holidays = 0;
    absence.leaves.forEach((leave) => {
      if (leave.type != "Holiday" && leave.status == "approved")
        holidays += leave.duration;
    });
    return holidays;
  };

  const requested_holidays = getRequestedHolidays();
  const approved_holidays = getApprovedHolidays();
  const requested_others = getRequestedOthers();
  const approved_others = getApprovedOthers();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    if (screenWidth < 800) setIsSmallScreen(true);
    else {
      setIsSmallScreen(false);
    }
  }, [screenWidth]);

  return (
    <section className="absences-section">
      <div className="absences-header">
        <div className="absences-container">
          <div className="icon-container2">
            <IconContext.Provider
              value={{
                color: NAVBAR_BG,
                size: isSmallScreen ? 10 : 20,
              }}
            >
              <BsSun />
            </IconContext.Provider>
          </div>
          <AbsenceInfo
            vacations={requested_holidays}
            absences={approved_holidays}
          />
        </div>

        <div className="absences-container">
          <div className="icon-container2">
            <IconContext.Provider
              value={{
                color: NAVBAR_BG,
                size: isSmallScreen ? 10 : 20,
              }}
            >
              <AiOutlineFlag />
            </IconContext.Provider>
          </div>
          <AbsenceInfo
            vacations={requested_others}
            absences={approved_others}
          />
        </div>
      </div>

      {absence.leaves.map((leave) => {
        return (
          <Absence
            type={leave.type}
            durationFrom={
              leave.duration_from.toString().split(" ")[0] +
              " " +
              leave.duration_from.toString().split(" ")[1] +
              " " +
              leave.duration_from.toString().split(" ")[2] +
              " " +
              leave.duration_from.toString().split(" ")[3]
            }
            durationTo={
              leave.duration_to.toString().split(" ")[0] +
              " " +
              leave.duration_to.toString().split(" ")[1] +
              " " +
              leave.duration_to.toString().split(" ")[2] +
              " " +
              leave.duration_to.toString().split(" ")[3]
            }
            duration={leave.duration}
            status={leave.status}
          />
        );
      })}
    </section>
  );
};

export default Absences;
