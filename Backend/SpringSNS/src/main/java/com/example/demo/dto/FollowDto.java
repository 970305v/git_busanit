package com.example.demo.dto;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FollowDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fIdx;
    private Long follow_mIdx;
    private Long follower_mIdx;
}
