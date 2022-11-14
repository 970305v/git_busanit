package com.project.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.app.dao.MemberDAO;
import com.project.app.dto.MemberDTO;

@RestController
@RequestMapping("/api")
public class HomeController {
	
	@Autowired
	MemberDAO dao;
	
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody MemberDTO dto) {
		dao.getUserAccount(dto.getmEmail());
		dao.userLogin(dto);
		System.out.println(dao.userLogin(dto));
		System.out.println(dao.getUserAccount(dto.getmEmail()));
		return new ResponseEntity("fail",HttpStatus.OK);	
	}
	
	@PostMapping("/register")
	public ResponseEntity register(@RequestBody MemberDTO dto) {
		dao.insertData(dto);
		return new ResponseEntity("success",HttpStatus.OK);
	}
	
	@PostMapping("/emailcheck")
	public ResponseEntity emailCheck(@RequestBody MemberDTO dto) {
    	HttpHeaders headers = new HttpHeaders();
    	String res = "";
    	if (dao.emailCheck(dto.getmEmail()) > 0) {
			res = "이미 사용중인 이메일입니다.";
			headers.set("name", "useid");
			return ResponseEntity.ok().headers(headers).body(res);
		} else {
			res = "사용가능한 이메일입니다.";
			headers.set("name", "success");
			return ResponseEntity.ok().headers(headers).body(res);
		}
	}
}
