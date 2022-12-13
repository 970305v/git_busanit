package com.example.demo.dao;

import com.example.demo.dto.ReplyDto;
import com.example.demo.mapper.ReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReplyDao implements ReplyMapper {

    @Autowired
    ReplyMapper replyMapper;
    @Override
    public int writeReply(ReplyDto dto) {
        return replyMapper.writeReply(dto);
    }
}
