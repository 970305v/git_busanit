import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "../styles/AdminNotice.css";

function AdminNotice() {
  const [rows, setRows] = useState(0); // 전체 게시물 수
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0); // 전체 페이지
  const [offset, setOffset] = useState(10); // 한 페이지에 표시할 게시물 수
  const [keyword, setKeyword] = useState("");
  const [searchWords, setSearchWords] = useState("");
  const [searchType, setSearchType] = useState("nTitle");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `/admin/notice?page=${page}&offset=${offset}&typeQuery=${searchType}&searchQuery=${keyword}`
        )
        .then((response) => {
          setDatas(response.data.users);
          setRows(response.data.totalRows);
          setPage(response.data.page);
          setPages(response.data.totalPageNumber);
        });
    };
    fetchData();
  }, [page, keyword]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const searchData = async (e) => {
    e.preventDefault();
    setKeyword(searchWords);
    setPage(0);
    setSearchWords("");
  };

  return (
    <>
      <div className="admin-container">
        <h1>공지 관리</h1>
        <div className="admin-table-wrap">
          <div className="admin-table-btn">
            <button>전체목록</button>
            <button>선택삭제</button>
            <Link to="/admin/noticewrite">
              <button>공지작성</button>
            </Link>
            <div>
              <span>
                <strong>공지사항 수 : {rows}</strong> 개
              </span>
            </div>
            <div>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value={"nTitle"}>제목</option>
                <option value={"nId"}>번호</option>
              </select>
              <input
                type="text"
                value={searchWords}
                onChange={(e) => setSearchWords(e.target.value)}
              />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div>
            <table className="notice-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{data.nId}</td>
                      <td>
                        <Link to={`/notice/${data.nId}`}>{data.nTitle}</Link>
                      </td>
                      <td>{data.nRegdate}</td>
                      <td>수정 / 삭제</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination">
              <nav key={rows} role="navigation">
                <ReactPaginate
                  breakLabel="..."
                  previousLabel="<"
                  nextLabel=">"
                  onPageChange={changePage}
                  pageCount={pages}
                  pageRangeDisplayed={5}
                  marginPagesDisplayed={2}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNotice;
