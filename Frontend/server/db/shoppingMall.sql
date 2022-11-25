create database shoppingmall;
use shoppingmall;

CREATE TABLE member(
    mId INT AUTO_INCREMENT PRIMARY KEY,
    mEmail VARCHAR(255) NOT NULL unique,
    mPwd VARCHAR(255) NOT NULL,
    mName VARCHAR(255) NOT NULL,
    mPhone VARCHAR(13) NOT NULL,
    mPostnum VARCHAR(5),
    mAddr1 VARCHAR(255),
    mAddr2 VARCHAR(255),
    mPoint INT(10) DEFAULT 3000,
    mAuth VARCHAR(10) DEFAULT 'user',
    mRegdate DATE DEFAULT (current_date) 
);

CREATE TABLE product(
    pId INT auto_increment primary key,
    pName VARCHAR(100) NOT NULL,
    pGender VARCHAR(5) NOT NULL,
    pCaregory VARCHAR(20) NOT NULL,
    pStock INT(10) NOT NULL,
    pPrice INT(10) NOT NULL,
    pImage1 VARCHAR(255) NOT NULL,
    pImage2 VARCHAR(255),
    pImage3 VARCHAR(255),
    pContent TEXT NOT NULL,
    regdate VARCHAR(255) NOT NULL
);

CREATE TABLE qna(
    qId INT AUTO_INCREMENT PRIMARY KEY,
    qCategory VARCHAR(20) NOT NULL,
    pId INT,
    mId INT,
    qTitle VARCHAR(100) NOT NULL,
    qContent TEXT NOT NULL,
    qImage1 VARCHAR(255),
 	 qImage2 VARCHAR(255),
    qImage3 VARCHAR(255),
    qSecret BOOLEAN,
    qHit INT(50) DEFAULT 0,
    qRegdate DATE DEFAULT (NOW()),
    FOREIGN KEY (pId) REFERENCES product (pId),
    FOREIGN KEY (mId) REFERENCES member (mId)
);

CREATE TABLE qna_comment(
	qcId INT AUTO_INCREMENT PRIMARY KEY,
	qId INT,
	qcWriter VARCHAR(200),
	qcContent TEXT,
	qcRegdate DATE DEFAULT (NOW()),
	FOREIGN KEY (qId) REFERENCES qna (qId)
);

CREATE TABLE notice(
    nId INT AUTO_INCREMENT PRIMARY KEY ,
    mId INT,
    nTitle VARCHAR(100) NOT NULL,
    nContent TEXT NOT NULL,
    nImage1 VARCHAR(255),
    nImage2 VARCHAR(255),
    nImage3 VARCHAR(255),
    nHit INT(50),
    nRegdate DATE DEFAULT (current_date),
    FOREIGN KEY (mId) REFERENCES member (mId)
);


CREATE TABLE cart(
    cId INT AUTO_INCREMENT PRIMARY KEY,
    mId INT,
    pId INT,
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (pId) REFERENCES product (pId)
);

CREATE TABLE orders(
    oId INT AUTO_INCREMENT PRIMARY KEY,
    mId INT,
    oName varchar(255),
    oPostnum VARCHAR(5),
    oAddr1 VARCHAR(255),
    oAddr2 VARCHAR(255),
    oPhone varchar(255),
    oPoint INT(10),
    oPrice INT(10),
    oPayment VARCHAR(1), 
    oDate DATE DEFAULT (current_date),
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (pId) REFERENCES product (pId),
    FOREIGN KEY (cId) REFERENCES cart (cId)
);


create table orderDetails(
    odId INT AUTO_INCREMENT PRIMARY KEY,
    oId INT,
    cId INT,
    pId INT,
    pName VARCHAR(255),
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (oId) REFERENCES order (oId),
    FOREIGN KEY (pId) REFERENCES product (pId)
);

CREATE TABLE review(
    rId INT AUTO_INCREMENT PRIMARY KEY,
    pId INT,
    mId INT,
    rTitle VARCHAR(100) NOT NULL,
    rContent TEXT NOT NULL,
    rImage1 VARCHAR(255),
    rImage2 VARCHAR(255),
    rImage3 VARCHAR(255),
    rStar VARCHAR(5),
    rHit INT(50),
    rRegdate DATE DEFAULT (current_date),
    FOREIGN KEY (pId) REFERENCES product (pId),
    FOREIGN KEY (mId) REFERENCES member (mId)
);
