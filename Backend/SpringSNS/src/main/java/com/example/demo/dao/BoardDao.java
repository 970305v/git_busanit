package com.example.demo.dao;

import com.example.demo.dto.BoardDto;
import com.example.demo.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardDao implements BoardMapper {

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
    public List<BoardDto> boardDetail(Long idx) {
        return boardMapper.selectOne(idx);
    }

    @Override
    public List<BoardDto> boardAll() {
        return boardMapper.boardAll();
    }
}
