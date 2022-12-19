package com.example.demo.dto;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LikesDto {
    private Long lIdx;
    private Long likes_mIdx;
    private Long likes_bIdx;
}
