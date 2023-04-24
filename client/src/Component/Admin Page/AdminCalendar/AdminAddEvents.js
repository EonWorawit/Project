import * as React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useState } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminCalendar.css'
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function AdminAddEvents() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  //   const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [s_time, setS_time] = useState("");
  const [e_time, setE_time] = useState("");
  const [detail, setDetail] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const addEvent = (event) => {
    event.preventDefault();
    if (
      subject === "" ||
      //   location === "" ||
      date === "" ||
      s_time === "" ||
      e_time === "" ||
      detail === "" ||
      latitude === "" ||
      longitude === ""
    ) {
      console.log("Enter all information");
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเพิ่ม Event ได้",
        text: "กรุณากรอกข้อมูลให้ครบ",
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เพิ่ม Event สำเร็จ",
        showConfirmButton: false,
        timer: 1500,
      });
      Axios.post("http://localhost:3001/addEvent", {
        subject: subject,
        // location: location,
        date: date,
        s_time: s_time,
        e_time: e_time,
        detail: detail,
        latitude: latitude,
        longitude: longitude,
      });
      navigate("/admin/calendar");
    }
  };

  return (
    <>
      <AdminNavbar />
      <br />
      <div className="form-container calendarfront">
        <form className="form-signin row g-3">
          <div>
            <h2>Add Event</h2>
          </div>
          <div className="col-md-6">
            <label htmlfor="" className="form-label">
              หัวข้อ
            </label>
            <input
              className="form-control"
              name="subject"
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            />
          </div>
          {/* <div className="col-md-6">
            <label htmlfor="" className="form-label">
              สถานที่ทำงาน
            </label>
            <input
              className="form-control"
              name="location"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </div> */}
          <div className="col-md-6">
            <label htmlfor="" class="form-label">
              วันที่
            </label>
            <input
              className="form-control"
              id="date"
              label=""
              type="date"
              name="date"
              defaultValue="today"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </div>
          {/* <div class="col-md-6">
                <label htmlfor="" class="form-label">วันที่</label>
                <input className="form-control" name="date" />
            </div> */}
          <div class="col-md-6">
            <label htmlfor="" className="form-label">
              เวลาเริ่มงาน
            </label>
            <input
              className="form-control"
              id="time"
              label=""
              type="time"
              name="s_time"
              defaultValue="00:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 476 }}
              onChange={(event) => {
                setS_time(event.target.value);
              }}
            />
            {/* <TextField
                    className="form-control"
                    id="time"
                    label=""
                    type="time"
                    defaultValue="00:00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 476 }}
                /> */}
            {/* <label htmlfor="" className="form-label">เวลาเริ่มงาน</label>
                <input className="form-control" name="s_time" /> */}
          </div>
          <div className="col-md-6">
            <label htmlfor="" className="form-label">
              เวลาเลิกงาน
            </label>
            <input
              className="form-control"
              id="time"
              label=""
              type="time"
              name="e_time"
              defaultValue="00:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 476 }}
              onChange={(event) => {
                setE_time(event.target.value);
              }}
            />
          </div>
          <div className="col-md-12">
            <label htmlfor="" className="form-label">
              รายละเอียดงาน
            </label>
            <input
              className="form-control"
              name="detail"
              onChange={(event) => {
                setDetail(event.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label htmlfor="" className="form-label">
              ละจิจูด
            </label>
            <input
              className="form-control"
              name="latitude"
              onChange={(event) => {
                setLatitude(event.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label htmlfor="" className="form-label">
              ลองจิจูด
            </label>
            <input
              className="form-control"
              name="longitude"
              onChange={(event) => {
                setLongitude(event.target.value);
              }}
            />
          </div>
          <br />

          <button className="btn btn-primary btn-block" onClick={addEvent}>
            Add Event
          </button>
        </form>
      </div>
    </>
  );
}
