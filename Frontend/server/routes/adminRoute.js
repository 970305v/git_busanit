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

  let searchType = `${req.query.typeQuery}` || "";
  let search = req.query.searchQuery || "";
  let searchWord = `%${search}%`;

  let sql = "SELECT COUNT(mId) AS count FROM member WHERE ? LIKE ?;";
  let dataSql =
    "SELECT * FROM member WHERE ?? LIKE ? ORDER BY mId DESC LIMIT ?, ?;";
  db.query(sql, [searchType, searchWord], (err, result) => {
    if (err) {
      throw err;
    } else {
      db.query(
        dataSql,
        [searchType, searchWord, startNums, offset],
        (err, users) => {
          if (err) throw err;

          res.json({
            users: users,
            page: page, // 1, 2, 3 ... 페이지
            totalPageNumber: Math.ceil(result[0].count / offset), // 전체 페이지 수
            totalRows: result[0].count, // 전체 사용자 수
          });
        }
      );
    }
  });
});

router.post("/admin/noticewrite", upload.array("nFile", 3), (req, res) => {
  const { mId, nTitle, nContent } = req.body;
  let reqFiles = [] || "";
  if (req.files.length > 0) {
    for (let i = 0; i < req.files.length; i++) {
      reqFiles.push(req.files[i].filename);
    }
  } else {
    reqFiles.push(null);
  }

  let sql =
    "INSERT INTO notice(nId, mId, nTitle, nContent, nImage1, nImage2, nImage3) VALUES(NULL, ?, ?, ?, ?, ?, ?);";
  db.query(
    sql,
    [mId, nTitle, nContent, reqFiles[0], reqFiles[1], reqFiles[2]],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send({ status: 201, result, msg: "공지가 작성되었습니다." });
    }
  );
});

router.get(`/admin/notice`, (req, res) => {
  const page = req.query.page;
  const offset = parseInt(req.query.offset);
  const startNums = page * offset;

  let searchType = `${req.query.typeQuery}` || "";
  let search = req.query.searchQuery || "";
  let searchWord = `%${search}%`;

  let sql = "SELECT COUNT(nId) AS count FROM notice WHERE ? LIKE ?;";
  let dataSql =
    "SELECT * FROM notice WHERE ?? LIKE ? ORDER BY nId DESC LIMIT ?, ?;";
  db.query(sql, [searchType, searchWord], (err, result) => {
    if (err) {
      throw err;
    } else {
      db.query(
        dataSql,
        [searchType, searchWord, startNums, offset],
        (err, users) => {
          if (err) throw err;

          res.json({
            users: users,
            page: page, // 1, 2, 3 ... 페이지
            totalPageNumber: Math.ceil(result[0].count / offset), // 전체 페이지 수
            totalRows: result[0].count, // 전체 사용자 수
          });
        }
      );
    }
  });
});

module.exports = router;