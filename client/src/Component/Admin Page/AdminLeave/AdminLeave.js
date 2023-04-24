import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function AdminLeave() {
  const [leave, setLeave] = useState([]);
    const [deleteL, setDeleteL] = useState([]);
    Axios.get("http://localhost:3001/leave").then((response) => {
        setLeave(response.data);
    });
    const deleteLeave = (id)=> {
      Axios.delete(`http://localhost:3001/delete/leave/${id}`).then((res) => {
        setDeleteL(res.data);
      })
    }
    return (
        <>
            <AdminNavbar />
            <div className='container'>
                <div className='d-flex flex-row-reverse bd-highlight'>
                    <Link to="/admin/addleave" className='btn btn-primary'>เพิ่มหัวข้อการลา</Link>
                </div><hr />
                <div className="row">
                {leave.map(val => (
                        <div className="col-md-4">
                            <div className="card">
                            <h3 class="card-header">{val.l_subject}</h3>
                                <div className="card-body">
                                    <h4 className="card-title"><b>เกณฑ์การลารายเดือน</b></h4>
                                    <p className="card-text">{val.l_limit_m}</p>
                                    <h4 className="card-title"><b>เกณฑ์การลารายปี</b></h4>
                                    <p className="card-text">{val.l_limit_y}</p>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button onClick={()=> deleteLeave(val.historyid)}  class="btn btn-danger">ลบ</button>
                                        <Link to={"/admin/editleave/" + val.historyid} class="btn btn-warning ">แก้ไขเกณฑ์การลา</Link>
                                    </div>
                                </div>
                            </div><br />
                        </div>
                ))}
                </div>
            </div>
        </>
    );
}
