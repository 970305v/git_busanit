package com.project.app.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.app.dto.MemberDTO;
import com.project.app.mapper.MemberMapper;

@Repository
public class MemberDAO implements MemberMapper {
	@Autowired
	private MemberMapper MemberMapper;

	@Override
	public int insertData(MemberDTO dto) {
		return MemberMapper.insertData(dto);
	}

	@Override
	public MemberDTO selectDataOne(int idx) {
		return MemberMapper.selectDataOne(idx);
	}

	@Override
	public int updateData(MemberDTO dto) {
		return MemberMapper.updateData(dto);
	}

	@Override
	public int deleteData(int idx) {
		return MemberMapper.deleteData(idx);
	}

	@Override
	public List<MemberDTO> selectDataAll() {
		return MemberMapper.selectDataAll();
	}

	@Override
	public int selectDataCount() {
		return MemberMapper.selectDataCount();
	}
	
	@Override
	public int emailCheck(String email) {
		return MemberMapper.emailCheck(email);
	}
	
}
