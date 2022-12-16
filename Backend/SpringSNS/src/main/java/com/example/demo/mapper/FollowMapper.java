package com.example.demo.mapper;

import com.example.demo.dto.FollowDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FollowMapper {
    public int follow(FollowDto dto);
    public int followerCount(Long idx);
    public int followingCount(Long idx);
    public int followingCheck(Long idx);
}
