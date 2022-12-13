package com.example.demo.dto;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReplyDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long re_Idx;
    private Long bIdx;
    private Long mIdx;
    private String content;
    private String re_regdate;
}
