package com.project.app.dao;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

import com.project.app.dto.LoginDto;
import com.project.app.dto.MemberDto;
import com.project.app.dto.TokenDto;
import com.project.app.jwt.TokenProvider;
import com.project.app.mapper.MemberMapper;
import com.project.app.service.ResponseService;


@Repository
@RequiredArgsConstructor
public class MemberDao implements MemberMapper {

	@Autowired
	private MemberMapper MemberMapper;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
  

    private final TokenProvider jwtTokenProvider;

    
 	@Override
 	public int register(MemberDto dto) {
 		String encodedPassword = passwordEncoder.encode(dto.getmPwd());
 		dto.setmPwd(encodedPassword);
 		return MemberMapper.register(dto);
 	}

 	@Override
 	public int emailCheck(String mEmail) {
 		return MemberMapper.emailCheck(mEmail);
 	}
 	
    @Override
    public String userLogin(String mEmail, String mPwd) {
        MemberDto dto = MemberMapper.getUserAccount(mEmail);
        if (!passwordEncoder.matches(mPwd, dto.getmPwd())) {
        	throw new LoginFailedException("잘못된 비밀번호입니다");
        }
        return dto.getmEmail();
    }
    
    @Override
    public MemberDto getUserAccount(String mEmail) {
    	return MemberMapper.getUserAccount(mEmail);
    }
    
    public TokenDto tokenGenerator(String mEmail) {
        MemberDto memberDto = MemberMapper.getUserAccount(mEmail);
        if(memberDto == null ) {
        	new LoginFailedException("잘못된 아이디입니다");
        } 

        return TokenDto.builder()
        .accessToken("Bearer" + jwtTokenProvider.createAcessToken(memberDto.getmEmail(), 
        		Collections.singletonList(memberDto.getmName())))
        .refreshToken("Bearer" + jwtTokenProvider.createRefreshToken(memberDto.getmEmail(), 
        		Collections.singletonList(memberDto.getmName())))
        .build();
    }
}
