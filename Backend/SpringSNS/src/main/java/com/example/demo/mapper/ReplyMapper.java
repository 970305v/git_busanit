package com.example.demo.mapper;

import com.example.demo.dto.ReplyDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReplyMapper {
    public int writeReply(ReplyDto dto);
}
