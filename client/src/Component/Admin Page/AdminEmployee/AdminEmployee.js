import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./AdminEmployee.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Link } from "react-router-dom";
// import { format } from "date-fns";

export default function AdminEmployees() {
  const [employeeList, setEmployeeList] = useState([]);

  Axios.get("http://localhost:3001/employees").then((response) => {
    setEmployeeList(response.data);
  });

  

  return (
    <>
      <AdminNavbar />
      <div className="middle">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/admin/addemployee" class="btn btn-primary me-md-2 middle">
            เพิ่มพนักงาน
          </Link>
        </div>
        <table class="table">
          <thead>
            <tr className="middle">
              <th scope="col">ID</th>
              <th scope="col">รูป</th>
              <th scope="col">ชื่อ-นามสกุล</th>
              <th scope="col">เพศ</th>
              <th scope="col">วันเกิด</th>
              <th scope="col">ตำแหน่งงาน</th>
              <th scope="col">ตำแหน่ง</th>
              <th scope="col">เบอร์โทร</th>
              <th scope="col">อีเมล</th>
              <th scope="col">บ้านเลขที่</th>
              <th scope="col">หมู่</th>
              <th scope="col">ถนน</th>
              <th scope="col">ตำบล/แขวง</th>
              <th scope="col">อำเภอ/เขต</th>
              <th scope="col">จังหวัด</th>
              <th scope="col">รหัสไปรษณีย์</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((val) => {
              
              var date = new Date(val.birthday);

              const result = date.toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              
              return (
                <tr className="middle">
                  <th scope="row">{val.employeeid}</th>
                  <td>{val.pic}</td>
                  <td>{val.employeename}</td>
                  <td>{val.gender ? "ชาย" : "หญิง"}</td>
                  {/* <td input type={date}>{val.birthday.substring(0, 10)}</td> */}
                  <td>{result}</td>
                  <td>{val.jobposition}</td>
                  <td>{val.position}</td>
                  <td>{val.phoneno}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>
                  <td>{val.moo}</td>
                  <td>{val.street}</td>
                  <td>{val.disdrict}</td>
                  <td>{val.ambhur}</td>
                  <td>{val.province}</td>
                  <td>{val.zipcode}</td>
                  <td>
                    <Link
                      class="btn btn-warning"
                      to={"/admin/edit/employee/" + val.employeeid}
                    >
                      แก้ไข
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
