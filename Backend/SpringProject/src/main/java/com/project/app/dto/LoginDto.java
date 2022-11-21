package com.project.app.dto;

public class LoginDto {
	private String mEmail;
	private String mPwd;
	
	public LoginDto() {
	}

	public LoginDto(String mEmail, String mPwd) {
		this.mEmail = mEmail;
		this.mPwd = mPwd;
	}

	public String getmEmail() {
		return mEmail;
	}

	public void setmEmail(String mEmail) {
		this.mEmail = mEmail;
	}

	public String getmPwd() {
		return mPwd;
	}

	public void setmPwd(String mPwd) {
		this.mPwd = mPwd;
	}
	
}
