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

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
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
  `model` varchar(100) NOT NULL,
  `manufactureYear` int unsigned NOT NULL,
  `engineSize` int unsigned NOT NULL,
  `fuelType` enum('GASOLINE','DIESEL','HYBRID','ELECTRICITY','HYDROGEN','COMPRESSED_NATURAL_GAS') DEFAULT NULL,
  `weight` int unsigned DEFAULT NULL,
  `makeId` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `makeId` (`makeId`),
  CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`makeId`) REFERENCES `make` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'Mustang Fastback',2015,2300,'GASOLINE',1715,2,'https://www.americancarcity.fr/wp-content/uploads/2020/09/Ford-Mustang-GT-2015-152.jpg'),(2,'Mustang Fastback GT',2018,5000,'GASOLINE',1882,2,'https://www.largus.fr/images/images/2018-ford-mustang-1.jpg'),(3,'E',2020,100,'ELECTRICITY',1524,1,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Honda_e.jpg/1200px-Honda_e.jpg'),(4,'CR-Z',2010,1500,'HYBRID',1119,1,'https://www.largus.fr/images/images/Honda_CRZ_04.jpg'),(5,'CR-Z',2013,1500,'HYBRID',1131,1,'https://www.autoscout24.fr/assets/auto/images/model/honda/honda-cr-z/honda-cr-z-l-01.jpg'),(6,'S-2000',2004,2000,'GASOLINE',1220,1,'https://i.ytimg.com/vi/gphmJ70av2M/sddefault.jpg'),(7,'NSX',1997,3200,'GASOLINE',1370,1,'https://www.motorlegend.com/modules/breve/photos/high/honda-nsx-20960-1-P.jpg'),(8,'CIVIC IX',2015,1800,'GASOLINE',1197,1,'https://www.automobile-magazine.fr/asset/cms/840x394/10597/config/10064/cette-generation-de-civic-nest-toujours-disponible-quen-berline-cinq-portes-ou-break-mais-elle-continue-a-masquer-ses-poignees-de-portes-arriere-dans-les-montants.jpg'),(9,'CIVIC X Type-R',2017,2000,'GASOLINE',1380,1,'https://cache.motorsdb.com/resize/1600x1067/archives/2020/09/25/Honda-Civic-X-Type-R-Limited-Edition-2020-82181.jpg'),(10,'Yaris',2020,1500,'HYBRID',1015,3,'https://content.presspage.com/uploads/1523/1920_yaris-6.jpg');
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
