package com.example.demo.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dao.MemberDao;
import com.example.demo.dto.MemberDto;

@Controller
public class MemberController {
	
	@Autowired
	MemberDao dao;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
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
	
	@GetMapping("/mypage")
	public String Mypage() {
		return "mypage";
	}
	
	@PostMapping("/registProc")
	public String RegistProc(MemberDto dto) {
		dao.register(dto);
       return "redirect:/";
	}
	
	@PostMapping("/idCheck")
	@ResponseBody
	public HashMap<String, Object> IdCheck(@RequestBody MemberDto dto) {
		HashMap<String, Object> map = new HashMap<>();
        map.put("result", dao.idCheck(dto.getmUserid()));
        return map;
	}
	
	@PostMapping("/loginProc")
	public String LoginProc(String mUserid, String mPwd, HttpServletRequest request) {
		HttpSession session = request.getSession();
		MemberDto login = dao.login(mUserid, mPwd);
		if(login != null) {
			session.setAttribute("login", login);
			return "redirect:/";
		} else {
			return "redirect:/login";
		}
	}
	@RequestMapping("/logout")
	public String Logout(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.invalidate();
		return "redirect:/";
	}
	
	@RequestMapping("profile/edit")
	public String EditProfile() {
		return "profile";
	}
}


