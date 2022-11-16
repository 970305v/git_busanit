package com.project.app.service;

import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class SingleDataResponse<T> extends BaseResponse {
    private T data; // 전달할 데이터
}