package com.project.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.app.dao.MemberDAO;
import com.project.app.dto.MemberDTO;

@RestController
public class HomeController {
	
	@Autowired
	MemberDAO dao;
	
	@PostMapping("api/login")
	public String login() {
		return "login";
	}
	
	@PostMapping("api/register")
	public ResponseEntity<String> register(@RequestBody MemberDTO dto) {
		dao.insertData(dto);
		return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
	}
	
	@PostMapping("api/emailcheck")
	public ResponseEntity emailCheck(@RequestBody MemberDTO dto) {
    	HttpHeaders headers = new HttpHeaders();
    	String res = "";
		if(dto.getEmail().trim().length() == 0) {
			res = "이메일을 입력해주세요";
			headers.set("name", null);
			return ResponseEntity.ok().headers(headers).body(res);
		} else if (dao.emailCheck(dto.getEmail()) > 0) {
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
