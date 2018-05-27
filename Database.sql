-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- โฮสต์: localhost
-- เวลาในการสร้าง: 27 พ.ค. 2018  15:40น.
-- เวอร์ชั่นของเซิร์ฟเวอร์: 5.5.44-0ubuntu0.14.04.1
-- รุ่นของ PHP: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- ฐานข้อมูล: `58123250101`
--

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_check`
--

CREATE TABLE IF NOT EXISTS `tbl_check` (
  `chk_id` int(4) NOT NULL AUTO_INCREMENT,
  `chk_date` datetime NOT NULL,
  `chk_sub` int(4) NOT NULL,
  `chk_std` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `chk_status` int(1) NOT NULL,
  PRIMARY KEY (`chk_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=112 ;

--
-- dump ตาราง `tbl_check`
--

INSERT INTO `tbl_check` (`chk_id`, `chk_date`, `chk_sub`, `chk_std`, `chk_status`) VALUES
(90, '2018-05-25 20:08:14', 1, '58123250101', 0),
(91, '2018-05-25 20:08:42', 1, '58123250104', 0),
(93, '2018-05-25 20:09:12', 1, '58123250106', 0),
(94, '2018-05-25 20:09:21', 1, '58123250109', 0),
(95, '2018-05-25 20:09:27', 1, '58123250111', 0),
(96, '2018-05-25 20:09:34', 1, '58123250112', 0),
(97, '2018-05-25 20:09:47', 1, '58123250116', 0),
(98, '2018-05-25 20:09:52', 1, '58123250117', 0),
(99, '2018-05-25 20:09:59', 1, '58123250119', 0),
(100, '2018-05-25 20:10:11', 1, '58123250120', 0),
(101, '2018-05-25 20:10:16', 1, '58123250121', 0),
(102, '2018-05-25 20:10:20', 1, '58123250126', 0),
(103, '2018-05-25 20:10:25', 1, '58123250127', 0),
(104, '2018-05-25 20:10:32', 1, '58123250131', 0),
(105, '2018-05-25 20:11:11', 1, '58123250101', 0),
(106, '2018-05-25 21:48:36', 1, '58123250106', 0),
(107, '2018-05-27 03:58:47', 1, '58123250101', 0),
(108, '2018-05-27 04:21:05', 7, '58123250101', 0),
(109, '2018-05-27 04:21:31', 7, '58123250104', 0),
(110, '2018-05-27 13:40:31', 1, '58123250101', 0),
(111, '2018-05-27 14:50:29', 1, '58123250106', 0);

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_day`
--

CREATE TABLE IF NOT EXISTS `tbl_day` (
  `day_id` int(3) NOT NULL AUTO_INCREMENT,
  `day_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`day_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_homework`
--

CREATE TABLE IF NOT EXISTS `tbl_homework` (
  `hw__id` int(4) NOT NULL AUTO_INCREMENT,
  `hw_sub` int(4) NOT NULL,
  `hw_name` text COLLATE utf8_unicode_ci NOT NULL,
  `hw_score` int(3) NOT NULL,
  `hw_status` int(1) NOT NULL,
  `hw_date_start` datetime NOT NULL,
  `hw_date_stop` datetime NOT NULL,
  PRIMARY KEY (`hw__id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_sendhw`
--

CREATE TABLE IF NOT EXISTS `tbl_sendhw` (
  `shw_id` int(4) NOT NULL AUTO_INCREMENT,
  `shw_hw` int(4) NOT NULL,
  `shw_std` int(4) NOT NULL,
  `shw_score` int(3) NOT NULL,
  `shw_status` int(1) NOT NULL,
  `shw_date` datetime NOT NULL,
  PRIMARY KEY (`shw_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_student`
--

CREATE TABLE IF NOT EXISTS `tbl_student` (
  `std_id` int(4) NOT NULL AUTO_INCREMENT,
  `std_code` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `std_pass` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `std_tname` int(1) NOT NULL,
  `std_fname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `std_lname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `std_tel` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`std_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=25 ;

--
-- dump ตาราง `tbl_student`
--

INSERT INTO `tbl_student` (`std_id`, `std_code`, `std_pass`, `std_tname`, `std_fname`, `std_lname`, `std_tel`) VALUES
(1, '58123250101', '123456', 1, 'นเรชัย', 'คล้ายเจ๊ก', '0989291137'),
(2, '58123250106', '123456', 1, 'ธีรวุฒิ', 'เรียนทับ', '0908162104'),
(3, '58123250121', '123456', 1, 'ชนกชน', 'ใจมั่นคง', '0854542154'),
(8, '58123250102', '123456', 2, 'พัทธนันท์', 'เชาวลิต', '0123456789'),
(9, '58123250104', '123456', 1, 'เสฏฐวุฒิ', 'สามเพชรเจริญ', '0123456789'),
(10, '58123250109', '123456', 1, 'วรรณลภย์', 'คำประเสริฐ', '0123456789'),
(11, '58123250111', '123456', 1, 'มธุพจน์', 'คำพา', '0123456789'),
(12, '58123250112', '123456', 1, 'สถาพร', 'ชมชื่น', '0123456789'),
(13, '58123250114', '123456', 1, 'เรวัตร', 'รัตนา', '0123456789'),
(14, '58123250116', '123456', 1, 'ณัฐวุธ', 'เอี่ยมงาม', '0123456789'),
(15, '58123250117', '123456', 2, 'ชลธิชา', 'เซี่ยงหลิว', '0123456789'),
(16, '58123250119', '123456', 1, 'ฤทธิรงค์', 'ไวทิตานันท์', '0123456789'),
(17, '58123250120', '123456', 1, 'ทวีโชค', 'จิตรจำนงค์', '0123456789'),
(18, '58123250126', '123456', 1, 'จิรายุ', 'จินดา', '0123456789'),
(19, '58123250127', '123456', 1, 'ธีรพล', 'สังขไพรวรรณ', '0123456789'),
(20, '58123250131', '123456', 1, 'สัณหณัฐ', 'รักราช', '0123456789'),
(21, '', '', 0, '', '', ''),
(22, '', '', 0, '', '', ''),
(23, '', '', 0, '', '', ''),
(24, '', '', 0, '', '', '');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_subjects`
--

CREATE TABLE IF NOT EXISTS `tbl_subjects` (
  `sub_id` int(4) NOT NULL AUTO_INCREMENT,
  `sub_code` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sub_sec` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `sub_teacher` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`sub_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- dump ตาราง `tbl_subjects`
--

INSERT INTO `tbl_subjects` (`sub_id`, `sub_code`, `sub_name`, `sub_sec`, `sub_teacher`) VALUES
(1, '412619', 'การสื่อสารในระบบไร้สายและระบบเคลื่อนที่', '1', '11111111111'),
(2, '412514', 'การพัฒนาและการเขียนโปรแกรมบนเว็บ	', '1', '22222222222'),
(3, '412412', 'การบริหารฐานข้อมูล', '1', '33333333333'),
(4, '412618', 'การจัดการเครือข่าย', '1', '44444444444'),
(5, '412811', 'คลังข้อมูลและเทคนิคการทำเหมืองข้อมูล', '1', '55555555555'),
(6, '412814', 'การออกแบบและพัฒนาเกมคอมพิวเตอร์', '1', '22222222222'),
(7, '50321001', 'การขยายพันธ์ุพืช', '2', '66666666666'),
(8, '412210', 'การวิเคราะห์และออกแบบระบบ', '1', '11111111111');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_sub_std`
--

CREATE TABLE IF NOT EXISTS `tbl_sub_std` (
  `ss_id` int(5) NOT NULL AUTO_INCREMENT,
  `ss_std` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `ss_sub` int(4) NOT NULL,
  `ss_score` int(3) NOT NULL,
  `ss_mid` int(3) NOT NULL,
  `ss_fn` int(3) NOT NULL,
  PRIMARY KEY (`ss_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=138 ;

--
-- dump ตาราง `tbl_sub_std`
--

INSERT INTO `tbl_sub_std` (`ss_id`, `ss_std`, `ss_sub`, `ss_score`, `ss_mid`, `ss_fn`) VALUES
(1, '58123250101', 1, 30, 30, 30),
(15, '58123250104', 1, 30, 20, 20),
(22, '58123250106', 1, 20, 30, 20),
(29, '58123250109', 1, 0, 0, 0),
(36, '58123250111', 1, 0, 0, 0),
(43, '58123250112', 1, 0, 0, 0),
(57, '58123250116', 1, 0, 0, 0),
(58, '58123250116', 2, 0, 0, 0),
(59, '58123250116', 3, 0, 0, 0),
(60, '58123250116', 4, 0, 0, 0),
(61, '58123250116', 5, 0, 0, 0),
(62, '58123250116', 6, 0, 0, 0),
(63, '58123250116', 7, 0, 0, 0),
(64, '58123250117', 1, 0, 0, 0),
(65, '58123250117', 2, 0, 0, 0),
(66, '58123250117', 3, 0, 0, 0),
(67, '58123250117', 4, 0, 0, 0),
(68, '58123250117', 5, 0, 0, 0),
(69, '58123250117', 6, 0, 0, 0),
(70, '58123250117', 7, 0, 0, 0),
(71, '58123250119', 1, 0, 0, 0),
(72, '58123250119', 2, 0, 0, 0),
(73, '58123250119', 3, 0, 0, 0),
(74, '58123250119', 4, 0, 0, 0),
(75, '58123250119', 5, 0, 0, 0),
(76, '58123250119', 6, 0, 0, 0),
(77, '58123250119', 7, 0, 0, 0),
(78, '58123250120', 1, 0, 0, 0),
(79, '58123250120', 2, 0, 0, 0),
(80, '58123250120', 3, 0, 0, 0),
(81, '58123250120', 4, 0, 0, 0),
(82, '58123250120', 5, 0, 0, 0),
(83, '58123250120', 6, 0, 0, 0),
(84, '58123250120', 7, 0, 0, 0),
(85, '58123250121', 1, 0, 0, 0),
(86, '58123250121', 2, 0, 0, 0),
(87, '58123250121', 3, 0, 0, 0),
(88, '58123250121', 4, 0, 0, 0),
(89, '58123250121', 5, 0, 0, 0),
(90, '58123250121', 6, 0, 0, 0),
(91, '58123250121', 7, 0, 0, 0),
(92, '58123250126', 1, 0, 0, 0),
(93, '58123250126', 2, 0, 0, 0),
(94, '58123250126', 3, 0, 0, 0),
(95, '58123250126', 4, 0, 0, 0),
(96, '58123250126', 5, 0, 0, 0),
(97, '58123250126', 6, 0, 0, 0),
(98, '58123250126', 7, 0, 0, 0),
(99, '58123250127', 1, 0, 0, 0),
(100, '58123250127', 2, 0, 0, 0),
(101, '58123250127', 3, 0, 0, 0),
(102, '58123250127', 4, 0, 0, 0),
(103, '58123250127', 5, 0, 0, 0),
(104, '58123250127', 6, 0, 0, 0),
(105, '58123250127', 7, 0, 0, 0),
(106, '58123250131', 1, 0, 0, 0),
(107, '58123250131', 2, 0, 0, 0),
(108, '58123250131', 3, 0, 0, 0),
(109, '58123250131', 4, 0, 0, 0),
(110, '58123250131', 5, 0, 0, 0),
(111, '58123250131', 6, 0, 0, 0),
(112, '58123250131', 7, 0, 0, 0),
(113, '58123250101', 2, 0, 0, 0),
(114, '58123250101', 3, 0, 0, 0),
(115, '58123250101', 4, 0, 0, 0),
(116, '58123250101', 5, 0, 0, 0),
(117, '58123250101', 6, 45, 45, 45),
(118, '58123250101', 7, 11, 11, 11),
(119, '58123250104', 2, 0, 0, 0),
(120, '58123250104', 3, 0, 0, 0),
(121, '58123250104', 4, 0, 0, 0),
(122, '58123250104', 5, 0, 0, 0),
(123, '58123250104', 6, 0, 0, 0),
(124, '58123250104', 7, 0, 0, 0),
(125, '58123250106', 2, 0, 0, 0),
(126, '58123250106', 3, 0, 0, 0),
(127, '58123250106', 4, 0, 0, 0),
(128, '58123250106', 5, 0, 0, 0),
(129, '58123250106', 6, 0, 0, 0),
(130, '58123250106', 7, 0, 0, 0),
(131, '58123250109', 2, 0, 0, 0),
(132, '58123250109', 3, 0, 0, 0),
(133, '58123250109', 4, 0, 0, 0),
(134, '58123250109', 5, 0, 0, 0),
(135, '58123250109', 6, 0, 0, 0),
(136, '58123250109', 7, 0, 0, 0);

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_teacher`
--

CREATE TABLE IF NOT EXISTS `tbl_teacher` (
  `tch_id` int(4) NOT NULL AUTO_INCREMENT,
  `tch_code` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `tch_pass` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `tch_tname` int(1) NOT NULL,
  `tch_fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_lname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_position` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `tch_tel` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`tch_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- dump ตาราง `tbl_teacher`
--

INSERT INTO `tbl_teacher` (`tch_id`, `tch_code`, `tch_pass`, `tch_tname`, `tch_fname`, `tch_lname`, `tch_position`, `tch_tel`) VALUES
(1, '11111111111', '1111', 2, 'สะไบรแพร', 'อาจศรี', 'อาจารย์', '0999999999'),
(2, '22222222222', '2222', 1, 'นิพนธ์', 'คำแตง', 'อาจารย์', '0888888888'),
(3, '33333333333', '3333', 2, 'อุไรรัตน์', 'แซ่ตั้ง', 'อาจารย์', '0900000000'),
(4, '44444444444', '4444', 1, 'อมร', 'เจือตี๋', 'อาจารย์', '0900000000'),
(5, '55555555555', '5555', 1, 'ธีรเดช', 'เทวาภินันท์', 'อาจารย์', '0900000000'),
(6, '66666666666', '6666', 2, 'อุมาวดี', 'ศรีเกษตรสรากุล', 'อาจารย์', '0900000000');

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_timetable`
--

CREATE TABLE IF NOT EXISTS `tbl_timetable` (
  `ttb_id` int(4) NOT NULL AUTO_INCREMENT,
  `ttb_std` int(4) NOT NULL,
  `ttb_sub` int(4) NOT NULL,
  `ttb_day` int(3) NOT NULL,
  `ttb_time` time NOT NULL,
  PRIMARY KEY (`ttb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- โครงสร้างตาราง `tbl_tiname`
--

CREATE TABLE IF NOT EXISTS `tbl_tiname` (
  `ti_id` int(2) NOT NULL AUTO_INCREMENT,
  `ti_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ti_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- dump ตาราง `tbl_tiname`
--

INSERT INTO `tbl_tiname` (`ti_id`, `ti_name`) VALUES
(1, 'นาย'),
(2, 'นางสาว'),
(3, 'นาง');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
