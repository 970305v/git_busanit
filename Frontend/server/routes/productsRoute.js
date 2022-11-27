const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

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
    callback(null, Date.now() + "_productImage_" + file.originalname);
  },
});
const upload = multer({ storage });

// url
router.get("/products", (req, res) => {
  const page = req.query.page;
  const offset = parseInt(req.query.offset);
  const startNums = page * offset;

  let searchType = `${req.query.typeQuery}` || "";
  let search = req.query.searchQuery || "";
  let searchWord = `%${search}%`;

  let sql = "SELECT COUNT(pId) AS count FROM product WHERE ? LIKE ?;";
  let dataSql =
    "SELECT * FROM product WHERE ?? LIKE ? ORDER BY pId DESC LIMIT ?, ?;";
  db.query(sql, [searchType, searchWord], (err, result) => {
    if (err) {
      throw err;
    } else {
      db.query(
        dataSql,
        [searchType, searchWord, startNums, offset],
        (err, products) => {
          if (err) throw err;
          console.log(result + "/" + searchType + "/" + searchWord);
          console.log(products);
          res.json({
            status: 201,
            products: products,
            page: page, // 1, 2, 3 ... 페이지
            totalPageNumber: Math.ceil(result[0].count / offset), // 전체 페이지 수
            totalRows: result[0].count, // 전체 사용자 수
          });
        }
      );
    }
  });
});

router.post("/product/upload", upload.any("pImage"), (req, res) => {
  const { pGender, pCaregory, pName, pStock, pPrice, pContent } = req.body;
  let sql =
    "INSERT INTO product VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, now());";
  db.query(
    sql,
    [
      pName,
      pGender,
      pCaregory,
      pStock,
      pPrice,
      req.files[0].filename,
      req.files[1].filename,
      req.files[2].filename,
      pContent,
    ],
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

router.delete("/delete/product/:id", (req, res) => {
  let sql1 = "select pImage1, pImage2, pImage3 from product where pId=?;";
  db.query(sql1, req.params.id, (err, photo) => {
    if (err) throw err;
    if (
      fs.existsSync("./uploads/" + photo[0].pImage1) &&
      fs.existsSync("./uploads/" + photo[0].pImage2) &&
      fs.existsSync("./uploads/" + photo[0].pImage3)
    ) {
      try {
        fs.unlinkSync("./uploads/" + photo[0].pImage1);
        fs.unlinkSync("./uploads/" + photo[0].pImage2);
        fs.unlinkSync("./uploads/" + photo[0].pImage3);
      } catch (error) {
        throw error;
      }
    }
    let sql = "delete from product where pId=?";
    db.query(sql, req.params.id, (err) => {
      if (err) throw err;
      res.send({ status: 201, msg: "삭제가 완료되었습니다." });
    });
  });
});

router.delete("/delete/cart", (req, res) => {
  let sql = "delete from cart where mId=? and pId=? ";
  db.query(sql, [req.query.mId, req.query.pId], (err) => {
    if (err) throw err;
    res.send({ status: 201, msg: "삭제가 완료되었습니다." });
  });
});

router.get("/products/all", (req, res) => {
  const page = Number.parseInt(req.query.page);
  const offset = Number.parseInt(req.query.offset);
  const startNum = page * offset; // 0, 10 -> 10,10 -> 20, 10
  let sql1 = "select * from product order by pId desc limit ?, ?;";
  db.query(sql1, [startNum, offset], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
        page,
        totalPageNumber: Math.ceil(result.length / offset),
        totalRows: result.length,
      });
      console.log(page);
      console.log(Math.ceil(result.length / offset));
    }
  });
});

router.get("/products/men", (req, res) => {
  let sql1 = "select * from product where pgender='MEN' order by pId desc;";
  db.query(sql1, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
      });
    }
  });
});

router.get("/products/women", (req, res) => {
  let sql1 =
    "select * from product where pgender='WOMEN' order by pId desc limit 1,3;";
  db.query(sql1, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
      });
    }
  });
});

router.get("/products/list", (req, res) => {
  const caregory = req.query.caregory;
  const gender = req.query.gender;
  if (gender == "all") {
    if (caregory != "all") {
      let sql2 = "select * from product where pCaregory=? order by pId desc;";
      db.query(sql2, [caregory], (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send({
            result,
            status: 201,
          });
        }
      });
    } else {
      let sql1 = "select * from product order by pId desc;";
      db.query(sql1, (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send({
            result,
            status: 201,
          });
        }
      });
    }
  } else {
    if (caregory != "all") {
      let sql2 =
        "select * from product where pGender=? and pCaregory=? order by pId desc;";
      db.query(sql2, [gender, caregory], (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send({
            result,
            status: 201,
          });
        }
      });
    } else {
      let sql1 = "select * from product where pGender=? order by pId desc;";
      db.query(sql1, gender, (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send({
            result,
            status: 201,
          });
        }
      });
    }
  }

  // const caregory = req.body.caregory;
  // const gender = req.query.gender;
  // console.log(caregory);
  // if (gender == "all") {
  //   let sql1 = "select * from product order by pId desc;";
  //   db.query(sql1, (err, result) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       if (caregory != "all") {
  //         let sql2 =
  //           "select * from product where pCaregory=? order by pId desc;";
  //         db.query(sql2, [caregory], (err, result) => {
  //           if (err) {
  //             throw err;
  //           } else {
  //             res.send({
  //               result,
  //               status: 201,
  //             });
  //           }
  //         });
  //       } else {
  //         res.send({
  //           result,
  //           status: 201,
  //         });
  //       }
  //     }
  //   });
  // } else {
  //   let sql1 = "select * from product where pgender=? order by pId desc;";
  //   db.query(sql1, [gender], (err, result) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       if (caregory != "all") {
  //         let sql2 =
  //           "select * from product where pgender=? && pCaregory=? order by pId desc;";
  //         db.query(sql2, [gender, caregory], (err, result) => {
  //           if (err) {
  //             throw err;
  //           } else {
  //             res.send({
  //               result,
  //               status: 201,
  //             });
  //           }
  //         });
  //       } else {
  //         res.send({
  //           result,
  //           status: 201,
  //         });
  //       }
  //     }
  //   });
  // }
});

router.get("/detail/:id", (req, res) => {
  let sql = "select * from product where pid=?;";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
      });
    }
  });
});

router.get("/product/edit/:id", (req, res) => {
  console.log(req.params.id);
  let sql = "select * from product where pid=?;";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
      });
    }
  });
});

router.post("/cart", (req, res) => {
  const { idx, counter, pid } = req.body;
  let sql3 = "select cid from cart where pid=? and mid=?;";
  db.query(sql3, [pid, idx], (err, result) => {
    if (err) throw err;
    else {
      if (result.length == 1) {
        let sql2 =
          "update cart set cQuantity=cQuantity+? where mid=? and pid=?";
        db.query(sql2, [counter, idx, pid], (err, result) => {
          if (err) {
            throw err;
          } else {
            res.send({
              status: 201,
              msg: "장바구니에 상품을 담았습니다.",
            });
          }
        });
      } else {
        let sql = "insert into cart values(null, ?, ?, ?);";
        db.query(sql, [idx, counter, pid], (err, result) => {
          if (err) {
            throw err;
          } else {
            res.send({
              status: 201,
              msg: "장바구니에 상품을 담았습니다.",
            });
          }
        });
      }
    }
  });
});

router.get("/cart/:idx", (req, res) => {
  let sql =
    "select product.pId, product.pImage1, product.pname, product.pPrice, cart.cid, cart.cQuantity from cart join product on product.pid=cart.pid where mid=?;";
  db.query(sql, [req.params.idx], (err, cart) => {
    if (err) {
      throw err;
    } else {
      res.send({
        cart,
        status: 201,
      });
    }
  });
});

router.get("/order/:idx", (req, res) => {
  let sql =
    "select product.pImage1, product.pname, product.pPrice, cart.cId, cart.cQuantity, member.mName, member.mPhone, member.mEmail, member.mPostnum, member.mAddr1, member.mAddr2, member.mid, cart.cid, cart.pid from cart join product on product.pid=cart.pid join member on member.mid=cart.mid;";
  db.query(sql, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
      });
    }
  });
});

router.post("/buy/:idx", (req, res) => {
  let sql =
    "INSERT INTO orders values(null, ?, ?, null, null, null, null, null, null, null, null);";
  db.query(sql, [req.params.idx, req.body.pName], (err, result) => {
    if (err) {
      throw err;
    } else {
      let sql1 = "select oid from orders order by oid desc limit 1;";
      db.query(sql1, (err, result) => {
        if (err) throw err;
        let sql2 = "INSERT INTO orderdetails values(null, ?, ?, ?, ?);";
        Object.keys(result).forEach(function (key) {
          var row = result[key];
          db.query(
            sql2,
            [row.oid, req.body.pCounter, req.params.idx, req.body.pName],
            (err, result) => {
              if (err) throw err;
              else {
                res.send({
                  result,
                  status: 201,
                });
              }
            }
          );
        });
      });
    }
  });
});

// 제품 한개 구매하는거 하기 orders orderdetails에 담아둠 *****************
router.get("/buy/:idx", (req, res) => {
  let sql =
    "select pName from product where pid=(select pName orders where pid=?);";
  db.query(sql, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send({
        result,
        status: 201,
      });
    }
  });
});
// 제품 한개 구매하는거 하기 orders orderdetails에 담아둠 *****************

router.post("/order/pay", (req, res) => {
  const {
    oName,
    oPostnum,
    oAddr1,
    oAddr2,
    oPhone,
    oPoint,
    oPrice,
    oPayment,
    count,
    oQuantity,
    pid,
    pname,
    idx,
  } = req.body;
  let sql =
    "INSERT INTO orders values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, now());";
  db.query(
    sql,
    [idx, oName, oPostnum, oAddr1, oAddr2, oPhone, oPoint, oPrice, oPayment],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        let sql2 = "select oid from orders order by oid desc limit 1;";
        db.query(sql2, (err, result) => {
          if (err) {
            throw err;
          }
          Object.keys(result).forEach(function (key) {
            var row = result[key];
            let sql1 = "INSERT INTO orderdetails values ?";
            let values = [];
            let sqls = "";
            if (count.length > 1) {
              count.map((Onecount) => {
                const value = [
                  null,
                  row.oid,
                  oQuantity[Onecount],
                  pid[Onecount],
                  pname[Onecount],
                ];
                values = [...values, value];
                const sql4 = `update product set pStock=pStock-${oQuantity[Onecount]} where pid=${pid[Onecount]}; `;
                sqls = sqls + sql4;
              });
            } else {
              const value = [
                null,
                row.oid,
                oQuantity[count],
                pid[count],
                pname[count],
              ];
              values = [...values, value];
              const sql4 = `update product set pStock=pStock-${oQuantity[count]} where pid=${pid[count]}; `;
              sqls = sqls + sql4;
            }
            db.query(sql1, [values], (err, result) => {
              if (err) throw err;
              else {
                let sql3 =
                  "delete from cart where cid in (select A.cid from (select cid from cart where mid=?) A );";
                db.query(sql3, idx, (err) => {
                  if (err) throw err;
                });
                db.query(sqls, (err) => {
                  if (err) throw err;
                });
                res.send({
                  status: 201,
                });
              }
            });
          });
        });
      }
    }
  );
});

module.exports = router;
