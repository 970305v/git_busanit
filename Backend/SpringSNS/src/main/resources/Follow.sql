CREATE TABLE follow(
    fIdx BIGINT AUTO_INCREMENT PRIMARY KEY,
    follow_mIdx BIGINT,
    follower_mIdx BIGINT
);

CREATE TABLE likes(
    lIdx BIGINT AUTO_INCREMENT PRIMARY KEY,
    likes_mIdx BIGINT,
    likes_bIdx BIGINT
);