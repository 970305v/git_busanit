-- MySQL dump 10.13  Distrib 8.0.31, for macos13.0 (arm64)
--
-- Host: localhost    Database: shoppingmall
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cId` int NOT NULL AUTO_INCREMENT,
  `mId` int DEFAULT NULL,
  `cQuantity` int NOT NULL,
  `pId` int DEFAULT NULL,
  PRIMARY KEY (`cId`),
  KEY `mId` (`mId`),
  KEY `pId` (`pId`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`mId`) REFERENCES `member` (`mId`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (4,1,1,5),(5,1,2,3),(9,4,1,3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `mId` int NOT NULL AUTO_INCREMENT,
  `mEmail` varchar(255) NOT NULL,
  `mPwd` varchar(255) NOT NULL,
  `mName` varchar(255) NOT NULL,
  `mPhone` varchar(13) NOT NULL,
  `mPostnum` varchar(5) DEFAULT NULL,
  `mAddr1` varchar(255) DEFAULT NULL,
  `mAddr2` varchar(255) DEFAULT NULL,
  `mPoint` int DEFAULT '3000',
  `mAuth` varchar(10) DEFAULT 'user',
  `mRegdate` date DEFAULT (curdate()),
  PRIMARY KEY (`mId`),
  UNIQUE KEY `mEmail` (`mEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'user@user.com','$2b$10$UsoY1ulBLRZ9d0R0D0qbIeP45piDlGah2CicZqa7z72Eji5b41nse','김창성','010-8488-2181','48053','부산 해운대구 재반로64번길 74-1','910호',0,'user','2022-11-29'),(2,'admin','$2b$10$E1YvQdiye3imCZS7aLDSiOTqgzln14M1Z7kSNeIyzpZQnU/maUFwG','관리자','010-0000-0000','','','',3000,'admin','2022-11-29'),(3,'test@test.com','$2b$10$K7E1R.Y7SeQwPw3eK0hPceHLoG3ZJTohU3E6MkXBIWAsxMPNC7uYe','홍길동','010-1111-1111','13607','경기 성남시 분당구 내정로 54','주소',2000,'user','2022-11-29'),(4,'abcabc@naver.com','$2b$10$YUkXpnAk5RBaR770i0wxQegBv5XgztkUgowEL2kQc3/C0odB.Gfpu','사용자','010-2222-2222','48307','부산 수영구 광남로 2','하이마트',0,'user','2022-11-30'),(5,'qewr@naver.com','$2b$10$Y8yeZdYELUzdqC4LAVI.Ge7gS7jQvcp3..sYTzsjNbyloSpTaDWp.','임꺽정','010-8212-1212','13590','경기 성남시 분당구 성남분당우체국사서함 1 ~ 200','사서함',3000,'user','2022-11-30'),(6,'idchk@naver.com','$2b$10$.iNzbdPHxgtjWZ54LUpqm.RPFtbbk219GXfnsmaU0T5mOOfJd34rG','사용자','010-2123-1234','','','',3000,'user','2022-11-30'),(7,'abcd@naver.com','$2b$10$Srpp3fajwIgnRvfV6GVM9eP/3APEY3e9Ee8/YBYiIFmfKVpKdjrke','테스트','010-1111-1111','48307','부산 수영구 광남로 4','광남로 5',3000,'user','2022-11-30');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `nId` int NOT NULL AUTO_INCREMENT,
  `mId` int DEFAULT NULL,
  `nTitle` varchar(100) NOT NULL,
  `nContent` text NOT NULL,
  `nImage1` varchar(255) DEFAULT NULL,
  `nImage2` varchar(255) DEFAULT NULL,
  `nImage3` varchar(255) DEFAULT NULL,
  `nHit` int DEFAULT NULL,
  `nRegdate` date DEFAULT (curdate()),
  PRIMARY KEY (`nId`),
  KEY `mId` (`mId`),
  CONSTRAINT `notice_ibfk_1` FOREIGN KEY (`mId`) REFERENCES `member` (`mId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,2,'[주문 전 필독] 라이프 포 어스 쇼핑가이드','주문하시기전, 필독 사항을 반드시 읽어주세요.\r\n\r\n안내드린 모든 사항은 주문 전 동의한 것으로 간주됩니다.\r\n\r\n \r\n\r\n \r\n\r\n고객센터\r\n\r\n \r\n\r\n전화번호ㅣ1644-6608\r\n\r\n운영시간ㅣ주말· 공휴일 제외 09:00 - 18:00 (운영시간 외 문의사항은 Q&A 게시판을 이용해주세요.)\r\n\r\n \r\n\r\n \r\n\r\n배송 안내\r\n\r\n \r\n\r\n배송 업체ㅣCJ 대한통운 (1588-1255)\r\n\r\n배송 지역ㅣ대한민국 전지역 및 해외 배송\r\n\r\n배송 비용ㅣ2,500원 / 구매 금액 50,000원 이상 시 무료배송 / 도서산간 지역 별도 추가 금액 발생\r\n\r\n배송 기간ㅣ주말·공휴일 제외 2일 ~ 5일\r\n\r\n \r\n\r\n유의 사항\r\n\r\n- 주문폭주 및 공급 사정으로 인하여 지연 및 품절이 발생될 수 있습니다. \r\n\r\n- 기본 배송기간 이상 소요되는 상품이거나, 품절 상품은 개별 연락을 드립니다.\r\n\r\n \r\n\r\n \r\n\r\n교환·반품 안내\r\n\r\n \r\n\r\n신청 방법ㅣ상품을 수령하신 날로부터 7일 이내로 콜센터(1234-1234) 및 홈페이지 Q&A 게시판을  접수\r\n\r\n배송 비용ㅣ단순 변심은 왕복 택배비 5,000원 (반품 상품을 제외한 나머지 금액이 50,000원 이상일 경우에는 2,500원)\r\n\r\n반품 주소ㅣ서울특별시 서초구 강남대로 123, ㅇㅇㅇ ㅇㅇㅇ\r\n\r\n \r\n\r\n유의 사항\r\n\r\n- 단순 변심의 경우 수령일로부터 7일 이내까지 교환∙반품이 가능합니다. (교환/반품비 고객님 부담)\r\n\r\n- 상품 하자, 오배송의 경우 수령일로부터 7일 이내 고객센터 접수 후 교환∙반품이 가능합니다. (교환/반품비 무료)\r\n\r\n- 제품 특성상 단순 변심, 부주의에 의한 제품 손상 및 파손, 사용 및 개봉한 경우 교환/반품이 불가합니다.\r\n\r\n- 네이버페이 결제 주문은 동일 상품/동일 옵션 교환만 가능합니다.',NULL,NULL,NULL,NULL,'2022-11-30'),(2,2,'적립금 사용 안내','적립금 안내\r\n\r\n\r\n\r\n적립금은 내정보 > 적립금 내역에서 확인 가능합니다.\r\n적립금 지급은 10,000원 이상 결제 주문건에 한해 지급됩니다.\r\n적립금 사용은 20,000원 이상 주문시 사용 가능합니다.\r\n리뷰 적립금은 평일 11시 일괄 지급됩니다.\r\n모든 적립금은 부여된 날짜로부터 180일 이내에 사용 가능합니다.\r\n취소 및 환불 시, 사용하신 적립금에 대해서는 유효기간이 남아있는 경우에만 다시 지급해드립니다.\r\n적립금은 라이프포어스 정책에 따라 변경될 수 있습니다.\r\n \r\n\r\n적립금 지급 기준\r\n\r\n\r\n회원 가입 - 3,000원 (최초 회원가입 시 1회 지급)\r\n한줄 리뷰 - 500원 (15자 이상 작성 시)\r\n꼼꼼 리뷰 - 1,000원 (50자 이상 작성 시)\r\n포토 리뷰 - 2,000원 (제품사진 + 50자 이상)\r\n첫 구매 리뷰: 4,000원 (제품사진 + 50자 이상)\r\n베스트 리뷰 - 10,000원 (제품사진 + 50자 이상, 매주 수요일 3명 추첨)','1669739603951_qna_MenHood1-removebg-preview.png','1669739603952_qna_MenHood2-removebg-preview.png','1669739603954_qna_MenHood3-removebg-preview.png',NULL,'2022-11-30'),(3,2,'[이벤트] 첫 구매 리뷰 이벤트','첫 리뷰를 남기면 적립금이 두배!\r\n\r\n지금 바로 리뷰를 남겨주세요\r\n\r\n \r\n\r\n✔️  한줄 리뷰 - 500원 (15자 이상 작성 시)\r\n\r\n✔️  꼼꼼 리뷰 - 1,000원 (50자 이상 작성 시)\r\n\r\n✔️  포토 리뷰 - 2,000원 (제품사진 + 50자 이상)\r\n\r\n✔️  첫 구매 리뷰: 4,000원 (제품사진 + 50자 이상)\r\n\r\n✔️  베스트 리뷰 - 10,000원 (제품사진 + 50자 이상, 매주 수요일 3명 추첨)\r\n\r\n \r\n\r\n- 매주 수요일 베스트 후기 추첨\r\n\r\n- 적립금 평일 오전 11시 지급\r\n\r\n- 만원 이상 결제시 지급',NULL,NULL,NULL,NULL,'2022-11-30');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderDetails`
--

DROP TABLE IF EXISTS `orderDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderDetails` (
  `odId` int NOT NULL AUTO_INCREMENT,
  `oId` int DEFAULT NULL,
  `oQuantity` int DEFAULT NULL,
  `pId` int DEFAULT NULL,
  `pName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`odId`),
  KEY `oId` (`oId`),
  KEY `pId` (`pId`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`oId`) REFERENCES `orders` (`oId`),
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderDetails`
--

LOCK TABLES `orderDetails` WRITE;
/*!40000 ALTER TABLE `orderDetails` DISABLE KEYS */;
INSERT INTO `orderDetails` VALUES (1,1,1,5,'여성 스니커즈'),(2,2,1,6,'여성 로고 니트'),(3,2,1,4,'남성 스니커즈'),(4,3,2,6,'여성 로고 니트'),(5,4,1,2,'남성 로고 후드');
/*!40000 ALTER TABLE `orderDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `oId` int NOT NULL AUTO_INCREMENT,
  `mId` int DEFAULT NULL,
  `oName` varchar(255) DEFAULT NULL,
  `oPostnum` varchar(5) DEFAULT NULL,
  `oAddr1` varchar(255) DEFAULT NULL,
  `oAddr2` varchar(255) DEFAULT NULL,
  `oPhone` varchar(13) DEFAULT NULL,
  `oPoint` int DEFAULT NULL,
  `oPrice` int DEFAULT NULL,
  `oPayment` varchar(10) DEFAULT NULL,
  `oDate` date DEFAULT NULL,
  PRIMARY KEY (`oId`),
  KEY `mId` (`mId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`mId`) REFERENCES `member` (`mId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'김창성','48053','부산 해운대구 재반로64번길 74-1','910호','010-8488-2181',3000,126000,'무통장입금','2022-11-29'),(2,3,'홍길동','13607','경기 성남시 분당구 내정로 54','주소','010-1111-1111',1000,217000,'무통장입금','2022-11-29'),(3,4,'사용자','48307','부산 수영구 광남로 2','하이마트','010-2222-2222',1500,196500,'무통장입금','2022-11-30'),(4,4,'사용자','48307','부산 수영구 광남로 2','하이마트','010-2222-2222',1500,77500,'무통장입금','2022-11-30');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pId` int NOT NULL AUTO_INCREMENT,
  `pName` varchar(100) NOT NULL,
  `pGender` varchar(5) NOT NULL,
  `pCaregory` varchar(20) NOT NULL,
  `pStock` int NOT NULL,
  `pPrice` int NOT NULL,
  `pImage1` varchar(255) NOT NULL,
  `pImage2` varchar(255) DEFAULT NULL,
  `pImage3` varchar(255) DEFAULT NULL,
  `pContent` text NOT NULL,
  `regdate` varchar(255) NOT NULL,
  PRIMARY KEY (`pId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'남성 로고 니트','MEN','상의',20,99000,'1669730671054_productImage_MenTop1-removebg-preview.png','1669730671057_productImage_MenTop2-removebg-preview.png','1669730671063_productImage_MenTop3-removebg-preview.png','루즈핏 실루엣으로 편안한 착용감을 제공하며, 전면에 배색 포인트 된 로고와 부드러운 울 혼방 소재를 사용하여 데일리로 착용하기 좋습니다.','2022-11-29 23:04:31'),(2,'남성 로고 후드','MEN','상의',9,79000,'1669730701017_productImage_MenHood1-removebg-preview.png','1669730701018_productImage_MenHood2-removebg-preview.png','1669730701020_productImage_MenHood3-removebg-preview.png','후드 중앙에 로고로 포인트를 더했으며 편하게 착용 가능한 루즈핏 후드입니다.','2022-11-29 23:05:01'),(3,'남성 울 팬츠','MEN','하의',20,89000,'1669730736887_productImage_MenPants1-removebg-preview.png','1669730736888_productImage_MenPants2-removebg-preview.png','1669730736890_productImage_MenPants3-removebg-preview.png','원턱이 들어간 부담스럽지 않은 와이드 핏 연출로 어디에나 손쉽게 매치할 수 있어 데일리로 착용하기 좋습니다.','2022-11-29 23:05:36'),(4,'남성 스니커즈','MEN','기타',9,119000,'1669730765035_productImage_MenShoes1-removebg-preview.png','1669730765035_productImage_MenShoes2-removebg-preview.png','1669730765036_productImage_MenShoes3-removebg-preview.png','적당한 두께의 패딩심 삽입으로 편안한 움직임을 제공하며 심플하면서 안정적인 그립력을 제공하여 데일리로 착용하기 좋습니다.','2022-11-29 23:06:05'),(5,'여성 스니커즈','WOMEN','기타',2,129000,'1669730789402_productImage_WomenShoes1-removebg-preview.png','1669730789402_productImage_WomenShoes2-removebg-preview.png','1669730789403_productImage_WomenShoes3-removebg-preview.png','적당한 두께의 패딩심 삽입으로 편안한 움직임을 제공하며 심플하면서 안정적인 그립력을 제공하여 데일리로 착용하기 좋습니다.','2022-11-29 23:06:29'),(6,'여성 로고 니트','WOMEN','상의',18,99000,'1669730834921_productImage_WomenTop1-removebg-preview.png','1669730834923_productImage_WomenTop2-removebg-preview.png','1669730834924_productImage_WomenTop3-removebg-preview.png','루즈핏 실루엣으로 편안한 착용감을 제공하며, 전면에 배색 포인트 된 로고와 부드러운 울 혼방 소재를 사용하여 데일리로 착용하기 좋습니다.','2022-11-29 23:07:14'),(7,'여성 숏 팬츠','WOMEN','하의',20,59000,'1669730866434_productImage_WomenPants1-removebg-preview.png','1669730866435_productImage_WomenPants2-removebg-preview.png','1669730866438_productImage_WomenPants3-removebg-preview.png','두꺼운 두께감의 울 소재로 안감이 있어 편안한 착용감을 제공하며 하프 기장감으로 데일리로 착용하기 좋습니다.\r\n','2022-11-29 23:07:46');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna`
--

DROP TABLE IF EXISTS `qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna` (
  `qId` int NOT NULL AUTO_INCREMENT,
  `qCategory` varchar(20) NOT NULL,
  `pId` int DEFAULT NULL,
  `mId` int DEFAULT NULL,
  `qTitle` varchar(100) NOT NULL,
  `qContent` text NOT NULL,
  `qImage1` varchar(255) DEFAULT NULL,
  `qImage2` varchar(255) DEFAULT NULL,
  `qImage3` varchar(255) DEFAULT NULL,
  `qSecret` tinyint(1) DEFAULT NULL,
  `qHit` int DEFAULT '0',
  `qRegdate` date DEFAULT (now()),
  PRIMARY KEY (`qId`),
  KEY `pId` (`pId`),
  KEY `mId` (`mId`),
  CONSTRAINT `qna_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`),
  CONSTRAINT `qna_ibfk_2` FOREIGN KEY (`mId`) REFERENCES `member` (`mId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna`
--

LOCK TABLES `qna` WRITE;
/*!40000 ALTER TABLE `qna` DISABLE KEYS */;
INSERT INTO `qna` VALUES (1,'상품',4,3,'상품 문의','상품 문의 !',NULL,NULL,NULL,1,0,'2022-11-30'),(2,'주문 / 결제',NULL,3,'주문 및 결제 문의','주문 및 결제 문의','1669736402320_qna_MenPants1-removebg-preview.png0','1669736402320_qna_MenPants2-removebg-preview.png0',NULL,0,0,'2022-11-30'),(3,'배송',NULL,1,'배송 문의','배송 문의','1669736430477_qna_MenHood1-removebg-preview.png0','1669736430477_qna_MenHood2-removebg-preview.png0','1669736430480_qna_MenHood3-removebg-preview.png0',0,0,'2022-11-30'),(4,'반품 / 교환',NULL,1,'반품 및 교환 문의','반품 및 교환 문의','1669736716238_qna_WomenPants1-removebg-preview.png0',NULL,NULL,0,0,'2022-11-30'),(5,'기타',NULL,1,'기타 문의','기타 문의',NULL,NULL,NULL,0,0,'2022-11-30'),(6,'상품',6,3,'상품문의상품문의상품문의상품문의상품문의상품문의','여성 로고 니트 문의 ',NULL,NULL,NULL,0,0,'2022-11-30'),(8,'배송',NULL,3,'aaaaaaaaaaaaaaaaa','qwerasdfqwerasdf',NULL,NULL,NULL,1,0,'2022-11-30'),(10,'기타',NULL,4,'잔잔한 재즈 음악이 천천히 흘러나오고 벽난로가 탁탁탁 소리가 나는 겨울 서점 분위기','잔잔한 재즈 음악이 천천히 흘러나오고 벽난로가 탁탁탁 소리가 나는 겨울 서점 분위기\r\n',NULL,NULL,NULL,0,0,'2022-11-30'),(11,'상품',3,4,'포르투갈대한민국','ㅁㄴㅇㄹ','1669737656932_qna_MenShoes2-removebg-preview.png0','1669737656932_qna_MenShoes3-removebg-preview.png0','1669737656933_qna_MenTop1-removebg-preview.png0',0,0,'2022-11-30'),(12,'상품',2,4,'상품 문의','남성 로고 후드 상품 문의','1669738698341_qna_MenHood3-removebg-preview.png0','1669738698342_qna_MenPants1-removebg-preview.png0','1669738698343_qna_MenPants2-removebg-preview.png0',0,0,'2022-11-30');
/*!40000 ALTER TABLE `qna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna_comment`
--

DROP TABLE IF EXISTS `qna_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna_comment` (
  `qcId` int NOT NULL AUTO_INCREMENT,
  `qId` int DEFAULT NULL,
  `qcWriter` varchar(200) DEFAULT NULL,
  `qcContent` text,
  `qcRegdate` date DEFAULT (now()),
  PRIMARY KEY (`qcId`),
  KEY `qId` (`qId`),
  CONSTRAINT `qna_comment_ibfk_1` FOREIGN KEY (`qId`) REFERENCES `qna` (`qId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna_comment`
--

LOCK TABLES `qna_comment` WRITE;
/*!40000 ALTER TABLE `qna_comment` DISABLE KEYS */;
INSERT INTO `qna_comment` VALUES (1,12,NULL,'상품 문의 답변','2022-11-30');
/*!40000 ALTER TABLE `qna_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `rId` int NOT NULL AUTO_INCREMENT,
  `pId` int DEFAULT NULL,
  `mId` int DEFAULT NULL,
  `rTitle` varchar(100) NOT NULL,
  `rContent` text NOT NULL,
  `rImage1` varchar(255) DEFAULT NULL,
  `rImage2` varchar(255) DEFAULT NULL,
  `rImage3` varchar(255) DEFAULT NULL,
  `rStar` varchar(5) DEFAULT NULL,
  `rHit` int DEFAULT NULL,
  `rRegdate` date DEFAULT (curdate()),
  PRIMARY KEY (`rId`),
  KEY `pId` (`pId`),
  KEY `mId` (`mId`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`mId`) REFERENCES `member` (`mId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,6,3,'여성 로고 니트 리뷰','리뷰 데이터 입니다.','1669733870825_qna_WomenTop2-removebg-preview.png0',NULL,NULL,'★★★★★',NULL,'2022-11-29'),(3,5,1,'여성 스니커즈 리뷰','여성 스니커즈 리뷰 입니다.','1669742711676_qna_WomenShoes1-removebg-preview.png0','1669742711676_qna_WomenShoes2-removebg-preview.png0','1669742711677_qna_WomenShoes3-removebg-preview.png0','★★★★☆',NULL,'2022-11-30');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-30  7:24:16
