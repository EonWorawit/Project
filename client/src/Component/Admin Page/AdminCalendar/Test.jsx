import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./AdminCalendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core";
// import "@fullcalendar/daygrid";
// import "@fullcalendar/timegrid/main.css";

import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function Test() {
  const [event, setEvent] = useState([]);

  Axios.get("http://localhost:3001/events").then((response) => {
    setEvent(response.data);
  });

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  return (
    <>
      <AdminNavbar />
      <Link to="/admin/addevent" className="btn btn-success btn-block topright">
        เพิ่ม Event
      </Link>
      <br />
      <div className="container bottom">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          themeSystem="Simplex"
          plugins={[dayGridPlugin]}
          events={[
            { title: "event 1", start: getDate("YEAR-MONTH-01")},
            { title: "event 2", start: getDate("YEAR-MONTH-02")},
          ]}
        />
      </div>
    </>
  );
}
