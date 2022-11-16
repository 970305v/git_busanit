package com.project.app.service;

import java.util.List;

import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListDataResponse<T> extends BaseResponse{
    private List<T> data; // 리스트 형태 데이터
}