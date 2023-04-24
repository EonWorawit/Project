import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./AddEmployee.css";
import Swal from "sweetalert2";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminAddTeam() {
  const [data, setData] = useState([]);
  Axios.get("http://localhost:3001/employees").then((response) => {
    setData(response.data);
  });

  const navigate = useNavigate();

  const [teamname, setTeamname] = useState("");
  const [leadername, setLeadername] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");
  const [member5, setMember5] = useState("");
  const [leader, setLeader] = useState(false);

  const addTeam = (event) => {
    event.preventDefault();


      if (data === "Username already registered") {
        Swal.fire({
          icon: "error",
          title: "ไม่สามารถเพิ่มข้อมูลได้",
          text: "ชื่อทีมนี้ถูกใช้ไปแล้ว",
        });
      } else if (
        teamname === "" ||
        leadername === "" ||
        member1 === "" ||
        member2 === "" ||
        leader === ""
      ) {
        console.log("Enter all information");
        Swal.fire({
          icon: "error",
          title: "ไม่สามารถเพิ่มข้อมูลได้",
          text: "กรุณากรอกข้อมูลให้ครบ",
        });
      } else if (leadername !== leader) {
        console.log("Enter all information");
        Swal.fire({
          icon: "error",
          title: "ไม่สามารถเพิ่มข้อมูลได้",
          text: "การยืนยันหัวหน้าทีมไม่ตรงกัน",
        });
      } else if (
        teamname !== "" ||
        leadername !== "" ||
        member1 !== "" ||
        member2 !== "" ||
        leader !== ""
      ) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "เพิ่มข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 2500,
        });
        Axios.post("http://localhost:3001/create/team", {
          teamname: teamname,
          leadername: leadername,
          member1: member1,
          member2: member2,
          member3: member3,
          member4: member4,
          member5: member5,
          leader: leader,
        });
        navigate("/admin/team");
      }
  };

  return (
    <>
      <AdminNavbar />
      <br />
      <div className="form-container1">
        <form className="form-signin row g-3">
          <div>
            <h2>เพิ่มทีม</h2>
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="teamname">
              ชื่อทีม
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              required
              onChange={(event) => {
                setTeamname(event.target.value);
              }}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">หัวหน้าทีม</label>
            <select
              className="form-select"
              htmlFor="leadername"
              required
              onChange={(event) => {
                setLeadername(event.target.value);
              }}
            >
              <option>กรุณาเลือกหัวหน้าทีม</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">สมาชิกในทีม 3</label>
            <select
              className="form-select"
              htmlFor="member3"
              onChange={(event) => {
                setMember3(event.target.value);
              }}
            >
              <option>กรุณาเลือกสมาชิกในทีม 3</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">สมาชิกในทีม 1</label>
            <select
              className="form-select"
              htmlFor="member1"
              required
              onChange={(event) => {
                setMember1(event.target.value);
              }}
            >
              <option>กรุณาเลือกสมาชิกในทีม 1</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">สมาชิกในทีม 4</label>
            <select
              className="form-select"
              htmlFor="member4"
              onChange={(event) => {
                setMember4(event.target.value);
              }}
            >
              <option>กรุณาเลือกสมาชิกในทีม 4</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">สมาชิกในทีม 2</label>
            <select
              className="form-select"
              htmlFor="member2"
              required
              onChange={(event) => {
                setMember2(event.target.value);
              }}
            >
              <option>กรุณาเลือกสมาชิกในทีม 2</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">สมาชิกในทีม 5</label>
            <select
              className="form-select"
              htmlFor="member5"
              onChange={(event) => {
                setMember5(event.target.value);
              }}
            >
              <option>กรุณาเลือกสมาชิกในทีม 5</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>
          <div className="col-md-12">
            <label className="form-label">กรุณายืนยันชื่อหัวหน้าทีม</label>
            <select
              className="form-select"
              htmlFor="leader"
              required
              onChange={(event) => {
                setLeader(event.target.value);
              }}
            >
              <option>กรุณายืนยันชื่อหัวหน้าทีม</option>
              {data.map((val) => {
                return <option>{val.employeename}</option>;
              })}
            </select>
          </div>

          <button onClick={addTeam} class="btn btn-success">
            Add Team
          </button>
        </form>
      </div>
    </>
  );
}
