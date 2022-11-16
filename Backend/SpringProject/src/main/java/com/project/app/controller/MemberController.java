package com.project.app.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.app.dao.LoginFailedException;
import com.project.app.dao.MemberDao;
import com.project.app.dto.LoginDto;
import com.project.app.dto.MemberDto;
import com.project.app.dto.TokenDto;
import com.project.app.jwt.JwtFilter;
import com.project.app.jwt.TokenProvider;
import com.project.app.service.BaseResponse;
import com.project.app.service.ResponseService;
import com.project.app.service.SingleDataResponse;


@RestController
@RequestMapping("/api")
public class MemberController {
	@Autowired
	MemberDao dao;
	  
    @Autowired
    ResponseService responseService;
	 private final TokenProvider tokenProvider;
	    private final AuthenticationManagerBuilder authenticationManagerBuilder;

	    public MemberController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
	        this.tokenProvider = tokenProvider;
	        this.authenticationManagerBuilder = authenticationManagerBuilder;
	    }
	
	    @PostMapping(value="/login")
	    public ResponseEntity login(@RequestBody LoginDto loginDto) {
	        ResponseEntity responseEntity = null;
	        try {
	            String userId = dao.userLogin(loginDto.getmEamil(), loginDto.getmPwd());
	            TokenDto token = dao.tokenGenerator(userId);
	            ResponseCookie responseCookie = 
	                ResponseCookie.from(HttpHeaders.SET_COOKIE, token.getRefreshToken())///new Cookie("refreshToken", token.getRefreshToken());
	                .path("/")
	                .maxAge(14 * 24 * 60 * 60) // 14일
	                .httpOnly(true)
	                // .secure(true)
	                .build();

	            SingleDataResponse<String> response = responseService.getSingleDataResponse(true, userId, token.getAccessToken());
	            responseEntity = ResponseEntity.status(HttpStatus.OK)
	                .header(HttpHeaders.SET_COOKIE, responseCookie.toString())
	                .body(response);
	    
	        } catch (LoginFailedException exception) {
	            BaseResponse response = responseService.getBaseResponse(false, exception.getMessage());

	            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	        }

	        return responseEntity;
	    }

	@PostMapping("/register")
	public ResponseEntity register(@RequestBody MemberDto dto) {
		dao.register(dto);
		return new ResponseEntity("success",HttpStatus.OK);
	}
	
	@PostMapping("/emailcheck")
	public ResponseEntity emailCheck(@RequestBody MemberDto dto) {
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
