-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 30, 2024 at 07:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `website`
--

-- --------------------------------------------------------

--
-- Table structure for table `BuyerTable`
--

CREATE TABLE `BuyerTable` (
  `BuyerId` int(20) NOT NULL,
  `BuyerName` varchar(120) NOT NULL,
  `BuyerPhone` int(20) NOT NULL,
  `BuyerAddress` varchar(200) NOT NULL,
  `BuyerPassword` varchar(20) NOT NULL,
  `BuyerAvatar` varchar(500) DEFAULT NULL,
  `BuyerCoverImage` varchar(500) DEFAULT NULL,
  `BuyerDob` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CartTable`
--

CREATE TABLE `CartTable` (
  `CartId` int(11) NOT NULL,
  `BuyerId` int(20) NOT NULL,
  `ItemId` int(20) NOT NULL,
  `ItemQty` int(11) NOT NULL,
  `CreateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CategoryTable`
--

CREATE TABLE `CategoryTable` (
  `CategoryId` int(11) NOT NULL,
  `CategoryName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ItemTable`
--

CREATE TABLE `ItemTable` (
  `ItemId` int(20) NOT NULL,
  `ItemName` varchar(200) NOT NULL,
  `PrinceIn` decimal(10,0) NOT NULL,
  `PriceOut` decimal(10,0) NOT NULL,
  `CategoryId` int(11) NOT NULL,
  `CreateAt` datetime NOT NULL,
  `UpdateAt` datetime NOT NULL,
  `StockQty` int(200) NOT NULL,
  `SellerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OrderStatusChangeTable`
--

CREATE TABLE `OrderStatusChangeTable` (
  `OrderStatusStatusChangeId` int(20) NOT NULL,
  `OrderId` int(20) NOT NULL,
  `OrderStatusId` int(20) NOT NULL,
  `ChangedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OrderStatusTable`
--

CREATE TABLE `OrderStatusTable` (
  `OrderStatusId` int(20) NOT NULL,
  `OrderStatusName` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OrderTable`
--

CREATE TABLE `OrderTable` (
  `OrderId` int(20) NOT NULL,
  `BuyerId` int(20) NOT NULL,
  `ShipperId` int(20) NOT NULL,
  `ShipperProviderId` int(20) NOT NULL,
  `PaymentMethodId` int(20) NOT NULL,
  `OrderStatusId` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PaymentMethodTable`
--

CREATE TABLE `PaymentMethodTable` (
  `PaymentMethodId` int(20) NOT NULL,
  `PaymentMethodName` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SellerTable`
--

CREATE TABLE `SellerTable` (
  `SellerId` int(11) NOT NULL,
  `SellerName` varchar(120) NOT NULL,
  `SellerPhone` int(20) NOT NULL,
  `SellerEmail` varchar(200) NOT NULL,
  `SellerAddress` varchar(200) NOT NULL,
  `SellerPassword` varchar(20) NOT NULL,
  `SellerAvatar` varchar(500) DEFAULT NULL,
  `SellerCoverImage` varchar(500) DEFAULT NULL,
  `SellerDOB` date DEFAULT NULL,
  `SellerDescription` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ShipperProviderTable`
--

CREATE TABLE `ShipperProviderTable` (
  `ShipperProviderId` int(20) NOT NULL,
  `ShipperProviderName` varchar(120) NOT NULL,
  `ShipperProviderAddress` varchar(200) NOT NULL,
  `ShipperProviderPhone` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ShipperTable`
--

CREATE TABLE `ShipperTable` (
  `ShipperID` int(11) NOT NULL,
  `ShipperName` varchar(120) NOT NULL,
  `ShipperPhone` int(20) NOT NULL,
  `ShipperEmail` varchar(200) NOT NULL,
  `ShipperAddress` varchar(200) NOT NULL,
  `ShipperPassword` int(20) NOT NULL,
  `ShipperAvatar` varchar(500) NOT NULL,
  `ShipperCoverImage` varchar(500) NOT NULL,
  `ShipperDOB` date NOT NULL,
  `ShipperProviderId` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `BuyerTable`
--
ALTER TABLE `BuyerTable`
  ADD PRIMARY KEY (`BuyerId`);

--
-- Indexes for table `CartTable`
--
ALTER TABLE `CartTable`
  ADD PRIMARY KEY (`CartId`),
  ADD KEY `ItemId` (`ItemId`),
  ADD KEY `BuyerId` (`BuyerId`);

--
-- Indexes for table `CategoryTable`
--
ALTER TABLE `CategoryTable`
  ADD PRIMARY KEY (`CategoryId`);

--
-- Indexes for table `ItemTable`
--
ALTER TABLE `ItemTable`
  ADD PRIMARY KEY (`ItemId`),
  ADD KEY `CategoryId` (`CategoryId`),
  ADD KEY `SellerId` (`SellerId`);

--
-- Indexes for table `OrderStatusChangeTable`
--
ALTER TABLE `OrderStatusChangeTable`
  ADD PRIMARY KEY (`OrderStatusStatusChangeId`),
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `OrderStatusId` (`OrderStatusId`);

--
-- Indexes for table `OrderStatusTable`
--
ALTER TABLE `OrderStatusTable`
  ADD PRIMARY KEY (`OrderStatusId`);

--
-- Indexes for table `OrderTable`
--
ALTER TABLE `OrderTable`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `BuyerId` (`BuyerId`),
  ADD KEY `ShipperId` (`ShipperId`),
  ADD KEY `PaymentMethodId` (`PaymentMethodId`),
  ADD KEY `OrderStatusId` (`OrderStatusId`),
  ADD KEY `ShipperProviderId` (`ShipperProviderId`);

--
-- Indexes for table `PaymentMethodTable`
--
ALTER TABLE `PaymentMethodTable`
  ADD PRIMARY KEY (`PaymentMethodId`);

--
-- Indexes for table `SellerTable`
--
ALTER TABLE `SellerTable`
  ADD PRIMARY KEY (`SellerId`);

--
-- Indexes for table `ShipperProviderTable`
--
ALTER TABLE `ShipperProviderTable`
  ADD PRIMARY KEY (`ShipperProviderId`);

--
-- Indexes for table `ShipperTable`
--
ALTER TABLE `ShipperTable`
  ADD PRIMARY KEY (`ShipperID`),
  ADD KEY `ShipperProviderId` (`ShipperProviderId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `BuyerTable`
--
ALTER TABLE `BuyerTable`
  MODIFY `BuyerId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `CartTable`
--
ALTER TABLE `CartTable`
  MODIFY `CartId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `CategoryTable`
--
ALTER TABLE `CategoryTable`
  MODIFY `CategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ItemTable`
--
ALTER TABLE `ItemTable`
  MODIFY `ItemId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `OrderStatusChangeTable`
--
ALTER TABLE `OrderStatusChangeTable`
  MODIFY `OrderStatusStatusChangeId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `OrderStatusTable`
--
ALTER TABLE `OrderStatusTable`
  MODIFY `OrderStatusId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `OrderTable`
--
ALTER TABLE `OrderTable`
  MODIFY `OrderId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PaymentMethodTable`
--
ALTER TABLE `PaymentMethodTable`
  MODIFY `PaymentMethodId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SellerTable`
--
ALTER TABLE `SellerTable`
  MODIFY `SellerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ShipperProviderTable`
--
ALTER TABLE `ShipperProviderTable`
  MODIFY `ShipperProviderId` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ShipperTable`
--
ALTER TABLE `ShipperTable`
  MODIFY `ShipperID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CartTable`
--
ALTER TABLE `CartTable`
  ADD CONSTRAINT `carttable_ibfk_1` FOREIGN KEY (`ItemId`) REFERENCES `ItemTable` (`ItemId`),
  ADD CONSTRAINT `carttable_ibfk_2` FOREIGN KEY (`BuyerId`) REFERENCES `BuyerTable` (`BuyerId`);

--
-- Constraints for table `ItemTable`
--
ALTER TABLE `ItemTable`
  ADD CONSTRAINT `itemtable_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `CategoryTable` (`CategoryId`),
  ADD CONSTRAINT `itemtable_ibfk_2` FOREIGN KEY (`SellerId`) REFERENCES `SellerTable` (`SellerId`);

--
-- Constraints for table `OrderStatusChangeTable`
--
ALTER TABLE `OrderStatusChangeTable`
  ADD CONSTRAINT `orderstatuschangetable_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `OrderTable` (`OrderId`),
  ADD CONSTRAINT `orderstatuschangetable_ibfk_2` FOREIGN KEY (`OrderStatusId`) REFERENCES `OrderStatusTable` (`OrderStatusId`);

--
-- Constraints for table `OrderTable`
--
ALTER TABLE `OrderTable`
  ADD CONSTRAINT `ordertable_ibfk_1` FOREIGN KEY (`BuyerId`) REFERENCES `BuyerTable` (`BuyerId`),
  ADD CONSTRAINT `ordertable_ibfk_10` FOREIGN KEY (`OrderStatusId`) REFERENCES `OrderStatusTable` (`OrderStatusId`),
  ADD CONSTRAINT `ordertable_ibfk_11` FOREIGN KEY (`ShipperProviderId`) REFERENCES `ShipperProviderTable` (`ShipperProviderId`),
  ADD CONSTRAINT `ordertable_ibfk_2` FOREIGN KEY (`ShipperId`) REFERENCES `ShipperTable` (`ShipperID`),
  ADD CONSTRAINT `ordertable_ibfk_3` FOREIGN KEY (`BuyerId`) REFERENCES `BuyerTable` (`BuyerId`),
  ADD CONSTRAINT `ordertable_ibfk_4` FOREIGN KEY (`ShipperId`) REFERENCES `ShipperTable` (`ShipperID`),
  ADD CONSTRAINT `ordertable_ibfk_5` FOREIGN KEY (`BuyerId`) REFERENCES `BuyerTable` (`BuyerId`),
  ADD CONSTRAINT `ordertable_ibfk_6` FOREIGN KEY (`ShipperId`) REFERENCES `ShipperTable` (`ShipperID`),
  ADD CONSTRAINT `ordertable_ibfk_7` FOREIGN KEY (`BuyerId`) REFERENCES `BuyerTable` (`BuyerId`),
  ADD CONSTRAINT `ordertable_ibfk_8` FOREIGN KEY (`ShipperId`) REFERENCES `ShipperTable` (`ShipperID`),
  ADD CONSTRAINT `ordertable_ibfk_9` FOREIGN KEY (`PaymentMethodId`) REFERENCES `PaymentMethodTable` (`PaymentMethodId`);

--
-- Constraints for table `ShipperTable`
--
ALTER TABLE `ShipperTable`
  ADD CONSTRAINT `shippertable_ibfk_1` FOREIGN KEY (`ShipperProviderId`) REFERENCES `ShipperProviderTable` (`ShipperProviderId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
