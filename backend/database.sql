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
INSERT INTO `vtype` VALUES (1,'civil'), (2,'van'), (3,'4x4'), (4, "sport");
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
  `prix` int NOT NULL,
  `entreprise` varchar(100) NOT NULL,
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
INSERT INTO `vehicle` VALUES 
(1, 49000, "Jaguar XF Sportbrake 25d AWD 2019 More specifically intended for the North American market, “the” XF Sportbrake is distinguished first and foremost by a line combining elegance and distinction, characterized by a design that could not be more sober, far from “over-design” currently in vogue. Its tapered dress makes it appear longer than its sedan sibling, which it isn't. However, it displays a respectable size of 4.95 m. Its interior offers the same sobriety and the same distinction, combining full-grain leather, aluminum and wood. The latter will be criticized for not being a little more present, the dark gray color of this R-Sport finish blending in with the other trim. The upper part of the dashboard has the same arcuate design as on the majestic XJ sedan, inspired by the cockpit of a Riva canoe!
If the habitability in the rear seats is very generous, we regret that the comfort in the center is partly burdened by the firmness of the bench seat and the imposing transmission tunnel. As for the trunk, if its volume is generous in absolute terms (565 litres), it only offers 25 liters more than that of the sedan. But, once the bench seat backs have been folded down, it still releases 1,700 litres, which does not make it a mover, but is much better than the sedan (885 litres). Too bad only that the rear window is not opening.
Steering wheel in hand, this heart of the range diesel version reveals good health. Well known on other models in the range, its modest 2.0-litre 4-cylinder 240 hp engine seemed to us more toned than usual, despite a substantial mass approaching 1.9 tonnes. It must be said that its 500 Nm of torque, available from 1,500 rpm, give it wings, perfectly exploited by an 8-speed automatic transmission, as smooth as it is efficient.", "La Loupe", "2023-01-20", 5, "JAGUAR XF 2 SPORTBRAKE", 1, 1, "https://images.caradisiac.com/logos-ref/modele/modele--jaguar-xf-2-sportbrake/S7-modele--jaguar-xf-2-sportbrake.jpg", 280, "Hyper"),

(2, 49000, "Equipped with a transmission to the front wheels or an all-wheel drive, it is defined as a sporty compact SUV by the English brand, 4.39 m and 5 seats. It is marketed from October 2017. It uses the platform of the second generation of Range Rover Evoque.
The Jaguar E-Pace is powered solely by Ingenium 2-litre aluminum turbo 4-cylinders, in petrol and diesel, with powers of 150 to 300 hp. Only the 150 hp diesel version is available in traction, the others being four-wheel drive, and all versions are equipped with Stop & Start. The E-Pace is offered with two gearboxes, a ZF-speed automatic and a 6-speed manual.", "La Loupe", "2023-01-20", 5, "Jaguar E-Pace", 1, 1, "https://www.challenges.fr/assets/img/2017/07/12/cover-r4x3w1200-5967a2da1d663-white-front-3-4-rt2v2.jpg", 214, "WCS"),

(3, 49000, "This engine delivers 180 kW (245 hp) and develops a maximum torque of 370 Nm. Combined with the seven-speed dual-clutch PDK gearbox, it allows this compact SUV to leap from 0 to 100 km/h in 6.7 seconds. , and reach a maximum speed of 225 km/h. Its consumption is 8.1 l/100 km according to the NEDC (see footnote). In terms of design, comfort, connectivity and sportiness, the most striking new features of this new version of the model are the LED light strip at the rear and the new, fully connected Porsche Communication Management installed at the front, with large 10.9 inch touch screen. The new Macan makes its European debut at the Paris Motor Show.", "La Loupe", "2023-01-20", 5, "Porsche Macan", 1, 1, "https://www.largus.fr/images/images/macan-t-avg.jpg", 97, "Quora"), 

(4, 49000, "New Renault TRAFIC has been given a new design and new engines. Fully customisable, it offers made-to-measure layouts and suitable layout possibilities. So many choices that will allow professionals to find the utility vehicle that meets the challenges of everyday life.", "La Loupe", "2023-01-20", 3, "Renault Trafic 3 DCI130", 1, 2, "https://glide.netfpn.net/publicar/medias/import_3544/20230111/b2ca/105826_3.jpg?fit=crop&crop=center&w=1200&fm=jpg", 144, "G2A"), 

(5, 49000, "The Duster concept car was officially presented in 2009 at the Geneva Motor Show. Presenting itself as a vehicle halfway between the 4 × 4 and the sports coupe, the Duster study has an asymmetrical architecture: if the right side has only one opening, two doors are on the left side. The whole is underlined by a high belt line, profiled LED headlights biting up to the door pillar, all giving an aerodynamic profile and presenting a very good Cd of 0.30.

With a height of less than 1.50 m and an overall length of 4.25 m, the Duster has a trunk volume of 470 dm3. Inside, different configurations are possible: four independent seats in the classic way or two seats in tandem on the driver's side.

The Duster style study was presented with the Renault 1.5 DCI 105 block.", "La Loupe", "2023-01-20", 5, "Dacia Duster", 2, 3, "https://www.challenges.fr/assets/img/2021/07/08/cover-r4x3w1000-61bb1a018a38e-26086-1540017-k2-k1-3559504-jpg.jpg", 301, "EaVehicle"), 

(6, 49000, "It is the successor to the famous WWII automobile Willys MB of the 1940s through the Jeep CJ intended for civilians. The Wrangler debuted in 1987, was facelifted in 1997, again in 2007 and in 2018. Nowadays, the Jeep Wrangler is still produced by the brand's current owner, Fiat.

The different versions of the Wrangler have common and essential characteristics, they use for mechanics, two rigid bridge as well as a transfer case for the reduction of the transmission. And for aesthetics, a removable hard roof with the possibility of installing an optional tarpaulin, a folding windscreen and all the removable doors.", "La Loupe", "2023-01-20", 5, "Jeep Wrangler", 1, 3, "https://www.challenges.fr/assets/img/2017/11/02/cover-r4x3w1200-59fb0424953e9-jeep-wrangler-unlimited-rubicon-24-jpeg.jpg", 120, "Ano Inc"), 

(7, 49000, "The F12berlinetta benefits from several technological innovations derived from the experience acquired in F1 in order to bring itself up to the level of its competitors, the V12 coupés such as the Lamborghini Aventador1,2.

The 65° V12 placed in the central front position, derived from that which fitted the Ferrari Enzo and Ferrari FXX, sees its displacement increased to 6,262 cm3 and delivers 735 hp + 6 hp at high speed thanks to a dynamic intake (i.e. 118 hp /litre) at 8,250 revolutions per minute but has 80% of this value from 2,500 revolutions. The compression ratio reaches a very high value of 13.5:1 for a naturally aspirated petrol engine. The car is fitted with an F1 type automated manual gearbox with a double clutch.

According to the manufacturer, the maximum speed obtained is 340 km/h, the 0 to 100 km/h is given for 3.1 seconds and the 0 to 200 km/h for 8.5 seconds.", "La Loupe", "2023-01-20", 2, "Ferrari F12berlinetta", 1, 4, "https://www.captain-drive.com/wp-content/uploads/2014/12/2013-ferrari-f12-berlinetta-8-1536x960.jpg", 155, "Yes Inc"), 

(8, 49000, "The engine block chosen to equip the Veyron is the keystone of the project, because it is largely on this element that compliance with the brand's commitments – announced by Ferdinand Piëch himself – regarding power and car performance. It was necessary to design an engine that was both compact and extremely powerful, making it possible to obtain a weight/power/size ratio that was as favorable as possible. No engine then existing being compatible with such specifications, Bugatti had to produce a long development work in collaboration with the design offices of the Volkswagen group to create and develop the engine of the Veyron. Based on a VW New Beetle engine, Volkswagen and Bugatti succeeded in developing the 16-cylinder for the Veyron.", "La Loupe", "2023-01-20", 2, "Bugatti Veyron", 3, 4, "https://www.captain-drive.com/wp-content/uploads/2014/12/bugatti-veyron-1536x864.jpeg", 222, "No Inc");
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
