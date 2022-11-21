package com.project.app.dao;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

import com.project.app.dto.MemberDto;
import com.project.app.dto.TokenDto;
import com.project.app.jwt.TokenProvider;
import com.project.app.mapper.MemberMapper;


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
    	if(getUserAccount(mEmail) == null) {
    		return null;
    	}
    	if (!passwordEncoder.matches(mPwd, getUserAccount(mEmail).getmPwd())) {
    		return null;
    	}
    	return MemberMapper.userLogin(mEmail, mPwd);
    }
    
    @Override
    public MemberDto getUserAccount(String mEmail) {
    	return MemberMapper.getUserAccount(mEmail);
    }
    
    @Override
    public MemberDto userInfo(String mEmail) {
    	return MemberMapper.getUserAccount(mEmail);
    }
    
    public TokenDto tokenGenerator(String mEmail, String mPwd) {
    	MemberDto memberDto = new MemberDto();
        
        if(userLogin(mEmail, mPwd) == null) {
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
