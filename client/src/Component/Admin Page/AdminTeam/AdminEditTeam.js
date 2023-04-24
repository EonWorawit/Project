import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import "./AddEmployee.css";
import Swal from "sweetalert2";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminEditTeam() {
  const { id } = useParams();
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
  const [leader, setLeader] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(`http://localhost:3001/team/${id}`).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setData(resp);
        setTeamname(resp[0].teamname);
        setLeadername(resp[0].leadername);
        setMember1(resp[0].member1);
        setMember2(resp[0].member2);
        setMember3(resp[0].member3);
        setMember4(resp[0].member4);
        setMember5(resp[0].member5);
        setLeader(resp[0].leader);
      });
    });
  }

  const updateTeam = (event) => {
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
        title: "ไม่สามารถเพิ่มทีมได้",
        text: "กรุณากรอกข้อมูลให้ครบ",
      });
    } else if (leadername !== leader) {
      console.log("Enter all information");
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถแก้ไขทีมได้",
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
        title: "แก้ไขทีมสำเร็จ",
        showConfirmButton: false,
        timer: 2500,
      });
      Axios.put(`http://localhost:3001/update/team/${id}`, {
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
              value={teamname}
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
              value={leadername}
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
              value={member3}
              onChange={(event) => {
                setMember3(event.target.value);
              }}
            >
              <option value={""}>กรุณาเลือกสมาชิกในทีม 3</option>
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
              value={member1}
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
              value={member4}
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
              value={member2}
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
              value={member5}
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

          <button onClick={updateTeam} class="btn btn-success">
            Update Team
          </button>
        </form>
      </div>
    </>
  );
}
