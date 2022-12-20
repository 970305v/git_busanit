package com.example.demo.mapper;

import com.example.demo.dto.BoardDto;
import com.example.demo.dto.LikesDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface BoardMapper {
    public int write(BoardDto dto);
    public List<BoardDto> selectOne(Long idx);
    public List<Map> boardDetail(Long idx);
    public List<Map> boardAll();
    public List<Map> boardLikes();
    public Integer likesCheck(Long idx, Long likes_mIdx);
    public int likes(LikesDto dto);
    public int likesOne(Long idx);
}
