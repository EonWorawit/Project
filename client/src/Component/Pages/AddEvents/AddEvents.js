import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



export default function AddEvents() {
    const [value, setValue] = React.useState(dayjs('today'));
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };

  return (
    <>
    <Navbar/>
    <br/>
    <div className="form-container">
        <form className="form-signin row g-3">
            <div>
                <h2>Add Event</h2>
            </div>
            <div className="col-md-6">
                <label htmlfor="" className="form-label">หัวข้อ</label>
                <input className="form-control" name="subject" />
            </div>
            <div className="col-md-6">
                <label htmlfor="" className="form-label">สถานที่ทำงาน</label>
                <input className="form-control" name="location" />
            </div>
            <div className="col-md-4">
            <label htmlfor="" class="form-label">วันที่</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                        className="form-control"
                        label=""
                        name="date"
                        inputFormat="DD/MM/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>
            {/* <div class="col-md-6">
                <label htmlfor="" class="form-label">วันที่</label>
                <input className="form-control" name="date" />
            </div> */}
            <div class="col-md-4">
            <label htmlfor="" className="form-label">เวลาเริ่มงาน</label>
                <TextField
                    className="form-control"
                    id="time"
                    label=""
                    type="time"
                    defaultValue="00:00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 476 }}
                />
                {/* <label htmlfor="" className="form-label">เวลาเริ่มงาน</label>
                <input className="form-control" name="s_time" /> */}
            </div>
            <div className="col-md-4">
                <label htmlfor="" className="form-label">เวลาเลิกงาน</label>
                <TextField
                    className="form-control"
                    id="time"
                    label=""
                    type="time"
                    defaultValue="00:00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 476 }}
                />
            </div>
            <div className="col-md-12">
                <label htmlfor="" className="form-label">รายละเอียดงาน</label>
                <input className="form-control" name="detail" />
            </div>
            <div className="col-md-6">
                <label htmlfor="" className="form-label">ละจิจูด</label>
                <input className="form-control" name="latitude" />
            </div>
            <div className="col-md-6">
                <label htmlfor="" className="form-label">ลองจิจูด</label>
                <input className="form-control" name="longitude" />
            </div><br/>

            <button className="btn btn-primary btn-block" type="submit">Add Event</button>
        </form>
    </div>
    
    </>
  );
}
