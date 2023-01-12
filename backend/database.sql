-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (arm64)
--
-- Host: localhost    Database: garage
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
-- Table structure for table `make`
--

DROP TABLE IF EXISTS `make`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `make` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `make`
--

LOCK TABLES `make` WRITE;
/*!40000 ALTER TABLE `make` DISABLE KEYS */;
INSERT INTO `make` VALUES (1,'Honda','https://www.cars-data.com/design/images/cars-logo/honda-logo-small.jpg'),(2,'Ford','https://www.cars-data.com/design/images/cars-logo/ford-logo-small.jpg'),(3,'Toyota','https://www.cars-data.com/design/images/cars-logo/toyota-logo-small.jpg');
/*!40000 ALTER TABLE `make` ENABLE KEYS */;
UNLOCK TABLES;

-- Table structure for table `vtype`
--

DROP TABLE IF EXISTS `vtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vtype` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vtype`
--

LOCK TABLES `vtype` WRITE;
/*!40000 ALTER TABLE `vtype` DISABLE KEYS */;
INSERT INTO `vtype` VALUES (1,'civil'), (2,'van'), (3,'voyage');
/*!40000 ALTER TABLE `vtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `customer` tinyint(1) NOT NULL,
  `seller` tinyint(1) NOT NULL,
  `admin` INT DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kilometrage` int NOT NULL,
  `fiche` varchar(500) NOT NULL,
  `lieu` varchar(100) NOT NULL,
  `datedispo` date,
  `place` int NOT NULL,
  `model` varchar(100) NOT NULL,
  `makeId` int NOT NULL,
  `vtypeId` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `makeId` (`makeId`),
  CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`makeId`) REFERENCES `make` (`id`),
  KEY `vtypeId` (`vtypeId`),
  CONSTRAINT `vehicle_ibfk_2` FOREIGN KEY (`vtypeId`) REFERENCES `vtype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1, 49000, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis mattis elit, pulvinar aliquet ipsum ultrices et. Sed elementum pellentesque lacinia. Donec ornare sit amet dolor eu consectetur. Sed vehicula diam tortor, sed laoreet massa euismod a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean justo ipsum, consequat eu dapibus vitae, feugiat sit amet nibh. Sed accumsan tellus sit amet nulla luctus, vitae maximus nisi gravida. Etiam venenatis ligula augue, ut venenatis risus dignissim ac. Nulla convallis accumsan nibh scelerisque tincidunt. Mauris porta ut neque eget consequat.", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 1, 2, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"),(2, 49000, "blablabla car 2", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 1, 3, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"),(3, 49000, "blablabla car", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 1, 1, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"), (4, 49000, "blablabla car", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 1, 1, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"), (5, 49000, "blablabla car", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 2, 1, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"), (6, 49000, "blablabla car", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 1, 1, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"), (7, 49000, "blablabla car", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 1, 1, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg"), (8, 49000, "blablabla car", "La Loupe", "2023-01-20", 4, "Voiture de ouf", 3, 3, "https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg");
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-08 11:52:01
