import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function AdminNoti() {
  return (
    <>
      <AdminNavbar />
      <div className="container">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-6"
        >
          <Tab eventKey="home" title="การแจ้งเตือนทั้งหมด">
            <br />
            <p>การแจ้งเตือนทั้งหมด</p>
          </Tab>
          <Tab eventKey="profile" title="การแจ้งเตือนการลา">
            <br />
            <p>การแจ้งเตือนการลา</p>
          </Tab>
          <Tab eventKey="contact" title="การแจ้งเตือนทีม">
            <br />
            <p>การแจ้งเตือนทีม</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
