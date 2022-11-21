package com.project.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.project.app.dao.QnaDao;
import com.project.app.dto.QnaDto;



@RestController
@RequestMapping("/api")
public class QnaController {
	@Autowired
	QnaDao dao;
	 

	@PostMapping("/qnawrite")
	public ResponseEntity register(@RequestBody QnaDto dto) {
		dao.qnaWrite(dto);
		return new ResponseEntity("success", HttpStatus.OK);
	}
}
