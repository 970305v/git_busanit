const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // hashCode Generate
const multer = require("multer");

const saltRounds = 10; // hash 암호화 횟수
const db = require("../db/conn");

// middleware
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(express.static("uploads"));

// multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_qna_" + file.originalname);
  },
});
const upload = multer({ storage });

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
            idx: user[0].mId,
            token: user[0].mPwd,
            auth: user[0].mAuth,
            status: 201,
          });
        } else {
          res.send({ status: 400, msg: "비밀번호를 확인해주세요." });
        }
      });
    }
  });
});

router.get("/mypage/:idx", (req, res) => {
  let sql = "SELECT * FROM member WHERE mId = ?;";
  db.query(sql, [req.params.idx], (err, user) => {
    if (err) {
      throw err;
    }
    res.send({ status: 200, user });
  });
});

router.get("/qna", (req, res) => {
  const page = req.query.page;
  const offset = parseInt(req.query.offset);
  const startNums = page * offset;

  const search = req.query.searchQuery || "";
  const qnaSearch = "%" + search + "%";

  let sql = "SELECT COUNT(qId) AS count FROM qna WHERE qTitle LIKE ?;";
  db.query(sql, [qnaSearch], (err, result) => {
    if (err) {
      throw err;
    } else {
      let dataSql =
        "SELECT qna.*, product.pId, product.pName, product.pImage1, member.mEmail FROM qna LEFT JOIN product ON qna.pId = product.pId LEFT JOIN member ON qna.mId = member.mId WHERE qna.qTitle LIKE ? ORDER BY qId DESC LIMIT ?, ?;";
      db.query(dataSql, [qnaSearch, startNums, offset], (err, users) => {
        if (err) {
          throw err;
        } else {
          res.json({
            users: users,
            page: page, // 1, 2, 3 ... 페이지
            totalPageNumber: Math.ceil(result[0].count / offset), // 전체 페이지 수
            totalRows: result[0].count, // 전체 사용자 수
          });
        }
      });
    }
  });
});

router.get("/qna/:idx", (req, res) => {
  let sql =
    "SELECT * FROM qna LEFT JOIN qna_comment ON qna.qId = qna_comment.qId WHERE qna.qId = ?;";
  db.query(sql, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    }
    res.send({ status: 200, result });
  });
});

router.post("/qna/:idx", (req, res) => {
  let sql =
    "INSERT INTO qna_comment(qcId, qId, qcWriter, qcContent) VALUES(NULL, ?, ?, ?);";
  db.query(
    sql,
    [req.params.idx, req.body.qcWriter, req.body.qcContent],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send({ status: 201, msg: "작성완료" });
    }
  );
});

router.post("/qnaproduct", (req, res) => {
  let sql = "SELECT pId, pName FROM product WHERE pName LIKE ?";
  const searchValue = "%" + req.body.qSearch + "%";
  db.query(sql, [searchValue], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({ status: 201, result });
    }
  });
});

router.post("/qnawrite", upload.single("qFile"), (req, res) => {
  const { qCategory, mId, qTitle, qContent } = req.body;
  const qSecret = JSON.parse(req.body.qSecret);
  const { filename } = req.file || "";
  const pId = JSON.parse(req.body.pId);
  let sql =
    "INSERT INTO qna(qId, qCategory, pId, mId, qTitle, qContent, qFile, qSecret) VALUES(NULL, ?, ?, ?, ?, ?, ?, ?);";
  db.query(
    sql,
    [qCategory, pId, mId, qTitle, qContent, filename, qSecret],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send({ status: 201, result, msg: "문의가 작성되었습니다." });
    }
  );
});

router.post("/pwchk", (req, res) => {
  bcrypt.compare(req.body.pw, req.body.hashpw, function (err, result) {
    if (err) {
      throw err;
    } else if (result) {
      res.send({ status: 201, msg: "비밀번호 확인 완료" });
    } else {
      res.send({ status: 404, msg: "비밀번호가 일치하지 않습니다." });
    }
  });
});

router.delete("/delUser/:id", (req, res) => {
  let sql = "DELETE FROM member WHERE mId = ?;";
  db.query(sql, [JSON.parse(req.params.id)], (err) => {
    if (err) throw err;
  });
});

module.exports = router;
