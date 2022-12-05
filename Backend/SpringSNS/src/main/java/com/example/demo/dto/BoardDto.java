package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bIdx;
    private Long mIdx;
    private String bImage1;
    private String imgPath;
    private String bContent;
    private String bHashtag;
    private String bRegdate;
    private String bUpdate;
}
