package com.project.app.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.app.dto.QnaDto;
import com.project.app.mapper.QnaMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class QnaDao implements QnaMapper {

	@Autowired
	private QnaMapper QnaMapper;
	
	@Override
	public int qnaWrite(@RequestBody QnaDto dto) {
 		return QnaMapper.qnaWrite(dto);
 	}
	
}
