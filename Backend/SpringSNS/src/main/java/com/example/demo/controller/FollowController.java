package com.example.demo.controller;

import com.example.demo.dao.FollowDao;
import com.example.demo.dto.FollowDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FollowController {
    @Autowired
    private FollowDao dao;

    @PostMapping("/follow/{idx}")
    @ResponseBody
    public String follow(@PathVariable("idx") Long idx, @RequestBody FollowDto dto) {
        if (dao.followingCheck(idx ,dto.getFollower_mIdx()) == null) {
            dto.setFollow_mIdx(idx);
            dao.follow(dto);
            return "true";
        } else {
            System.out.println("팔로우 실패");
            return null;
        }
    }
}
