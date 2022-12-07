package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.dto.MemberDto;
import org.springframework.web.bind.annotation.PathVariable;

import java.awt.*;
import java.util.List;

@Mapper
public interface MemberMapper {
	// 회원가입
	public int register(MemberDto dto);
	// 아이디 중복확인
	public int idCheck(String mUserid);
	// 로그인
	public MemberDto login(@Param("mUserid") String mUserid, @Param("mPwd") String mPwd);
	public MemberDto getUserAccount(@Param("mUserid") String mUserid);
	public List<MemberDto> selectOne(Long idx);
	public MemberDto memberUp(MemberDto dto, long idx);
}
