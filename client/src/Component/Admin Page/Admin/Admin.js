import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./Admin.css";
import { useState } from "react";
import Axios from "axios";

import { ComposedChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector } from 'recharts';
const data = [{
  name: 'Page A',
  work: 4000,
  miss: 2400,
  late: 2400,
}];

const data01 = [{
  value: 70
},
{
  value: 10
},
{
  value: 20
},
];
const COLORS = ['#008800', '#c83232', '#ffe100'];

const data02 = [
  {
    name: 'มกราคม',
    uv: 40,
    pv: 20,
    amt: 20,
  },
  {
    name: 'กุมภาพันธ์',
    uv: 30,
    pv: 18,
    amt: 20,
  },
  {
    name: 'มีนาคม',
    uv: 40,
    pv: 20,
    amt: 20,
  },
  {
    name: 'เมษายน',
    uv: 40,
    pv: 20,
    amt: 20,
  },
  {
    name: 'พฤษภาคม',
    uv: 30,
    pv: 18,
    amt: 20,
  },
  {
    name: 'มิถุนายน',
    uv: 40,
    pv: 20,
    amt: 20,
  },
  {
    name: 'กรกฎาคม',
    uv: 40,
    pv: 20,
    amt: 20,
  },
  {
    name: 'สิงหาคม',
    uv: 30,
    pv: 18,
    amt: 20,
  },
  {
    name: 'กันยายน',
    uv: 40,
    pv: 20,
    amt: 30,
  },
  {
    name: 'ตุลาคม',
    uv: 50,
    pv: 20,
    amt: 40,
  },
  {
    name: 'พฤศจิกายน',
    uv: 30,
    pv: 13,
    amt: 20,
  },
  {
    name: 'ธันวาคม',
    uv: 40,
    pv: 20,
    amt: 40,
  },
];

const RADIAN = Math.PI / 180;
function renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

export default function Admin() {
  const [employeeList, setEmployeeList] = useState([]);

  Axios.get("http://localhost:3001/employees").then((response) => {
    setEmployeeList(response.data);
  });


  const [count, setCount] = useState(null)

  fetch('http://localhost:3001/employees')
    .then((data) => data.jason())
    .then((result) => {
      console.log(result)
      setCount(result.items[0].statisics.setCount)
    })


  return (
    <>
      <AdminNavbar />

      <div className="row">
        <div className="row">
          <div className="col-sm-4">
            <div className="card1">
              <div className="card-body">
                <front1 className="card-title">จำนวนพนักงาน</front1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <front2 className="card-title">30 / 30
                  </front2>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="col-sm-4">
            <div className="card2">
              <div className="card-body">
                <front1 className="card-title">จำนวนพนักงานขาดงาน</front1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <front2 className="card-title">30 / 30
                  </front2>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="col-sm-4">
            <div className="card3">
              <div className="card-body">
                <front1 className="card-title">จำนวนพนักงานที่ลางาน</front1>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <front2 className="card-title">30 / 30
                  </front2>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="col-sm-8 ">
            <div className="card4">
              <div className="card-body d-grid gap-2 d-md-flex">
                <BarChart
                
                  width={1280}
                  height={300}
                  data={data02}
                  margin={{
                    top: 0,
                    right: 70,
                    left: -15,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="1" />
                  <XAxis dataKey="name" />
                  <YAxis unit="คน" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#329632" />
                  <Bar dataKey="amt" fill="#c83232" />
                  <Bar dataKey="uv" fill="#ffe100" />
                  
                </BarChart>
              </div>
            </div>
            <br />
          </div>
          <div className="col-sm-4">
            <div className="card4">
              <div className="card-body">
                <ComposedChart
                  width={645}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 70,
                    left: -15,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid stroke="#ccc" strokeDasharray=" 1" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="work" stroke="#329632" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="miss" stroke="#c83232" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="late" stroke="#ffe100" activeDot={{ r: 8 }} />

                </ComposedChart>
              </div>
            </div>
            <br />
          </div>
            <div className="card">
              <div className="card-body">
                <front4 className="card-title">การผ่านการอบรมของพนักงาน</front4 >
                <div className="card3">
                  <front3 className="card-title">รายชื่อพนักงาน</front3>
                  <div className="d-grid gap-2 d-md-flex">
                    <front2 className="card-title">{employeeList.map((val) => {
                      return (
                        <div>
                          <b>{val.employeename}</b>
                        </div>
                      );
                    })}

                    </front2>

                    <ComposedChart
                      layout="vertical"
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" scale="band" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="work" barSize={20} fill="#413ea0" />
                      <Bar dataKey="miss" barSize={20} fill="#413ea0" />
                      <Bar dataKey="late" barSize={20} fill="#413ea0" />
                    </ComposedChart>
                    <PieChart width={300} height={300}>
                      <Pie
                        data={data01}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>
            <br />



        </div>
      </div>

    </>
  );
}
