package com.example.demo.dao;

import com.example.demo.dto.FollowDto;
import com.example.demo.mapper.FollowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
    public int followingCheck(Long idx) {
        return followMapper.followingCheck(idx);
    }
}
