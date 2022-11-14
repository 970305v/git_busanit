create database shoppingmall;
use shoppingmall;

create table member(
    mId int auto_increment primary key,
    mEmail varchar(255) not null unique,
    mPwd varchar(255) not null,
    mName varchar(255) not null,
    mPhone varchar(13) not null,
    mPostnum varchar(5),
    mAddr1 varchar(255),
    mAddr2 varchar(255),
    mPoint int(10) DEFAULT 3000,
    mManager int(1) DEFAULT 0,
    mRegdate date DEFAULT (current_date) 
);

create table product(
    pId int primary key,
    pName varchar(100) not null,
    pGender varchar(1) not null,
    pCaregory varchar(20) not null,
    pStock int(10) not null,
    pPrice int(10) not null,
    pImage1 varchar(255) not null,
    pImage2 varchar(255),
    pImage3 varchar(255),
    pContent text not null,
    pRegdate date
);

create table review(
    rId int auto_increment primary key,
    oId int,
    mId int,
    rTitle varchar(100) not null,
    rContent text not null,
    rImage1 varchar(255),
    rImage2 varchar(255),
    rImage3 varchar(255),
    rHit int(50),
    rRegdate date,
    FOREIGN KEY (oId) REFERENCES orders (oId),
    FOREIGN KEY (mId) REFERENCES member (mId)
);

create table qna(
    qId int auto_increment primary key,
    qCaregory varchar(20) not null,
    pId int,
    mId int,
    qTitle varchar(100) not null,
    qContent text not null,
    qfile varchar(255),
    qHit int(50),
    qRegdate date,
    FOREIGN KEY (pId) REFERENCES product (pId),
    FOREIGN KEY (mId) REFERENCES member (mId)
);

create table notice(
    nId int auto_increment primary key,
    mId int,
    nTitle varchar(100) not null,
    nContent text not null,
    nfile varchar(255),
    nHit int(50),
    nRegdate date,
    FOREIGN KEY (mId) REFERENCES member (mId)
);

create table cart(
    cId int auto_increment primary key,
    mId int,
    pId int,
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (pId) REFERENCES product (pId)
);

create table orders(
    oId int primary key,
    mId int,
    cId int,
    oPostnum varchar(5),
    oAddress varchar(500),
    oPoint varchar(10),
    oPayment varchar(1), 
    oDate varchar(100),
    FOREIGN KEY (mId) REFERENCES member (mId),
    FOREIGN KEY (cId) REFERENCES cart (cId)
);