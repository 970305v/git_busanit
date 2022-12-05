package com.example.demo.controller;

import com.example.demo.dao.BoardDao;
import com.example.demo.dto.BoardDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Controller
public class BoardController {
    @Autowired
    private BoardDao dao;

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
    @GetMapping("/board/{idx}")
    public String boardDetail() {
        return "writeBoard";
    }
}
