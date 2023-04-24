import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminEditLeave() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [l_subject, setSubject] = useState("");
  const [l_limit_m, setLimit_m] = useState("");
  const [l_limit_y, setLimit_y] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(`http://localhost:3001/leave/${id}`).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setData(resp);
        setSubject(resp[0].l_subject);
        setLimit_m(resp[0].l_limit_m);
        setLimit_y(resp[0].l_limit_y);
      });
    });
  }
  // console.log(data);

  const navigate = useNavigate();

  const updateLeave = (event) => {
    event.preventDefault();
    if (
      l_subject === "" ||
      l_limit_m === "" ||
      l_limit_y === "" 
    ) {
      console.log("Enter all information");
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเพิ่มข้อมูลได้",
        text: "กรุณากรอกข้อมูลให้ครบ",
      });
    } else if (
      l_subject !== "" ||
      l_limit_m !== "" ||
      l_limit_y !== ""
    ) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "เพิ่มข้อมูลสำเร็จ",
        showConfirmButton: false,
        timer: 2500,
      });
      Axios.put(`http://localhost:3001/update/leave/${id}`, {
        l_subject: l_subject,
        l_limit_m: l_limit_m,
        l_limit_y: l_limit_y
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
            <label className="form-label" htmlFor="subject">
            หัวข้อการลา
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={l_subject}
              required
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="limit_m">
            เกณฑ์การลารายเดือน
            </label>
            <input
              type="number" min="1" max="5"
              className="form-control"
              placeholder="Enter name"
              value={l_limit_m}
              required
              onChange={(event) => {
                setLimit_m(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="limit_y">
            เกณฑ์การลารายปี
            </label>
            <input
              type="number" min="1" max="5"
              className="form-control"
              placeholder="Enter name"
              value={l_limit_y}
              required
              onChange={(event) => {
                setLimit_y(event.target.value);
              }}
            />
          </div>
          <button onClick={updateLeave} class="btn btn-success">
            Add Leave
          </button>
        </form>
      </div>
    </>
  );
}