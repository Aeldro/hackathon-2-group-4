CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

-- BDD hackathon

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `is_admin` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` VALUES (1,'johnsmith','$argon2id$v=19$m=65536,t=5,p=1$+3bdLT88UpVMccSJhkcg0A$YV+K0DOmZ8KHvBqkGQbkFhH3EI6pug0/UFoWixPotxM',0),(2,'janedoe','$argon2id$v=19$m=65536,t=5,p=1$wK9jdP9+Vuf41hHk+tSZTA$MP6POnJAkFT7780+F2lIhDm3VX/P4261noMvmTVHGmg',1),(3,'mikejones','$argon2id$v=19$m=65536,t=5,p=1$CechHU96mOaHsg7T6STauA$xZ21752BOvcog48dmjmWv5JeyumKEUPsEWczYpwnY5g',0),(4,'sarahbrown','$argon2id$v=19$m=65536,t=5,p=1$6lu12UOLoFlaLRmzQ4L2yQ$NUpjYUKTmWWrjVJIEwodaAw6TzHrjV7MYF8SI25nwwY',0),(5,'adminuser','$argon2id$v=19$m=65536,t=5,p=1$jn0fhXIZfcPr/RLLpi50Xg$6IXhpHVr6Z+WgpaHidOBfFNnsrY7dGEH0T2jIp0K0nw',1);

DROP TABLE IF EXISTS `antutu`;

CREATE TABLE `antutu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `min_antutu` int NOT NULL,
  `max_antutu` int NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `color` varchar(80) NOT NULL,
  `min_price` int NOT NULL,
  `max_price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `condition`;

CREATE TABLE `condition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ram`;

CREATE TABLE `ram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `storage`;

CREATE TABLE `storage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `value` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;