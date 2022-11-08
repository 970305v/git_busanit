package com.project.app.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.app.dto.MemberDTO;

@Mapper
public interface MemberMapper {
		// 입력
		public int insertData(MemberDTO dto);
		// 하나 가져오기
		public MemberDTO selectDataOne(int idx);
		// 업데이트
		public int updateData(MemberDTO dto);
		// 삭제
		public int deleteData(int idx);
		// 전부 가져오기
		public List<MemberDTO> selectDataAll();
		// 개수 가져오기
		public int selectDataCount();
		// 이메일 중복확인
		public int emailCheck(String email);
}
