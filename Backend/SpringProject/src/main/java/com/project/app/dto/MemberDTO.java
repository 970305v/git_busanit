package com.project.app.dto;

public class MemberDTO {
	private int mId;
	private String mEmail;
	private String mPwd;
	private String mName;
	private String mPhone;
	private String mPostnum;
	private String mAddr1;
	private String mAddr2;
	
	public MemberDTO() {}

	public MemberDTO(int mId, String mEmail, String mPwd, String mName, String mPhone, String mPostnum, String mAddr1,
			String mAddr2) {
		super();
		this.mId = mId;
		this.mEmail = mEmail;
		this.mPwd = mPwd;
		this.mName = mName;
		this.mPhone = mPhone;
		this.mPostnum = mPostnum;
		this.mAddr1 = mAddr1;
		this.mAddr2 = mAddr2;
	}

	public int getmId() {
		return mId;
	}

	public void setmId(int mId) {
		this.mId = mId;
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

	public String getmPostnum() {
		return mPostnum;
	}

	public void setmPostnum(String mPostnum) {
		this.mPostnum = mPostnum;
	}

	public String getmAddr1() {
		return mAddr1;
	}

	public void setmAddr1(String mAddr1) {
		this.mAddr1 = mAddr1;
	}

	public String getmAddr2() {
		return mAddr2;
	}

	public void setmAddr2(String mAddr2) {
		this.mAddr2 = mAddr2;
	}
}
