package com.example.demo.dao;

import com.example.demo.dto.FollowDto;
import com.example.demo.mapper.FollowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class FollowDao implements FollowMapper {
    @Autowired
    FollowMapper followMapper;
    @Override
    public int follow(FollowDto dto) {
        return followMapper.follow(dto);
    }

    @Override
    public int followerCount(Long idx) {
        return followMapper.followerCount(idx);
    }

    @Override
    public int followingCount(Long idx) {
        return followMapper.followingCount(idx);
    }

    @Override
    public Integer followingCheck(Long idx, Long follower_mIdx) {
        return followMapper.followingCheck(idx, follower_mIdx);
    }

    @Override
    public List<Map> myFollow(Long idx) {
        return followMapper.myFollow(idx);
    }

    @Override
    public List<Map> myFollower(Long idx) {
        return followMapper.myFollower(idx);
    }
}
