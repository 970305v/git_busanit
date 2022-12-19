package com.example.demo.mapper;

import com.example.demo.dto.FollowDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface FollowMapper {
    public int follow(FollowDto dto);
    public int followerCount(Long idx);
    public int followingCount(Long idx);
    public Integer followingCheck(Long idx, Long follower_mIdx);
    public List<Map> myFollow(Long idx);
    public List<Map> myFollower(Long idx);
}
