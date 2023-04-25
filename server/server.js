const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const bcrypt = require("bcrypt");
var session = require("express-session");
const { response } = require("express");

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "my_super_secret",
    resave: false,
    saveUninitialized: false,
  })
);

const pool = new Pool({
  user: "mogzpyxa",
  host: "john.db.elephantsql.com",
  database: "mogzpyxa",
  password: "5RSfyhJ-AlXND2PGFwgzVlVCPUzlEnCt",
  port: 5432,
});

app.get("/employee/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM employees WHERE employeeid = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    }
  );
});

app.get("/employees", (req, res) => {
  pool.query(
    "SELECT * FROM employees ORDER BY employeeid ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result.rows);
      }
    }
  );
});

app.post("/create", async (req, res) => {
  const {
    username,
    password,
    identityNo,
    jobPosition,
    position,
    employeeName,
    gender,
    birthday,
    phoneNo,
    email,
    address,
    moo,
    street,
    disdrict,
    ambhur,
    province,
    zipCode,
    pic,
  } = req.body;
  hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  pool.query(
    `SELECT * FROM employees
        WHERE username = $1`,
    [username],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.rows.length > 0) {
        console.log("Username already registered");
        return res.status(400).json("Username already registered");
      } else {
        pool.query(
          "INSERT INTO employees (username,password,identityNo,jobPosition,position,employeeName,gender,birthday,phoneNo,email,address,moo,street,disdrict,ambhur,province,zipCode,pic)VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)",
          [
            username,
            hashedPassword,
            identityNo,
            jobPosition,
            position,
            employeeName,
            gender,
            birthday,
            phoneNo,
            email,
            address,
            moo,
            street,
            disdrict,
            ambhur,
            province,
            zipCode,
            pic,
          ],
          (err, results) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Success");
              res.redirect("/");
            }
          }
        );
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = pool.query(
    "SELECT * FROM employees WHERE username = $1", 
    // เลือข้อมูลเพียงเเค่ username ทำให้ error
    [username],
    (err, employees) => {
      bcrypt.compare(
        password,
        employees?.rows[0].password,
        function (err, isCorrect) {
          if (isCorrect) {
            req.session.user = user;
            let isAdmin = employees?.rows[0].isadmin;
            if (isAdmin !== true) {
              console.log("not Admin");
              return res.status(200).json("not Admin");
            } else {
              console.log("im Admin");
              return res.status(200).json("im Admin");
            }
          }
          if (err) {
            return res.status(400).json("Error");
          }
        }
      );
    }
  );
});

app.post("/addEvent", (req, res) => {
  const {
    subject,
    // location,
    date,
    s_time,
    e_time,
    detail,
    latitude,
    longitude,
  } = req.body;
  pool.query(
    "INSERT INTO calendar (subject, date, s_time, e_time, detail, latitude, longitude)VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [subject, date, s_time, e_time, detail, latitude, longitude],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    }
  );
});

app.get("/events", (req, res) => {
  pool.query(
    "SELECT * FROM public.calendar ORDER BY calendarid ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result.rows);
      }
    }
  );
});

app.put("/update/employee/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const {
    jobPosition,
    position,
    employeeName,
    phoneNo,
    email,
    address,
    moo,
    street,
    disdrict,
    ambhur,
    province,
    zipCode,
    pic,
  } = req.body;
  pool.query(
    "UPDATE employees SET jobposition = $1, position = $2, employeename = $3, phoneno = $4, email = $5, address = $6, moo = $7, street = $8, disdrict = $9, ambhur = $10, province = $11, zipCode = $12, pic = $13 WHERE employeeid = $14",
    [
      jobPosition,
      position,
      employeeName,
      phoneNo,
      email,
      address,
      moo,
      street,
      disdrict,
      ambhur,
      province,
      zipCode,
      pic,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
});

app.get("/teams", (req, res) => {
  pool.query("SELECT * FROM teams ORDER BY teamid ASC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

app.post("/create/team", (req, res) => {
  const {
    teamname,
    leadername,
    member1,
    member2,
    member3,
    member4,
    member5,
    leader,
  } = req.body;
  pool.query(
    "SELECT * FROM teams WHERE teamname = $1",
    [teamname],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.rows.length > 0) {
        console.log("Username already registered");
        return res.status(200).json("Username already registered");
      } else {
        pool.query(
          "INSERT INTO teams (teamname, leadername, member1, member2, member3, member4, member5, leader )VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
          [
            teamname,
            leadername,
            member1,
            member2,
            member3,
            member4,
            member5,
            leader,
          ],
          (err, results) => {
            if (err) {
              console.log(err);
            } else {
              console.log(results);
            }
          }
        );
      }
    }
  );
});

app.get("/team/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM teams WHERE teamid = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.send(results.rows);
    }
  );
});

app.put("/update/team/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const {
    teamname,
    leadername,
    member1,
    member2,
    member3,
    member4,
    member5,
    leader,
  } = req.body;
  pool.query("UPDATE teams SET teamname = $1, leadername = $2, member1 = $3, member2 = $4, member3 = $5, member4 = $6, member5 = $7, leader = $8 WHERE teamid = $9",
  [ teamname, leadername, member1, member2, member3, member4, member5, leader, id],
  (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(`Team Update with ID: ${id}`);
  });
});

app.delete("/delete/team/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM teams WHERE teamid = $1", [id], (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(`Team Deleted with ID: ${id}`);
  });
});

app.get("/leave", (req, res) => {
  pool.query("SELECT * FROM history ORDER BY historyid ASC ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

app.post("/create/leave", async (req, res) => {
  const { l_subject, l_limit_m, l_limit_y } = req.body;
  pool.query(
    "SELECT * FROM history WHERE l_subject = $1",
    [l_subject],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.rows.length > 0) {
        console.log("Leave already registered");
        return res.status(400).json("Leave already registered");
      } else {
        pool.query(
          "INSERT INTO history (l_subject ,l_limit_m ,l_limit_y)VALUES ($1 ,$2 ,$3)",
          [l_subject, l_limit_m, l_limit_y],
          (err, results) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Success");
              // return res.status(200).json("Success");
            }
          }
        );
      }
    }
  );
});

app.get("/leave/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM history WHERE historyid = $1",
    [id],
    (error, result) => {
      if (error) {
        console.log(error);;
      }
      res.send(result.rows);
      console.log(result.rows);
    }
  );
});

app.put("/update/leave/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { l_subject, l_limit_m, l_limit_y } = req.body;
  pool.query("UPDATE history SET l_subject = $1, l_limit_m = $2, l_limit_y = $3 WHERE historyid = $4",
  [l_subject, l_limit_m, l_limit_y, id],
  (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(`User modified with ID: ${id}`);
  })
})

app.delete("/delete/leave/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM history WHERE historyid = $1", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(`User Deleted with ID: ${id}`);
  });
});


app.listen(3001, () => {
  console.log("Server run on localhost:3001");
});
