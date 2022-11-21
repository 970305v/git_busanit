package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.dto.MemberDto;

@Mapper
public interface MemberMapper {
	// 회원가입
	public int register(MemberDto dto);
	// 이메일 중복확인
	public int idCheck(String mUserid);
}
