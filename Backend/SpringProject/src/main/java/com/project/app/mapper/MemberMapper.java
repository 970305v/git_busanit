package com.project.app.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.project.app.dto.MemberDto;

@Mapper
public interface MemberMapper {
		// 회원가입
		public int register(MemberDto dto);
		// 이메일 중복확인
		public int emailCheck(String mEmail);
		// 로그인
		public String userLogin(@Param("mEmail") String mEmail,@Param("mPwd") String mPwd);
		// 암호화 로그인
		public MemberDto getUserAccount(@Param("mEmail") String mEmail);
}
