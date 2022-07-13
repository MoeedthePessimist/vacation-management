import React, { useState, useEffect } from "react";
import "./Home.css";
import { users } from "../../constants/USERS";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Vacations from "../../sections/Vacations/Vacations";
import MyCalendar from "../../sections/Calendar/Calendar.jsx";
import Absences from "../../sections/Absences/Absences";
import { SECONDARY_TYPOGRAPHY } from "../../constants/COLORS";

const Home = ({ user, absence, vacation, setIsForm }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <div
      className={`${
        isSmallScreen ? "home-container-mobile" : "home-container-desktop"
      }`}
    >
      {/* Overview */}
      <div className="header">
        <p>
          Overview for{" "}
          <span>
            <select name="year" id="year">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </span>
        </p>
      </div>
      <div className="separator" />
      <Vacations user={user} vacation={vacation} absence={absence} />

      {/* Calendar */}
      {/* Overview */}
      <div className="header" style={{ marginTop: "3rem" }}>
        <p>Calendar</p>
      </div>
      <div className="separator" />
      <MyCalendar leaves={absence.leaves} />

      {/* Absences */}
      <div
        className="header"
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Absence</p>
        <div
          onClick={() => {
            setIsForm(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <IconContext.Provider
            value={{ color: SECONDARY_TYPOGRAPHY, size: 20 }}
          >
            <AiOutlinePlusCircle />
          </IconContext.Provider>
        </div>
      </div>
      <div className="separator" />
      <Absences user={users[0]} absence={absence} />
      <div className="separator" />
    </div>
  );
};

export default Home;
