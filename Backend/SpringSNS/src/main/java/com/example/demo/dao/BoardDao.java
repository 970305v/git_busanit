package com.example.demo.dao;

import com.example.demo.dto.BoardDto;
import com.example.demo.dto.LikesDto;
import com.example.demo.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class BoardDao implements BoardMapper
{

    @Autowired
    BoardMapper boardMapper;

    @Override
    public int write(BoardDto dto) {
        return boardMapper.write(dto);
    }

    @Override
    public List<BoardDto> selectOne(Long idx) {
        return boardMapper.selectOne(idx);
    }

    @Override
    public List<Map> boardDetail(Long idx) {
        return boardMapper.boardDetail(idx);
    }

    @Override
    public List<Map> boardAll() {
        return boardMapper.boardAll();
    }

    @Override
    public List<Map> boardLikes() {
        return boardMapper.boardLikes();
    }

    @Override
    public Integer likesCheck(Long idx, Long likes_mIdx) {
        return boardMapper.likesCheck(idx, likes_mIdx);
    }

    @Override
    public int likes(LikesDto dto) {
        return boardMapper.likes(dto);
    }

    @Override
    public int likesOne(Long idx) {
        return boardMapper.likesOne(idx);
    }
}
