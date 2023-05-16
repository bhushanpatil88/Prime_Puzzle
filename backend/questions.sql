-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2023 at 12:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `puzzle`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question_id` text NOT NULL,
  `question_1` varchar(255) NOT NULL,
  `question_2` varchar(255) NOT NULL,
  `answer_1` int(11) NOT NULL,
  `answer_2` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question_id`, `question_1`, `question_2`, `answer_1`, `answer_2`, `createdAt`, `updatedAt`) VALUES
(1, '1', 'You are given few numbers. You have to find which of them is prime. Note there can be multiple solutions, Think in ODD way.', '(20,44,38,2,56,108,190,98,91,23,27,30,32)', 23, 2, '2023-05-15 05:39:01', '2023-05-15 05:39:01'),
(2, '2.1', 'You have to find the value of:\r\n', '2^1224 mod 1223', 1, 0, '2023-05-15 05:41:31', '2023-05-15 05:41:31'),
(3, '2.2', 'You have been trapped. It\'s a dead end.', 'Revert Back', 0, 0, '2023-05-15 06:39:02', '2023-05-15 06:39:02'),
(4, '3', 'Count the number of co-prime numbers from (1-1337) which are co-prime with 1337.', '', 1140, 0, '2023-05-15 06:40:48', '2023-05-15 06:40:48'),
(5, '4.1', 'Find the value of : ', '2^256587 mod 1337', 526, 0, '2023-05-15 06:48:21', '2023-05-15 06:48:21'),
(6, '4.2', 'You have been trapped. It\'s a dead end.\r\n', 'Revert Back', 0, 0, '2023-05-15 06:54:17', '2023-05-15 06:54:17'),
(7, '5', 'The last question which will get you towards the treasure. We can represent every number as sum of prime numbers.', 'You are given the below matrix answer the total minimum number of primes required to represent  the entire matrix. 10=(2+2+2+2+2), 9 = (5+2+2), 4=(2+2)', 50, 0, '2023-05-15 07:22:57', '2023-05-15 07:22:57'),
(8, '6', 'Treasure Found. You have completed the game.', 'Congrats for winning', 0, 0, '2023-05-15 07:37:12', '2023-05-15 07:37:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
