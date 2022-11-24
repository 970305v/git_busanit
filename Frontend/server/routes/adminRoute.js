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
router.get(`/admin/users`, (req, res) => {
  const page = req.query.page;
  const offset = parseInt(req.query.offset);
  const startNums = page * offset;

  const sel = req.query.selQuery;
  const search = req.query.searchQuery || "";
  const qnaSearch = "%" + search + "%";

  let sql = "SELECT COUNT(mId) AS count FROM member WHERE ? LIKE ?;";
  let dataSql =
    "SELECT * FROM member WHERE " +
    sel +
    " LIKE ? ORDER BY mId DESC LIMIT ?, ?;";
  db.query(sql, [sel, qnaSearch], (err, result) => {
    if (err) {
      throw err;
    } else {
      db.query(dataSql, [qnaSearch, startNums, offset], (err, users) => {
        if (err) throw err;

        res.json({
          users: users,
          page: page, // 1, 2, 3 ... 페이지
          totalPageNumber: Math.ceil(result[0].count / offset), // 전체 페이지 수
          totalRows: result[0].count, // 전체 사용자 수
        });
      });
    }
  });
});

module.exports = router;
