const express = require("express");
const router = express.Router();
const multer = require("multer");

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
    callback(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// url
router.get("/products", (req, res) => {
  let sql = "SELECT * FROM product ORDER BY pId DESC;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
        msg: "상품이 등록되었습니다.",
      });
    }
  });
});

router.post("/product/upload", upload.single("pImage1"), (req, res) => {
  const { pGender, pCaregory, pName, pStock, pPrice, pContent } = req.body;
  const { filename } = req.file;
  let sql =
    "INSERT INTO product VALUES(NULL, ?, ?, ?, ?, ?, ?, null, null, ?, now());";
  db.query(
    sql,
    [pName, pGender, pCaregory, pStock, pPrice, filename, pContent],
    (err) => {
      if (err) {
        throw err;
      } else {
        res.send({
          status: 201,
          msg: "상품이 등록되었습니다.",
        });
      }
    }
  );
});

router.get("/products/all", (req, res) => {
  let sql = "SELECT * FROM product ORDER BY pId DESC;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
        msg: "상품이 등록되었습니다.",
      });
    }
  });
});

router.get("/detail  ", (req, res) => {
  console.log(req.params.id);
  // let sql = "select * from product where pid=?;";
  // db.query(sql, (err, result) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.send({
  //       result,
  //       status: 201,
  //     });
  //   }
  // });
});

module.exports = router;
