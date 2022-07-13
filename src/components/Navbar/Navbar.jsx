import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiSettingsKnobs } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCalendarMinus } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";
import { IconContext } from "react-icons";
import { SECONDARY_TYPOGRAPHY, NAVBAR_BG } from "../../constants/COLORS";
import "./Navbar.css";
import { users } from "../../constants/USERS";

const Navbar = ({ setIsForm }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
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
      setShowMenu(false);
    }
    console.log(screenWidth);
    console.log(isSmallScreen);
  }, [screenWidth]);

  return (
    <nav className={!isSmallScreen ? "navbar" : "navbar-mobile"}>
      <div className="navbar-links-container">
        <div
          className="hamburger-icon-container"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          {isSmallScreen && <GiHamburgerMenu />}
        </div>

        <ul
          className={`${
            !isSmallScreen
              ? "navbar-links"
              : showMenu
              ? "navbar-links-mobile-show"
              : "navbar-links-mobile-hide"
          }`}
        >
          <li
            className="navbar-link"
            onClick={() => {
              setIsForm(false);
            }}
          >
            <IconContext.Provider value={{ color: SECONDARY_TYPOGRAPHY }}>
              <AiOutlineHome />
            </IconContext.Provider>
            <span>Overview</span>
          </li>
          <li
            className="navbar-link"
            onClick={() => {
              setIsForm(true);
            }}
          >
            <IconContext.Provider value={{ color: SECONDARY_TYPOGRAPHY }}>
              <AiOutlinePlusCircle />
            </IconContext.Provider>
            <span>Apply for leave</span>
          </li>
        </ul>
      </div>

      <div className="dropdowns">
        <div
          className={`${showAddMenu ? "add-menu-visible" : "add-drop-down"}`}
          onClick={() => {
            setShowAddMenu((prevState) => !prevState);
          }}
        >
          <IconContext.Provider value={{ color: SECONDARY_TYPOGRAPHY }}>
            <FiPlus />
          </IconContext.Provider>

          <IconContext.Provider value={{ color: SECONDARY_TYPOGRAPHY }}>
            <IoMdArrowDropdown />
          </IconContext.Provider>

          <div
            className="add-menu"
            onClick={() => {
              setIsForm(true);
            }}
          >
            <IconContext.Provider
              value={{ color: SECONDARY_TYPOGRAPHY, size: 15 }}
            >
              <BsCalendarMinus />
            </IconContext.Provider>
            <span
              style={{
                fontSize: "0.5em",
                color: "#f4f4f4",
              }}
            >
              new absence
            </span>
          </div>
        </div>
        <div
          className={`${
            showProfileMenu ? "avatar-drop-down-show" : "avatar-drop-down"
          }`}
          onClick={() => setShowProfileMenu((prevState) => !prevState)}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            className="avatar"
          />
          <IconContext.Provider value={{ color: SECONDARY_TYPOGRAPHY }}>
            <IoMdArrowDropdown />
          </IconContext.Provider>
          <div className="profile-menu">
            <div className="user-info">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
                className="avatar"
                style={{ width: "30px", height: "30px" }}
              />
              <span style={{ fontSize: "15px" }}>{users[0].name}</span>
            </div>
            <div className="options">
              <div className="option">
                <IconContext.Provider value={{ color: NAVBAR_BG, size: 20 }}>
                  <AiOutlineQuestionCircle />
                </IconContext.Provider>
                <span className="option-text">Help</span>
              </div>
              <div className="option">
                <IconContext.Provider value={{ color: NAVBAR_BG, size: 20 }}>
                  <BiUserCircle />
                </IconContext.Provider>
                <span className="option-text">My account</span>
              </div>
              <div className="option">
                <IconContext.Provider value={{ color: NAVBAR_BG, size: 20 }}>
                  <GiSettingsKnobs />
                </IconContext.Provider>
                <span className="option-text">Account settings</span>
              </div>
              <div className="option">
                <IconContext.Provider value={{ color: NAVBAR_BG, size: 20 }}>
                  <MdExitToApp />
                </IconContext.Provider>
                <span className="option-text">Sign out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
