package com.project.app.dto;

public class QnaDto {
	private int qId;
	private String qCategory;
	private int pId;
	private int mId;
	private String pName;
	private String qTitle;
	private String qContent;
	private String qFile;
	private boolean qSecret;
	private int qHit;
	private String qRegdate;

	public QnaDto() {
	}

	public QnaDto(int qId, String qCategory, int pId, int mId, String pName, String qTitle, String qContent,
			String qFile, boolean qSecret, int qHit, String qRegdate) {
		super();
		this.qId = qId;
		this.qCategory = qCategory;
		this.pId = pId;
		this.mId = mId;
		this.pName = pName;
		this.qTitle = qTitle;
		this.qContent = qContent;
		this.qFile = qFile;
		this.qSecret = qSecret;
		this.qHit = qHit;
		this.qRegdate = qRegdate;
	}

	public int getqId() {
		return qId;
	}

	public void setqId(int qId) {
		this.qId = qId;
	}

	public String getqCategory() {
		return qCategory;
	}

	public void setqCategory(String qCategory) {
		this.qCategory = qCategory;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public int getmId() {
		return mId;
	}

	public void setmId(int mId) {
		this.mId = mId;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getqTitle() {
		return qTitle;
	}

	public void setqTitle(String qTitle) {
		this.qTitle = qTitle;
	}

	public String getqContent() {
		return qContent;
	}

	public void setqContent(String qContent) {
		this.qContent = qContent;
	}

	public String getqFile() {
		return qFile;
	}

	public void setqFile(String qFile) {
		this.qFile = qFile;
	}

	public boolean isqSecret() {
		return qSecret;
	}

	public void setqSecret(boolean qSecret) {
		this.qSecret = qSecret;
	}

	public int getqHit() {
		return qHit;
	}

	public void setqHit(int qHit) {
		this.qHit = qHit;
	}

	public String getqRegdate() {
		return qRegdate;
	}

	public void setqRegdate(String qRegdate) {
		this.qRegdate = qRegdate;
	}
}

