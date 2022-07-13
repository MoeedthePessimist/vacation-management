import React from "react";
import "./User.css";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  SECONDARY_TYPOGRAPHY,
  PRIMARY_TYPOGRAPHY,
  PRIMARY_ICONS,
} from "../../constants/COLORS";

const User = ({ user }) => {
  return (
    <div className="user">
      <img
        className="user-profile"
        src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt=""
      />
      <div className="user-info">
        <p className="name" style={{ color: PRIMARY_TYPOGRAPHY }}>
          {user.name}
        </p>
        <p className="email" style={{ color: SECONDARY_TYPOGRAPHY }}>
          <IconContext.Provider
            value={{ color: SECONDARY_TYPOGRAPHY, size: 15 }}
          >
            <AiOutlineMail />
          </IconContext.Provider>
          {user.email}
        </p>
        <p className="job-title" style={{ color: PRIMARY_ICONS }}>
          {user.job_title}
        </p>
      </div>
    </div>
  );
};

export default User;
