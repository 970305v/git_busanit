package com.project.app.service;

import lombok.*;

@Getter 
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BaseResponse {
	  private boolean success; // 요청 성공 여부
	    private String message; // 응답 메세지
}
