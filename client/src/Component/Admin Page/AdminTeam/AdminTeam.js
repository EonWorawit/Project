import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function WithHeaderExample() {
  const [teamList, setTeamList] = useState([]);
  const [delTeam, setDelTeam] = useState([]);


  Axios.get("http://localhost:3001/teams").then((response) => {
    setTeamList(response.data);
  });
  const deleteTeam = (id) => {
    Axios.delete(`http://localhost:3001/delete/team/${id}`).then((res) => {
      setDelTeam(res.data);
    });
  };
  return (
    <>
      <AdminNavbar />
      <div className="container">
        <div className="d-flex flex-row-reverse bd-highlight">
          <Link to="/admin/addteam" className="btn btn-primary">
            เพิ่มทีม
          </Link>
        </div>
        <hr />
        {teamList.map((val) => (
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <h3 class="card-header">ทีม {val.teamname}</h3>
                <div className="card-body">
                  <h4 className="card-title">
                    <b>หัวหน้าทีม</b>
                  </h4>
                  <p className="card-text">{val.leadername}</p>
                  <h4 className="card-title">
                    <b>สมาชิกในทีม</b>
                  </h4>
                  <p className="card-text">1. {val.member1}</p>
                  <p className="card-text">2. {val.member2}</p>
                  <p className="card-text">{val.member3 ? `3. ${val.member3}`: null }</p>
                  <p className="card-text">{val.member4 ? `4. ${val.member3}`: null }</p>
                  <p className="card-text">{val.member5 ? `5. ${val.member3}`: null }</p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      onClick={() => Swal.fire({
                        title: 'คุณต้องการลบทีมใช่หรือไม่?',
                        // text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'ใช่! ฉันต้องการลบ',
                        cancelButtonText: 'ยกเลิก'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteTeam(val.teamid)
                          Swal.fire(
                            'ลบสำเร็จ!',
                            'คุณได้ลบทีมสำเร็จ',
                            'success'
                          )
                        }
                      })}
                      class="btn btn-danger"
                    >
                      ลบทีม
                    </button>
                    <Link to={"/admin/edit/team/" + val.teamid} class="btn btn-warning ">
                      แก้ไขทีม
                    </Link>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WithHeaderExample;
