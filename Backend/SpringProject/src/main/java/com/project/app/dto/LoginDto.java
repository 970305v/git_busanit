package com.project.app.dto;

public class LoginDto {
	private String mEamil;
	private String mPwd;
	
	public LoginDto() {
	}

	public LoginDto(String mEamil, String mPwd) {
		this.mEamil = mEamil;
		this.mPwd = mPwd;
	}

	public String getmEamil() {
		return mEamil;
	}

	public void setmEamil(String mEamil) {
		this.mEamil = mEamil;
	}

	public String getmPwd() {
		return mPwd;
	}

	public void setmPwd(String mPwd) {
		this.mPwd = mPwd;
	}
	
}
