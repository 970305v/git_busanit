package com.example.demo.controller;

import com.example.demo.dao.BoardDao;
import com.example.demo.dao.ReplyDao;
import com.example.demo.dto.BoardDto;
import com.example.demo.dto.FollowDto;
import com.example.demo.dto.LikesDto;
import com.example.demo.dto.ReplyDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Controller
public class BoardController {
    @Autowired
    private BoardDao dao;
    @Autowired
    private ReplyDao replyDao;

    @GetMapping(value="/writeBoard")
    public String write() {
        return "writeBoard";
    }
    @PostMapping("/writeProc")
    public String writeProc(BoardDto dto,  MultipartFile file) throws Exception {
        String projectPath = System.getProperty("user.dir") + "/src/main/resources/static/files";
        UUID uuid = UUID.randomUUID();
        String fileName = uuid + "_" + file.getOriginalFilename();
        File saveFile = new File(projectPath, fileName);
        file.transferTo(saveFile);
        dto.setBImage1(fileName);
        dto.setImgPath("/files/"+fileName);
        dao.write(dto);
        return "redirect:/";
    }

    @PostMapping("/replyProc")
    public String replyProc(ReplyDto dto) {
        replyDao.writeReply(dto);
        return "redirect:/";
    }

    @GetMapping("/board/{idx}")
    public String boardDetail() {
        return "writeBoard";
    }

    @PostMapping("/likes/{idx}")
    @ResponseBody
    public String follow(@PathVariable("idx") Long idx, @RequestBody LikesDto dto) {
        System.out.println(idx);
        System.out.println(dto);
        System.out.println(dao.likesCheck(idx, dto.getLikes_mIdx()));
        if (dao.likesCheck(idx, dto.getLikes_mIdx()) == null) {
            dto.setLikes_bIdx(idx);
            dao.likes(dto);
            return "true";
        } else {
            System.out.println("좋아요 실패");
            return null;
        }
    }
}
