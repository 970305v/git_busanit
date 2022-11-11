const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // hashCode Generate

const saltRounds = 10; // hash 암호화 횟수
const db = require("../db/conn");

// middleware
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// url
router.post("/emailCheck", (req, res) => {
  // email 중복확인
  let sql = "SELECT COUNT(*) AS 'COUNT' FROM member WHERE mEmail = ?;";
  db.query(sql, [req.body.email], (err, result) => {
    if (result[0].COUNT === 0) {
      res.send({ status: 201, msg: "사용가능한 아이디" });
    } else {
      res.send({ status: 404, msg: "사용 불가능한 아이디" });
    }
  });
});

router.post("/register", (req, res) => {
  const user = {
    email: req.body.email,
    username: req.body.username,
    phone: req.body.phone,
    zipcode: req.body.zipcode,
    address: req.body.address,
    address2: req.body.address2,
  };
  let sql =
    "INSERT INTO member(mId, mEmail, mPwd, mName, mPhone, mPostnum, mAddr1, mAddr2) VALUES(NULL, ?, ?, ?, ?, ?, ?, ?);";
  bcrypt.hash(req.body.passwd, saltRounds, function (err, hash) {
    db.query(
      sql,
      [
        user.email,
        hash,
        user.username,
        user.phone,
        user.zipcode,
        user.address,
        user.address2,
      ],
      (err) => {
        if (err) {
          throw err;
        } else {
          res.send({
            status: 201,
            msg: "회원가입을 축하드립니다.",
            email: req.body.email,
            token: hash,
          });
        }
      }
    );
  });
});

router.post("/login", (req, res) => {
  let sql = "SELECT * FROM member WHERE mEmail = ?;";
  db.query(sql, [req.body.email], (err, user) => {
    if (user[0] === undefined) {
      res.send({ status: 404, msg: "찾을수 없는 사용자입니다." });
    } else {
      bcrypt.compare(req.body.passwd, user[0].mPwd, (err, result) => {
        if (result) {
          res.send({
            token: user[0].mPwd,
            status: 201,
          });
        } else {
          res.send({ status: 400, msg: "비밀번호를 확인해주세요." });
        }
      });
    }
  });
});

module.exports = router;
