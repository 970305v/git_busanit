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
    mPoINT INT(10) DEFAULT 3000,
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
    pContent text NOT NULL,
    regdate VARCHAR(255) NOT NULL
);

CREATE TABLE qna(
    qId INT auto_increment primary key,
    qCaregory VARCHAR(20) NOT NULL,
    pId INT,
    mId INT,
    qTitle VARCHAR(100) NOT NULL,
    qContent TEXT NOT NULL,
    qfile VARCHAR(255),
    qHit INT(50),
    qRegdate DATE,
    FOREIGN KEY (pId) REFERENCES product (pId),
    FOREIGN KEY (mId) REFERENCES member (mId)
);

CREATE TABLE notice(
    nId INT auto_increment primary key,
    mId INT,
    nTitle VARCHAR(100) NOT NULL,
    nContent TEXT NOT NULL,
    nfile VARCHAR(255),
    nHit INT(50),
    nRegdate DATE,
    FOREIGN KEY (mId) REFERENCES member (mId)
);

CREATE TABLE cart(
    cId INT auto_increment primary key,
    mId INT,
    pId INT,
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (pId) REFERENCES product (pId)
);

CREATE TABLE orders(
    oId INT primary key,
    mId INT,
    cId INT,
    oPostnum VARCHAR(5),
    oAddress VARCHAR(500),
    oPoINT VARCHAR(10),
    oPayment VARCHAR(1), 
    oDate VARCHAR(100),
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (cId) REFERENCES cart (cId)
);

CREATE TABLE review(
    rId INT auto_increment primary key,
    oId INT,
    mId INT,
    rTitle VARCHAR(100) NOT NULL,
    rContent TEXT NOT NULL,
    rImage1 VARCHAR(255),
    rImage2 VARCHAR(255),
    rImage3 VARCHAR(255),
    rHit INT(50),
    rRegdate DATE,
    FOREIGN KEY (oId) REFERENCES orders (oId),
    FOREIGN KEY (mId) REFERENCES member (mId)
);