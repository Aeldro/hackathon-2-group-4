-- BDD hackathon

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `is_admin` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` VALUES (1,'johnsmith','$argon2id$v=19$m=65536,t=5,p=1$+3bdLT88UpVMccSJhkcg0A$YV+K0DOmZ8KHvBqkGQbkFhH3EI6pug0/UFoWixPotxM',0),(2,'janedoe','$argon2id$v=19$m=65536,t=5,p=1$wK9jdP9+Vuf41hHk+tSZTA$MP6POnJAkFT7780+F2lIhDm3VX/P4261noMvmTVHGmg',1),(3,'mikejones','$argon2id$v=19$m=65536,t=5,p=1$CechHU96mOaHsg7T6STauA$xZ21752BOvcog48dmjmWv5JeyumKEUPsEWczYpwnY5g',0),(4,'sarahbrown','$argon2id$v=19$m=65536,t=5,p=1$6lu12UOLoFlaLRmzQ4L2yQ$NUpjYUKTmWWrjVJIEwodaAw6TzHrjV7MYF8SI25nwwY',0),(5,'adminuser','$argon2id$v=19$m=65536,t=5,p=1$jn0fhXIZfcPr/RLLpi50Xg$6IXhpHVr6Z+WgpaHidOBfFNnsrY7dGEH0T2jIp0K0nw',1);

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `color` varchar(80) NOT NULL,
  `min_price` int NOT NULL,
  `max_price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `category` VALUES (1,' HC','Blue',0,9),(2,'C','Green',10,50),(3,'B','Yellow',51,90),(4,'A','Orange',91,150),(5,'Premium','Red',151,1000);

CREATE TABLE `condition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `condition` VALUES (4,'Bon état',NULL,20),(5,'Très bon état',NULL,10),(6,'Parfait état',NULL,0);

CREATE TABLE `ram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ram` VALUES (1,'1 GO',10),(2,'2 GO',15),(3,'3 GO',20),(4,'4 GO',25),(5,'5 GO',30),(6,'6 GO',35),(7,'8 GO',40),(8,'12 GO',45),(9,'16 GO',50);

CREATE TABLE `storage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `storage` VALUES (1,'16 GO',10),(2,'32 GO',15),(3,'64 GO',20),(4,'128 GO',25),(5,'256 GO',30),(6,'512 GO',35),(7,'1000 GO',40);

CREATE TABLE `network` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `network` VALUES (1,'4G'),(2,'5G');
