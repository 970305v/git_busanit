package com.example.demo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.dao.MemberDao;
import com.example.demo.dto.MemberDto;

@Controller
public class MemberController {
	
	@Autowired
	MemberDao dao;
	
	@RequestMapping({"/", "/home"})
	public String Home() {
		return "index";
	}
	
	@GetMapping("/login")
	public String Login() {
		return "login";
	}
	
	@GetMapping("/register")
	public String Register() {
		return "register";
		
	}
	
	@PostMapping("/registProc")
	public String RegistProc(MemberDto dto) {
		dao.register(dto);
       return "redirect:/";
	}
}


