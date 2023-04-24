import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminAddLeave() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [limit_m, setLimit_m] = useState("");
  const [limit_y, setLimit_y] = useState("");
  
  const addLeave = (event) => {
    event.preventDefault();
    if (
      subject === "" ||
      limit_m === "" ||
      limit_y === "" 
    ) {
      console.log("Enter all information");
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถเพิ่มข้อมูลได้',
        text: 'กรุณากรอกข้อมูลให้ครบ',
      })
    } else if (
      subject !== "" ||
      limit_m !== "" ||
      limit_y !== ""
    ) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เพิ่มข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 2500,
      });
      Axios.post("http://localhost:3001/create/leave", {
        l_subject: subject,
        l_limit_m: limit_m,
        l_limit_y: limit_y
      });
      navigate("/admin/leave");
    }
  };

  return (
    <>
      <AdminNavbar />
      <br />
      <div className="form-container1">
        <form className="form-signin row g-3">
          <div>
            <h2>เพิ่มหัวข้อการลา</h2>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="l_subject">
            หัวข้อการลา
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              required
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="l_limit_m">
            เกณฑ์การลารายเดือน
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter name"
              required
              onChange={(event) => {
                setLimit_m(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="l_limit_y">
            เกณฑ์การลารายปี
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter name"
              required
              onChange={(event) => {
                setLimit_y(event.target.value);
              }}
            />
          </div>
          <button onClick={addLeave} class="btn btn-success">
            Add Leave
          </button>
        </form>
      </div>
    </>
  );
}
