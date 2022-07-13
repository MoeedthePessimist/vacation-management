import React, { useState, useEffect } from "react";
import User from "../../components/User/User.jsx";
import "./Vacations.css";
import VacationInfo from "../../components/VacationInfo/VacationInfo.jsx";
import { vacations } from "../../constants/VACATIONS";
import { BsCalendarMinus } from "react-icons/bs";
import { HiPresentationChartBar } from "react-icons/hi";
import { NAVBAR_BG, SECONDARY_TYPOGRAPHY } from "../../constants/COLORS";
import { IconContext } from "react-icons";

const Vacations = ({ user, vacation, absence }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getRemainingVacations = () => {
    let totalHolidays = 0;
    absence.leaves.forEach((leave) => {
      if (leave.type == "Holiday" && leave.status == "approved") {
        totalHolidays += leave.duration;
      }
    });
    return totalHolidays;
  };

  const remaining_vacations =
    vacation.entitled_vacations - getRemainingVacations();

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
    <section className="vacations">
      <User user={user} />
      <div className="vacation-info">
        <div className="vacation-container">
          <div className="icon-container">
            <IconContext.Provider
              value={{
                color: NAVBAR_BG,
                size: isSmallScreen ? 10 : 20,
              }}
            >
              <BsCalendarMinus />
            </IconContext.Provider>
          </div>
          <VacationInfo
            title="Entitled Vacations"
            vacations={vacation.entitled_vacations}
          />
        </div>

        <div className="vacation-container">
          <div className="icon-container">
            <IconContext.Provider
              value={{
                color: NAVBAR_BG,
                size: isSmallScreen ? 15 : 25,
              }}
            >
              <HiPresentationChartBar />
            </IconContext.Provider>
          </div>
          <VacationInfo
            title="Remaining Vacations"
            vacations={remaining_vacations}
          />
        </div>
      </div>
    </section>
  );
};

export default Vacations;
