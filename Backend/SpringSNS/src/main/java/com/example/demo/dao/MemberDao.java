package com.example.demo.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.MemberDto;
import com.example.demo.mapper.MemberMapper;

/*
 * 
 * CREATE TABLE member(
    mIdx INT AUTO_INCREMENT PRIMARY KEY,
    mUserid VARCHAR(255) NOT NULL UNIQUE,
    mPwd VARCHAR(255) NOT NULL,
    mName VARCHAR(255) NOT NULL,
    mPhone VARCHAR(13),
    mPhoto VARCHAR(255),
    mInfo TEXT,
    mAuth VARCHAR(10) DEFAULT 'user',
    mRegdate DATE DEFAULT (current_date),
    mUpdate DATE 
);
 * */

@Repository
public class MemberDao implements MemberMapper {

	@Autowired
	private MemberMapper MemberMapper;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
 	public int register(MemberDto dto) {
 		String encodedPassword = passwordEncoder.encode(dto.getmPwd());
 		dto.setmPwd(encodedPassword);
 		return MemberMapper.register(dto);
 	}

 	@Override
 	public int idCheck(String mUserid) {
 		return MemberMapper.idCheck(mUserid);
 	}
 	
 	 @Override
     public MemberDto login(String mUserid, String mPwd) {
     	if(getUserAccount(mUserid) == null) {
     		return null;
     	}
     	if (!passwordEncoder.matches(mPwd, getUserAccount(mUserid).getmPwd())) {
     		return null;	
     	}
     	return MemberMapper.login(mUserid, getUserAccount(mUserid).getmPwd());
     }
    @Override
    public MemberDto getUserAccount(String mUserid) {
    	return MemberMapper.getUserAccount(mUserid);
    }
}




