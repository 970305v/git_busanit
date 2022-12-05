package com.example.demo.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.MemberDto;
import com.example.demo.mapper.MemberMapper;

import java.util.List;

@Repository
public class MemberDao implements MemberMapper {

	@Autowired
	private MemberMapper memberMapper;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
 	public int register(MemberDto dto) {
 		String encodedPassword = passwordEncoder.encode(dto.getMPwd());
 		dto.setMPwd(encodedPassword);
 		return memberMapper.register(dto);
 	}

 	@Override
 	public int idCheck(String mUserid) {
 		return memberMapper.idCheck(mUserid);
 	}
 	
 	 @Override
     public MemberDto login(String mUserid, String mPwd) {
     	if(getUserAccount(mUserid) == null) {
     		return null;
     	}
     	if (!passwordEncoder.matches(mPwd, getUserAccount(mUserid).getMPwd())) {
     		return null;	
     	}
     	return memberMapper.login(mUserid, getUserAccount(mUserid).getMPwd());
     }
    @Override
    public MemberDto getUserAccount(String mUserid) {
    	return memberMapper.getUserAccount(mUserid);
    }

	@Override
	public List<MemberDto> selectOne(Long idx) {
		return memberMapper.selectOne(idx);
	}
}




