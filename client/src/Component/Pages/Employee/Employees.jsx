import React from "react";
import { useState } from "react";
import Axios from "axios";
import './Employee.css'
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";

export default function Employees () {
    const [employeeList, setEmployeeList] = useState([]);
  
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
    return (
      <>
        <Navbar/>
        <div className="middle">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">ชื่อ-นามสกุล</th>
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
                return (
                  <tr>
                    <th scope="row">{val.employeeid}</th>
                    <td>{val.employeename}</td>
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
                      <a class="btn btn-warning" href="/empolyee/editEmpolyee">
                        แก้ไข
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    )
}