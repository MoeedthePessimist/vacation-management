import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import AbsenceForm from "./screens/AbsenceForm/AbsenceForm";
import { users } from "./constants/USERS";
import { abscences } from "./constants/ABSCENCES";
import { vacations } from "./constants/VACATIONS";

function App() {
  const [isForm, setIsForm] = useState(false);
  const [absences, setAbsences] = useState(abscences);
  const [usersList, setUsersList] = useState(users);
  const [vacationsList, setVacationsList] = useState(vacations);

  return (
    <>
      <Navbar setIsForm={setIsForm} />
      {!isForm && (
        <Home
          setIsForm={setIsForm}
          absence={absences[0]}
          user={usersList[0]}
          vacation={vacationsList[0]}
        />
      )}
      {isForm && (
        <AbsenceForm
          setAbsences={setAbsences}
          absences={absences}
          user={users[0]}
          setIsForm={setIsForm}
        />
      )}
    </>
  );
}

export default App;
