CREATE TABLE member(
    mIdx BIGINT AUTO_INCREMENT PRIMARY KEY,
    mUserid VARCHAR(255) NOT NULL UNIQUE,
    mPwd VARCHAR(255) NOT NULL,
    mName VARCHAR(255) NOT NULL,
    mPhone VARCHAR(13),
    mProfilePath VARCHAR(255),
    mPhoto VARCHAR(255),
    mFollower BIGINT DEFAULT 0,
    mFollowing BIGINT DEFAULT 0,
    mInfo TEXT,
    mAuth VARCHAR(10) DEFAULT 'user',
    mRegdate DATE DEFAULT (current_date),
    mUpdate DATE
);