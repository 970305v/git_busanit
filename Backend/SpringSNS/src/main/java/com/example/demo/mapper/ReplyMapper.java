package com.example.demo.mapper;

import com.example.demo.dto.ReplyDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ReplyMapper {
    public int writeReply(ReplyDto dto);
    public List<Map> replyDetail(Long idx);
}
