package com.project.app.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {
	private int mId;
	private String mEmail;
	private String mPwd;
	private String mName;
	private String mPhone;
	private String mPostnum;
	private String mAddr1;
	private String mAddr2;
	private int mPoint;
	private String mRegdate;
	
	public MemberDto(int mId, String mEmail, String mPwd, String mName, String mPhone, String mPostnum, String mAddr1,
			String mAddr2) {
		this.mId = mId;
		this.mEmail = mEmail;
		this.mPwd = mPwd;
		this.mName = mName;
		this.mPhone = mPhone;
		this.mPostnum = mPostnum;
		this.mAddr1 = mAddr1;
		this.mAddr2 = mAddr2;
	}


	public int getmPoint() {
		return mPoint;
	}

	public void setmPoint(int mPoint) {
		this.mPoint = mPoint;
	}

	public String getmRegdate() {
		return mRegdate;
	}

	public void setmRegdate(String mRegdate) {
		this.mRegdate = mRegdate;
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
