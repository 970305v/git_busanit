package com.project.app.dto;

public class MemberDTO {
	private int idx;
	private String email;
	private String passwd;
	private String username;
	private String regdate;
	
	
	public MemberDTO() {}

	public MemberDTO(int idx, String email, String passwd, String username, String regdate) {
		super();
		this.idx = idx;
		this.email = email;
		this.passwd = passwd;
		this.username = username;
		this.regdate = regdate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
}
