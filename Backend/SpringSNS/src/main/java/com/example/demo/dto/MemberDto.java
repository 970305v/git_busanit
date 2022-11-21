package com.example.demo.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemberDto {
	private int mIdx;
	private String mUserid;
	private String mPwd;
	private String mName;
	private String mPhone;
	private String mInfo;
	private String mAuth;
	private String mRegdate;
	private String mUpdate;
	public MemberDto() {}
	public MemberDto(int mIdx, String mUserid, String mPwd, String mName, String mPhone, String mInfo, String mAuth,
			String mRegdate, String mUpdate) {
		super();
		this.mIdx = mIdx;
		this.mUserid = mUserid;
		this.mPwd = mPwd;
		this.mName = mName;
		this.mPhone = mPhone;
		this.mInfo = mInfo;
		this.mAuth = mAuth;
		this.mRegdate = mRegdate;
		this.mUpdate = mUpdate;
	}
	public int getmIdx() {
		return mIdx;
	}
	public void setmIdx(int mIdx) {
		this.mIdx = mIdx;
	}
	public String getmUserid() {
		return mUserid;
	}
	public void setmUserid(String mUserid) {
		this.mUserid = mUserid;
	}
	public String getmPwd() {
		return mPwd;
	}
	public void setmPwd(String mPwd) {
		this.mPwd = mPwd;
	}
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}
	public String getmPhone() {
		return mPhone;
	}
	public void setmPhone(String mPhone) {
		this.mPhone = mPhone;
	}
	public String getmInfo() {
		return mInfo;
	}
	public void setmInfo(String mInfo) {
		this.mInfo = mInfo;
	}
	public String getmAuth() {
		return mAuth;
	}
	public void setmAuth(String mAuth) {
		this.mAuth = mAuth;
	}
	public String getmRegdate() {
		return mRegdate;
	}
	public void setmRegdate(String mRegdate) {
		this.mRegdate = mRegdate;
	}
	public String getmUpdate() {
		return mUpdate;
	}
	public void setmUpdate(String mUpdate) {
		this.mUpdate = mUpdate;
	}
	
}
