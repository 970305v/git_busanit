package com.project.app.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.project.app.dto.QnaDto;

@Mapper
public interface QnaMapper {
	public int qnaWrite(QnaDto dto);
}
