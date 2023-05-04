import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";
import Swal from "sweetalert2";
import AdminNavbar from "../AdminNavbar/AdminNavbar";




export default function AddEmployee() {
  const [data1, setData1] = useState([]);
  Axios.get("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json").then((response) => {
    setData1(response.data);
  });

  const [data2, setData2] = useState([]);
  Axios.get("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json").then((response) => {
    setData2(response.data);
  });

  const [data3, setData3] = useState([]);
  Axios.get("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json").then((response) => {
    setData3(response.data);
  });



  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [identityNo, setIdentityNo] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [position, setPosition] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [moo, setMoo] = useState("");
  const [street, setStreet] = useState("");
  const [disdrict, setDisdrict] = useState("");
  const [ambhur, setAmbhur] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [pic, setPic] = useState("");
  console.log("🚀 ~ file: AddEmployee.js:30 ~ AddEmployee ~ pic:", pic)

  function handleImage(event) {
    console.log(event.target.files);
    setPic(event.target.files[0])
  }

  const addEmployee = (event) => {
    event.preventDefault();
    try {
      if (
        username === "" ||
        password === "" ||
        identityNo === "" ||
        jobPosition === "" ||
        position === "" ||
        employeeName === "" ||
        gender === "" ||
        birthday === "" ||
        phoneNo === "" ||
        email === "" ||
        address === "" ||
        moo === "" ||
        street === "" ||
        disdrict === "" ||
        ambhur === "" ||
        province === "" ||
        zipCode === "" ||
        pic === ""
      ) {
        console.log("Enter all information");
        Swal.fire({
          icon: "error",
          title: "ไม่สามารถเพิ่มข้อมูลได้",
          text: "กรุณากรอกข้อมูลให้ครบ",
        });
      } else if (
        username !== "" ||
        password !== "" ||
        identityNo !== "" ||
        jobPosition !== "" ||
        position !== "" ||
        employeeName !== "" ||
        gender !== "" ||
        birthday !== "" ||
        phoneNo !== "" ||
        email !== "" ||
        address !== "" ||
        moo !== "" ||
        street !== "" ||
        disdrict !== "" ||
        ambhur !== "" ||
        province !== "" ||
        zipCode !== "" ||
        pic !== ""
      ) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "เพิ่มข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 2500,
        });
        Axios.post("http://localhost:3001/create", {
          username: username,
          password: password,
          identityNo: identityNo,
          jobPosition: jobPosition,
          position: position,
          employeeName: employeeName,
          gender: gender,
          birthday: birthday,
          phoneNo: phoneNo,
          email: email,
          address: address,
          moo: moo,
          street: street,
          disdrict: disdrict,
          ambhur: ambhur,
          province: province,
          zipCode: zipCode,
          pic: pic,
        });
        navigate("/admin/employee");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdminNavbar />
      
      <br />
      <div className="form-container1">
        <form className="form-signin row g-3" enctype='multipart/form-data' >
          <div>
            <h2>เพิ่มพนักงาน</h2>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="username">
              รหัสผู้ใช้งาน:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              required
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="password">
              รหัสผ่าน:
            </label>
            <input
              type="password"
              className="form-control"
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="identityNo">
              รหัสบัตรประชาชน:
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setIdentityNo(event.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">ตำแหน่งงาน:</label>
            <select
              className="form-select"
              htmlFor="jobPosition"
              required
              onChange={(event) => {
                setJobPosition(event.target.value);
              }}
            >
              <option>กรุณาเลือก</option>
              <option>Devepoler</option>
              <option>System Analysis</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">ตำแหน่ง:</label>
            <select
              className="form-select"
              htmlFor="position"
              required
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            >
              <option>กรุณาเลือก</option>
              <option>หัวหน้าพนักงาน</option>
              <option>พนักงาน</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="employeeName">
              ชื่อ - นามสกุล:
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setEmployeeName(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label htmlfor="" class="form-label">
              วันเกิด
            </label>
            <input
              className="form-control"
              id="date"
              label="Birthday"
              type="date"
              defaultValue="today"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">เพศ</label>
            <select
              className="form-select"
              htmlFor="gender"
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              <option>กรุณาเลือก</option>
              <option value={true}>ชาย</option>
              <option value={false}>หญิง</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="phoneNo">
              เบอร์โทร:
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setPhoneNo(event.target.value);
              }}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="email">
              อีเมล:
            </label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label" htmlFor="address">
              บ้านเลขที่:
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="col-md-1">
            <label className="form-label" htmlFor="moo">
              หมู่:
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setMoo(event.target.value);
              }}
            />
          </div>
          <div className="col-md-1">
            <label className="form-label" htmlFor="street">
              ถนน:
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setStreet(event.target.value);
              }}
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">จังหวัด:</label>
            <select class="notselected" name="province" id="province"
              className="form-select"
              htmlFor="province"
              required
              showSearch
              onChange={(event) => {
                setProvince(event.target.value);
              }}
            >
              <option>กรุณาเลือกจังหวัด</option>
              {data3.map((val) => {
                return <option>{val.name_th}</option>;
              })}
            </select>
          </div>
          
          <div className="col-md-2">
            <label className="form-label">อำเภอ/เขต:</label>
            <select
              className="form-select"
              htmlFor="ambhur"
              required
              onChange={(event) => {
                setAmbhur(event.target.value);
              }}
            >
              <option>กรุณาเลือกอำเภอ/เขต</option>
              {data2.map ((val) => {
                return <option>{val.name_th}</option>;
              })}
            </select>
          </div>
          
          <div className="col-md-2">
            <label className="form-label">ตำบล/แขวง:</label>
            <select
              className="form-select"
              htmlFor="districts"
              required
              onChange={(event) => {
                setDisdrict(event.target.value);
              }}
            >
              <option>กรุณาเลือกตำบล/แขวง</option>
              {data1.map((val) => {
                return <option>{val.name_th}</option>;
              })}
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">รหัสไปรษณีย์:</label>
            <select 
              className="form-select"
              htmlFor="zipCode"
              required
              onChange={(event) => {
                setZipCode(event.target.value);
              }}
            >
              <option>กรุณาเลือกรหัสไปรษณีย์</option>
              {data1.map((val) => {
                return <option>{val.zip_code}</option>;
              })}
            </select>
          </div>
          
          <div className="col-md-12">
            <label className="form-label" htmlFor="pic">
              อัพโหลดรูปภาพ:
            </label>
            <input
              type="file"
              className="form-control"
              htmlFor="pic"
              requires
              onChange={handleImage}
            />
          </div>
          <button onClick={addEmployee} class="btn btn-success">
            Add Employee
          </button>
        </form>
      </div>
    </>
  );
}
