package com.example.demo.mapper;

import com.example.demo.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    public int write(BoardDto dto);
    public List<BoardDto> selectOne(Long idx);
    public List<BoardDto> boardDetail(Long idx);
    public List<BoardDto> boardAll();
}
