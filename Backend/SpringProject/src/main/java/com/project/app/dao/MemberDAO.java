package com.project.app.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.project.app.dto.MemberDTO;
import com.project.app.mapper.MemberMapper;


@Repository
public class MemberDAO implements MemberMapper {
	
	@Autowired
	private MemberMapper MemberMapper;
	
    @Autowired
    private PasswordEncoder passwordEncoder;

	@Override
	public int insertData(MemberDTO dto) {
		String encodedPassword = passwordEncoder.encode(dto.getmPwd());
		dto.setmPwd(encodedPassword);
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
	public int emailCheck(String mEmail) {
		return MemberMapper.emailCheck(mEmail);
	}
	
	@Override
	public int userLogin(String mEmail, String mPwd) {
		MemberDTO dto = MemberMapper.getUserAccount(mEmail);
		// MemberMapper.getUserAccount(dto.getmEmail());
		String encodePw = MemberMapper.getUserAccount(dto.getmEmail());
		if(passwordEncoder.matches(dto.getmPwd(),encodePw)) {
			//암호화 된 비밀번호로 pw 정보 변경 후 로그인
			dto.setmPwd(encodePw);
			return MemberMapper.userLogin(dto);
		} else {
			return null;
		}
	}
	
	@Override
	public String getUserAccount(String mEmail) {
		return MemberMapper.getUserAccount(mEmail);
	}
}
