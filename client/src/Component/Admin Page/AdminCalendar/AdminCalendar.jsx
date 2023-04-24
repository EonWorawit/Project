import React from "react";
import { Link } from "react-router-dom";
import './AdminCalendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

//import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core";
// import "@fullcalendar/daygrid";
// import "@fullcalendar/timegrid/main.css";

import events from "./events";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminCalendar() {
  return (
    <>
    <AdminNavbar/>
    <Link to="/admin/addevent" className="btn btn-success btn-block topright">เพิ่ม Event</Link>
    <br/>
    <div className="container bottom">
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div>
    </>
  );
}
