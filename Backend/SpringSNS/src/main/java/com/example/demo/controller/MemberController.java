package com.example.demo.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.example.demo.dao.BoardDao;
import com.example.demo.dto.BoardDto;
import org.apache.ibatis.annotations.Param;
import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dao.MemberDao;
import com.example.demo.dto.MemberDto;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class MemberController {
	
	@Autowired
	private MemberDao dao;

	@Autowired
	private BoardDao boardDao;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "/uploads";
	
	@RequestMapping({"/", "/home"})
	public String home(Model model) {
		List<Map> boardMap = boardDao.boardAll();
		model.addAttribute("board", boardMap);
		System.out.println(model);
		return "index";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/register")
	public String register() {
		return "register";
	}
	
	@GetMapping("/profile/{idx}")
	public String profile(@PathVariable("idx") Long idx, Model model) {
		List<MemberDto> list = dao.selectOne(idx);
		List<BoardDto> boardList = boardDao.selectOne(idx);
		model.addAttribute("list", list);
		model.addAttribute("board", boardList);
		return "profile";
	}
	
	@PostMapping("/registProc")
	public String registProc(MemberDto dto) {
		dao.register(dto);
       return "redirect:/";
	}
	
	@PostMapping("/idCheck")
	@ResponseBody
	public HashMap<String, Object> idCheck(@RequestBody MemberDto dto) {
		HashMap<String, Object> map = new HashMap<>();
        map.put("result", dao.idCheck(dto.getMUserid()));
        return map;
	}
	
	@PostMapping("/loginProc")
	public String loginProc(String mUserid, String mPwd, HttpServletRequest request) {
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
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.invalidate();
		return "redirect:/";
	}
	@GetMapping("/profile/edit/{idx}")
	public String editProfile(@PathVariable("idx") Long idx, Model model) {
		List<MemberDto> list = dao.selectOne(idx);
		model.addAttribute("list", list);
		return "editProfile";
	}
}


