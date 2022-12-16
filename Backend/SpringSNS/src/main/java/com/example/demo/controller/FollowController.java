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
        System.out.println(dto);
        System.out.println(dao.followingCheck(dto.getFollow_mIdx()));
//        if (dao.followingCheck(dto.getFollow_mIdx()) == idx) {
//          return null;
//        } else {
//            dto.setFollow_mIdx(idx);
//            dao.follow(dto);
//            return "true";
//        }
        return null;
    }
}
