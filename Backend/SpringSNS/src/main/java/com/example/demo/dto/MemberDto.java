package com.example.demo.dto;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mIdx;
	private String mUserid;
	private String mPwd;
	private String mName;
	private String mPhone;
	private String mProfilePath;
	private String mPhoto;
	private Long mFollower;
	private Long mFollowing;
	private String mInfo;
	private String mAuth;
	private String mRegdate;
	private String mUpdate;

}
