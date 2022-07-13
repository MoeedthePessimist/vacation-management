import React, { useState, useEffect } from "react";
import "./AbsenceForm.css";
import { users } from "../../constants/USERS";

const AbsenceForm = ({ setAbsences, absences, user, setIsForm }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [team, setTeam] = useState();

  const [absenceType, setAbsenceType] = useState("Holiday");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [absencePeriod, setAbsencePeriod] = useState("Full day");
  const [agreement, setAgreement] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const status = ["pending", "approved", "cancelled"];
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

  function generateRandom(min = 0, max = 3) {
    // find diff
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor(rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const from = new Date(startDate);
    const to = new Date(endDate);

    const newAbsence = {
      type: absenceType,
      duration_from: from,
      duration_to: to,
      duration: (to.getTime() - from.getTime()) / (1000 * 3600 * 24),
      status: status[generateRandom()],
    };

    setAbsences(
      absences.map((absence) => {
        if (absence.user_id == user.id) absence.leaves.push(newAbsence);
        return absence;
      })
    );

    setIsForm(false);
  };

  return (
    <div
      className={
        isSmallScreen
          ? "absence-form-container-mobile"
          : "absence-form-container-desktop"
      }
    >
      <p className="absence-form-header">New Absence</p>
      <div className="separator" />
      <form className="absence-form" onSubmit={onHandleSubmit}>
        <div className="absence-form-field-full">
          <label htmlFor="type" className="absence-form-label">
            Absence type: *
          </label>
          <select
            name="type"
            id="type"
            required={true}
            onChange={(e) => {
              setAbsenceType(e.target.value);
            }}
          >
            <option value="Holiday">Holiday</option>
            <option value="Special leave">Special leave</option>
            <option value="Unpaid leave">Unpaid leave</option>
            <option value="Parental leave">Parental leave</option>
            <option value="Maternity Protection">Maternity Protection</option>
            <option value="Out of office">Out of office</option>
          </select>
        </div>

        <div className="absence-form-field-half">
          <label htmlFor="start-date" className="absence-form-label">
            Start date: *
          </label>
          <input
            type="date"
            name="start-date"
            id="start-date"
            required={true}
            onChange={(e) => {
              setStartDate(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>

        <div className="absence-form-field-half">
          <label htmlFor="end-date" className="absence-form-label">
            End date: *
          </label>
          <input
            type="date"
            name="end-date"
            id="end-date"
            required={true}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>

        <div className="absence-form-field-full">
          <label htmlFor="period" className="absence-form-label">
            Absence Period: *
          </label>
          <section className="radio-options">
            <section className="radio-option">
              <input
                type="radio"
                name="duration"
                value={"Full day"}
                id="full-day"
                onChange={(e) => {
                  setAbsencePeriod(e.target.value);
                }}
              />
              <label htmlFor="full-day">full day</label>
            </section>
            <section className="radio-option">
              <input
                type="radio"
                name="duration"
                value={"Morning"}
                id="morning"
                onChange={(e) => {
                  setAbsencePeriod(e.target.value);
                }}
              />
              <label htmlFor="morning">morning</label>
            </section>
            <section className="radio-option">
              <input
                type="radio"
                name="duration"
                value={"Noon"}
                id="noon"
                onChange={(e) => {
                  setAbsencePeriod(e.target.value);
                }}
              />
              <label htmlFor="noon">noon</label>
            </section>
          </section>
        </div>
        <br />
        <p className="absence-form-header">Addition Information</p>
        <div className="separator" />
        <div className="absence-form-field-half">
          <label htmlFor="period" className="absence-form-label">
            Agreed With Team
          </label>
          <section className="radio-options">
            <section className="radio-option">
              <input
                type="radio"
                name="agreement"
                id="Yes"
                value="yes"
                onChange={(e) => setAgreement(e.target.value)}
              />
              <label htmlFor="Yes">Yes</label>
            </section>
            <section className="radio-option">
              <input
                type="radio"
                name="agreement"
                id="No"
                value="no"
                onChange={(e) => setAgreement(e.target.value)}
              />
              <label htmlFor="No">No</label>
            </section>
          </section>
        </div>
        <div className="absence-form-field-full">
          <label htmlFor="team" className="absence-form-label">
            Replacement
          </label>
          <select
            name="team"
            id="team"
            onChange={(e) => {
              console.log(e.target.value);
              if (team) setTeam((prevTeam) => [...prevTeam, e.target.value]);
              else setTeam([e.target.value]);
              console.log(team);
            }}
          >
            {users.map((user) => {
              return <option value={user.name}>{user.name}</option>;
            })}
          </select>
          <div className="separator" />
          {team &&
            team.map((member) => {
              return <p className="member">{member}</p>;
            })}
          <div className="separator" />
        </div>
        <div className="absence-form-field-full">
          <label htmlFor="address" className="absence-form-label">
            Address/Phone no
          </label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="absence-form-field-full">
          <label htmlFor="comment" className="absence-form-label">
            Comment
          </label>
          <input type="text" name="comment" id="comment" />
        </div>
        <br />
        <br />
        <br />
        <div className="separator" />
        <section className="controls">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button>Cancel</button>
        </section>
      </form>
    </div>
  );
};

export default AbsenceForm;
