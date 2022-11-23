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
  let userSql = "SELECT * FROM member WHERE mId = ?; ";
  let orderSql = "SELECT * FROM orders WHERE mId = ? ORDER BY oId DESC; ";
  let boardSql = "SELECT * FROM review, qna, member WHERE member.mId = ?;";
  db.query(
    userSql + orderSql + boardSql,
    [req.params.idx, req.params.idx, req.params.idx],
    (err, user) => {
      if (err) {
        throw err;
      }
      res.send({
        status: 200,
        user: user[0],
        orders: user[1],
        boards: user[2],
      });
    }
  );
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
  let sql = "SELECT pId, pName, pImage1 FROM product WHERE pName LIKE ?";
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
  let { filename } = req.file || "";
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
  bcrypt.compare(req.body.pw, req.body.hashpw, (err, result) => {
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

router.get("/review", (req, res) => {
  const page = req.query.page;
  const offset = parseInt(req.query.offset);
  const startNums = page * offset;

  const search = req.query.searchQuery || "";
  const reviewSearch = "%" + search + "%";
  let sql = "SELECT COUNT(rId) AS count FROM review WHERE rTitle LIKE ?;";
  db.query(sql, [reviewSearch], (err, result) => {
    if (err) {
      throw err;
    } else {
      let dataSql =
        "SELECT review.*, product.pId, product.pName, product.pImage1, member.mEmail " +
        "FROM review INNER JOIN product ON review.pId = product.pId " +
        "INNER JOIN member ON review.mId = member.mId WHERE review.rTitle LIKE ? ORDER BY rId DESC LIMIT ?, ?;";
      db.query(dataSql, [reviewSearch, startNums, offset], (err, reviews) => {
        if (err) {
          throw err;
        } else {
          res.json({
            reviews: reviews,
            page: page, // 1, 2, 3 ... 페이지
            totalPageNumber: Math.ceil(result[0].count / offset), // 전체 페이지 수
            totalRows: result[0].count, // 전체 사용자 수
          });
        }
      });
    }
  });
});
router.get("/review/:idx", (req, res) => {
  let sql =
    "SELECT review.*, product.pId, product.pName, member.mEmail FROM review LEFT JOIN product ON review.pId = product.pId LEFT JOIN member ON review.mId = member.mId WHERE rId = ?;";
  db.query(sql, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    }
    res.send({ status: 200, result });
  });
});

router.get("/reviewWrite/:idx", (req, res) => {
  let sql =
    "SELECT orders.oId, orders.oDate, orders.oPrice, product.pId, product.pName, product.pImage1 " +
    "FROM product " +
    "INNER JOIN orderDetails ON (orderDetails.pId = product.pId) " +
    "INNER JOIN orders ON (orders.oId = orderDetails.oId) " +
    "WHERE (orders.mId = '2') GROUP BY pId;";
  db.query(sql, [req.params.idx], (err, user) => {
    if (err) {
      throw err;
    }
    res.send({ status: 201, user });
  });
});

router.post("/reviewWrite", upload.single("rFile"), (req, res) => {
  const { pId, mId, rTitle, rContent, rStar } = req.body;
  let { filename } = req.file || "";
  let sql =
    "INSERT INTO review(rId, pId, mId, rTitle, rContent, rImage1, rStar) VALUES(NULL, ?, ?, ?, ?, ?, ?);";
  db.query(
    sql,
    [pId, mId, rTitle, rContent, filename, rStar],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send({ status: 201, result, msg: "리뷰가 작성되었습니다." });
    }
  );
});

module.exports = router;
