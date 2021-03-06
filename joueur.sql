-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 27 Mars 2015 à 17:12
-- Version du serveur :  5.6.20
-- Version de PHP :  5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `joueur`
--

-- --------------------------------------------------------

--
-- Structure de la table `chapitre`
--

CREATE TABLE IF NOT EXISTS `chapitre` (
  `idChapitre` int(11) NOT NULL,
  `nomChapitre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `chapitre`
--

INSERT INTO `chapitre` (`idChapitre`, `nomChapitre`) VALUES
(0, 'Accueil'),
(1, 'Introduction'),
(2, 'Explication'),
(3, 'Developpement'),
(4, 'Conseils');

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE IF NOT EXISTS `etape` (
`idEtape` int(11) NOT NULL,
  `nomEtape` varchar(25) NOT NULL,
  `idChapitre` int(11) NOT NULL,
  `emplacementChap` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2008 ;

--
-- Contenu de la table `etape`
--

INSERT INTO `etape` (`idEtape`, `nomEtape`, `idChapitre`, `emplacementChap`) VALUES
(0, 'Accueil', 0, 0),
(100, 'Introduction', 1, 0),
(101, 'narration', 1, 1),
(102, 'narration', 1, 2),
(103, 'narration', 1, 3),
(104, 'narration', 1, 6),
(105, 'narration', 1, 7),
(106, 'narration', 1, 8),
(107, 'narration', 1, 9),
(108, 'narration', 1, 10),
(109, 'narration', 1, 11),
(110, 'finCHapitre1', 1, 14),
(200, 'Introduction', 2, 0),
(201, 'narration', 2, 1),
(202, 'narration', 2, 2),
(203, 'narration', 2, 3),
(204, 'narration', 2, 4),
(205, 'narration', 2, 5),
(206, 'narration', 2, 6),
(207, 'narration', 2, 7),
(208, 'finChapitre2', 2, 8),
(300, 'Introduction', 3, 0),
(301, 'narration', 3, 1),
(302, 'narration', 3, 2),
(303, 'narration', 3, 3),
(304, 'narration', 3, 4),
(305, 'narration', 3, 7),
(306, 'narration', 3, 8),
(307, 'narration', 3, 9),
(308, 'narration', 3, 12),
(309, 'narration', 3, 13),
(310, 'narration', 3, 14),
(311, 'narration', 3, 15),
(312, 'narration', 3, 16),
(313, 'narration', 3, 19),
(314, 'finChapitre3', 3, 20),
(400, 'Introduction', 4, 0),
(401, 'narration', 4, 1),
(402, 'narration', 4, 2),
(403, 'narration', 4, 5),
(404, 'narration', 4, 6),
(405, 'narration', 4, 7),
(406, 'narration', 4, 8),
(407, 'narration', 4, 9),
(408, 'narration', 4, 10),
(409, 'narration', 4, 11),
(410, 'narration', 4, 12),
(411, 'narration', 4, 13),
(412, 'finChapitre4', 4, 16),
(1001, 'miniJeu1Notice', 1, 4),
(1002, 'miniJeu2Notice', 3, 5),
(1003, 'miniJeu3Notice', 3, 10),
(1004, 'miniJeu4Notice', 3, 17),
(1005, 'miniJeu5Notice', 4, 3),
(1006, 'quizz1Notice', 1, 12),
(1007, 'quizzNotice', 4, 14),
(2001, 'minijeu1', 1, 5),
(2002, 'miniJeu2', 3, 6),
(2003, 'miniJeu3', 3, 11),
(2004, 'miniJeu4', 3, 18),
(2005, 'miniJeu5', 4, 4),
(2006, 'quizz1', 1, 13),
(2007, 'quizz2', 4, 15);

-- --------------------------------------------------------

--
-- Structure de la table `joue`
--

CREATE TABLE IF NOT EXISTS `joue` (
`idJoue` int(11) NOT NULL,
  `idJoueur` int(11) NOT NULL,
  `idEtape` int(11) NOT NULL,
  `scoreEtape` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=398 ;

--
-- Contenu de la table `joue`
--

INSERT INTO `joue` (`idJoue`, `idJoueur`, `idEtape`, `scoreEtape`) VALUES
(1, 2, 1, 0),
(2, 1, 401, 0),
(3, 1, 402, 0),
(4, 1, 403, 20),
(5, 1, 404, 20),
(6, 1, 405, 2),
(7, 1, 406, 2),
(8, 1, 407, 0),
(9, 0, 401, 2),
(10, 4, 401, 2),
(11, 4, 402, 2),
(12, 4, 2005, 20),
(13, 4, 403, 2),
(14, 4, 404, 2),
(15, 4, 405, 2),
(16, 4, 406, 2),
(17, 4, 405, 2),
(18, 4, 406, 2),
(19, 4, 407, 2),
(20, 4, 408, 2),
(21, 4, 409, 2),
(22, 4, 410, 2),
(23, 4, 411, 2),
(24, 4, 2007, 40),
(25, 4, 410, 0),
(26, 4, 411, 2),
(27, 4, 2007, 40),
(28, 4, 410, 0),
(29, 4, 411, 2),
(30, 4, 2007, 50),
(31, 4, 400, 50),
(32, 4, 401, 2),
(33, 4, 402, 2),
(34, 5, 401, 2),
(35, 5, 402, 2),
(36, 5, 2005, 20),
(37, 5, 403, 2),
(38, 5, 404, 2),
(39, 5, 405, 2),
(40, 5, 406, 2),
(41, 5, 407, 2),
(42, 5, 408, 2),
(43, 5, 409, 2),
(44, 5, 410, 2),
(45, 5, 411, 2),
(46, 5, 2007, 50),
(47, 5, 400, 50),
(48, 0, 401, 2),
(49, 0, 402, 2),
(50, 0, 2005, 25),
(51, 0, 403, 2),
(52, 0, 404, 2),
(53, 0, 405, 2),
(54, 0, 406, 2),
(55, 0, 407, 2),
(56, 0, 408, 2),
(57, 0, 409, 2),
(58, 0, 410, 2),
(59, 0, 411, 2),
(60, 0, 2007, 50),
(61, 0, 400, 50),
(62, 0, 301, 2),
(63, 0, 302, 2),
(64, 0, 303, 2),
(65, 0, 401, 2),
(66, 0, 402, 2),
(67, 24, 401, 2),
(68, 24, 402, 2),
(69, 24, 2005, 20),
(70, 24, 403, 2),
(71, 24, 404, 2),
(72, 24, 405, 2),
(73, 24, 406, 2),
(74, 24, 407, 2),
(75, 24, 408, 2),
(76, 24, 409, 2),
(77, 24, 410, 2),
(78, 24, 411, 2),
(79, 24, 2007, 50),
(80, 24, 400, 50),
(81, 24, 401, 2),
(82, 24, 402, 2),
(83, 24, 2005, 20),
(84, 24, 403, 2),
(85, 24, 404, 2),
(86, 24, 405, 2),
(87, 24, 406, 2),
(88, 24, 407, 2),
(89, 24, 408, 2),
(90, 24, 409, 2),
(91, 24, 410, 2),
(92, 24, 411, 2),
(93, 24, 2007, 50),
(94, 24, 0, 0),
(95, 26, 401, 2),
(96, 26, 402, 2),
(97, 27, 201, 2),
(98, 28, 301, 2),
(99, 28, 302, 2),
(100, 28, 303, 2),
(101, 28, 304, 2),
(102, 29, 301, 2),
(103, 29, 302, 2),
(104, 29, 303, 2),
(105, 29, 304, 2),
(106, 29, 303, 0),
(107, 29, 302, 0),
(108, 29, 303, 2),
(109, 29, 304, 2),
(110, 1, 301, 2),
(111, 1, 302, 2),
(112, 1, 303, 2),
(113, 1, 304, 2),
(114, 1, 301, 2),
(115, 1, 302, 2),
(116, 1, 303, 2),
(117, 1, 304, 2),
(118, 1, 301, 2),
(119, 1, 302, 2),
(120, 1, 303, 2),
(121, 1, 304, 2),
(122, 1, 301, 2),
(123, 1, 302, 2),
(124, 1, 303, 2),
(125, 1, 304, 2),
(126, 1, 301, 2),
(127, 1, 302, 2),
(128, 1, 303, 2),
(129, 1, 304, 2),
(130, 1, 301, 2),
(131, 1, 302, 2),
(132, 1, 303, 2),
(133, 1, 304, 2),
(134, 1, 301, 2),
(135, 1, 302, 2),
(136, 1, 303, 2),
(137, 1, 304, 2),
(138, 1, 2002, 5),
(139, 1, 305, 2),
(140, 1, 305, 2),
(141, 1, 306, 2),
(142, 1, 307, 2),
(143, 1, 306, 0),
(144, 1, 305, 0),
(145, 1, 304, 0),
(146, 1, 2002, 5),
(147, 1, 305, 2),
(148, 1, 304, 0),
(149, 1, 2002, 5),
(150, 1, 401, 2),
(151, 1, 402, 2),
(152, 1, 2005, 20),
(153, 1, 403, 2),
(154, 1, 402, 0),
(155, 1, 401, 0),
(156, 1, 400, 0),
(157, 1, 301, 2),
(158, 1, 302, 2),
(159, 1, 303, 2),
(160, 1, 304, 2),
(161, 1, 2002, 0),
(162, 1, 305, 2),
(163, 1, 304, 0),
(164, 1, 2002, 10),
(165, 1, 305, 2),
(166, 1, 304, 0),
(167, 1, 2002, 10),
(168, 1, 305, 2),
(169, 1, 301, 2),
(170, 1, 302, 2),
(171, 1, 303, 2),
(172, 1, 304, 2),
(173, 1, 2002, 5),
(174, 1, 305, 2),
(175, 1, 306, 2),
(176, 1, 307, 2),
(177, 1, 101, 2),
(178, 1, 100, 0),
(179, 1, 101, 2),
(180, 1, 102, 2),
(181, 1, 103, 2),
(182, 1, 101, 2),
(183, 1, 102, 2),
(184, 1, 103, 2),
(185, 1, 2001, 5),
(186, 1, 104, 2),
(187, 1, 105, 2),
(188, 1, 106, 2),
(189, 1, 105, 0),
(190, 1, 106, 2),
(191, 1, 107, 2),
(192, 1, 108, 2),
(193, 1, 109, 2),
(194, 1, 101, 2),
(195, 1, 102, 2),
(196, 1, 103, 2),
(197, 1, 2001, 5),
(198, 1, 104, 2),
(199, 1, 105, 2),
(200, 1, 101, 2),
(201, 1, 102, 2),
(202, 1, 103, 2),
(203, 1, 2001, 5),
(204, 1, 104, 2),
(205, 1, 105, 2),
(206, 1, 106, 2),
(207, 1, 107, 2),
(208, 1, 108, 2),
(209, 1, 109, 2),
(210, 1, 108, 0),
(211, 1, 109, 2),
(212, 1, 101, 2),
(213, 1, 102, 2),
(214, 1, 103, 2),
(215, 1, 2001, 5),
(216, 1, 104, 2),
(217, 1, 105, 2),
(218, 1, 106, 2),
(219, 1, 107, 2),
(220, 1, 108, 2),
(221, 1, 107, 0),
(222, 1, 108, 2),
(223, 1, 109, 2),
(224, 1, 2006, 80),
(225, 1, 0, 0),
(226, 1, 201, 2),
(227, 1, 202, 2),
(228, 1, 201, 0),
(229, 1, 202, 2),
(230, 1, 203, 2),
(231, 1, 204, 2),
(232, 1, 205, 2),
(233, 1, 206, 2),
(234, 1, 207, 2),
(235, 1, 0, 0),
(236, 1, 301, 2),
(237, 1, 302, 2),
(238, 1, 303, 2),
(239, 1, 304, 2),
(240, 1, 2002, 5),
(241, 1, 305, 2),
(242, 1, 306, 2),
(243, 1, 307, 2),
(244, 1, 2003, 5),
(245, 1, 308, 2),
(246, 1, 309, 2),
(247, 1, 310, 2),
(248, 1, 311, 2),
(249, 1, 312, 2),
(250, 1, 301, 2),
(251, 1, 302, 2),
(252, 1, 303, 2),
(253, 1, 304, 2),
(254, 1, 2002, 5),
(255, 1, 305, 2),
(256, 1, 304, 0),
(257, 1, 303, 0),
(258, 1, 302, 0),
(259, 1, 301, 0),
(260, 1, 300, 0),
(261, 1, 301, 2),
(262, 1, 302, 2),
(263, 1, 303, 2),
(264, 1, 304, 2),
(265, 1, 301, 2),
(266, 1, 302, 2),
(267, 1, 303, 2),
(268, 1, 304, 2),
(269, 1, 2002, 10),
(270, 1, 305, 2),
(271, 1, 306, 2),
(272, 1, 307, 2),
(273, 1, 2003, 5),
(274, 1, 308, 2),
(275, 1, 309, 2),
(276, 1, 310, 2),
(277, 1, 311, 2),
(278, 1, 312, 2),
(279, 1, 2004, 5),
(280, 1, 313, 2),
(281, 1, 313, 0),
(282, 1, 312, 0),
(283, 1, 2004, 5),
(284, 1, 313, 2),
(285, 1, 313, 0),
(286, 1, 312, 0),
(287, 1, 2004, 5),
(288, 1, 313, 2),
(289, 1, 313, 0),
(290, 1, 312, 0),
(291, 1, 2004, 5),
(292, 1, 313, 2),
(293, 1, 312, 0),
(294, 1, 2004, 5),
(295, 1, 313, 2),
(296, 1, 313, 0),
(297, 1, 313, 0),
(298, 1, 313, 2),
(299, 30, 101, 2),
(300, 30, 102, 2),
(301, 30, 103, 2),
(302, 30, 2001, 5),
(303, 30, 104, 2),
(304, 30, 105, 2),
(305, 30, 106, 2),
(306, 30, 107, 2),
(307, 30, 108, 2),
(308, 30, 109, 2),
(309, 30, 2006, 40),
(310, 30, 0, 0),
(311, 30, 301, 2),
(312, 30, 0, 0),
(313, 30, 401, 2),
(314, 30, 301, 2),
(315, 30, 302, 2),
(316, 30, 303, 2),
(317, 30, 304, 2),
(318, 30, 2002, 5),
(319, 30, 305, 2),
(320, 30, 306, 2),
(321, 30, 307, 2),
(322, 30, 2003, 5),
(323, 30, 308, 2),
(324, 30, 309, 2),
(325, 30, 310, 2),
(326, 30, 311, 2),
(327, 30, 312, 2),
(328, 30, 2004, 5),
(329, 30, 313, 2),
(330, 30, 0, 0),
(331, 30, 401, 2),
(332, 30, 402, 2),
(333, 30, 2005, 40),
(334, 30, 403, 2),
(335, 30, 404, 2),
(336, 30, 405, 2),
(337, 30, 406, 2),
(338, 30, 407, 2),
(339, 30, 408, 2),
(340, 30, 409, 2),
(341, 30, 410, 2),
(342, 30, 411, 2),
(343, 30, 2007, 80),
(344, 30, 0, 0),
(345, 31, 101, 2),
(346, 31, 102, 2),
(347, 31, 103, 2),
(348, 31, 2001, 5),
(349, 31, 104, 2),
(350, 31, 105, 2),
(351, 31, 106, 2),
(352, 31, 107, 2),
(353, 31, 108, 2),
(354, 31, 109, 2),
(355, 31, 2006, 100),
(356, 31, 0, 0),
(357, 31, 401, 2),
(358, 31, 402, 2),
(359, 31, 301, 2),
(360, 31, 302, 2),
(361, 31, 303, 2),
(362, 31, 304, 2),
(363, 31, 2002, 5),
(364, 31, 305, 2),
(365, 31, 306, 2),
(366, 31, 307, 2),
(367, 31, 2003, 5),
(368, 31, 308, 2),
(369, 31, 309, 2),
(370, 31, 310, 2),
(371, 31, 311, 2),
(372, 31, 312, 2),
(373, 31, 2004, 5),
(374, 31, 313, 2),
(375, 31, 313, 0),
(376, 31, 312, 0),
(377, 31, 2004, 5),
(378, 31, 313, 2),
(379, 31, 0, 0),
(380, 1, 101, 2),
(381, 1, 102, 2),
(382, 1, 103, 2),
(383, 1, 2001, 5),
(384, 1, 104, 2),
(385, 1, 105, 2),
(386, 1, 106, 2),
(387, 1, 107, 2),
(388, 1, 108, 2),
(389, 1, 109, 2),
(390, 1, 301, 2),
(391, 1, 302, 2),
(392, 1, 303, 2),
(393, 1, 304, 2),
(394, 1, 301, 2),
(395, 1, 302, 2),
(396, 1, 303, 2),
(397, 1, 304, 2);

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE IF NOT EXISTS `joueur` (
`idJoueur` int(11) NOT NULL,
  `pseudo` varchar(25) NOT NULL,
  `motPass` varchar(25) NOT NULL,
  `scoreTotal` int(11) NOT NULL DEFAULT '0',
  `idEtape` int(11) NOT NULL DEFAULT '0',
  `scoreActChap` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Contenu de la table `joueur`
--

INSERT INTO `joueur` (`idJoueur`, `pseudo`, `motPass`, `scoreTotal`, `idEtape`, `scoreActChap`) VALUES
(1, 'russlan', 'rus', 125, 304, 8),
(2, 'baba', 'baba', 100, 3, 10),
(3, 'rus', 'rus', 0, 0, 0),
(4, 'nouv', 'nouv', 186, 402, 4),
(5, 'nouv1', 'nouv1', 96, 400, 0),
(6, 'thomas', 'thomas', 0, 0, 0),
(7, '1234', '1234', 0, 0, 0),
(8, '111', '111', 0, 0, 0),
(9, 'nn', 'nn', 0, 0, 0),
(10, 'dd', 'dd', 0, 0, 0),
(11, 'baba', 'baba', 0, 0, 0),
(12, 'ee', 'ee', 0, 0, 0),
(13, 'rr', 'rr', 0, 0, 0),
(14, 'kevin', 'kevin', 0, 0, 0),
(15, 'tt', 'tt', 0, 0, 0),
(16, 'oo', 'oo', 0, 0, 0),
(17, 'pp', 'pp', 0, 0, 0),
(18, 'mm', 'mm', 0, 0, 0),
(19, '99', '99', 0, 0, 0),
(20, 'pov', 'pov', 0, 0, 0),
(21, 'papa', 'papa', 0, 0, 0),
(22, 'ooa', 'ooa', 0, 0, 0),
(23, 'eer', 'eer', 0, 0, 0),
(24, 'ii', 'ii', 192, 0, 0),
(25, 'jj', 'jj', 0, 0, 0),
(26, 'erre', 'erre', 0, 402, 4),
(27, 'aaa', 'aaa', 0, 201, 2),
(28, 'aeea', 'aeea', 0, 304, 8),
(29, 'assa', 'assa', 0, 304, 12),
(30, 'tistou', '1357alset', 260, 0, 0),
(31, 'elavoue', 'elavoue', 183, 0, 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `chapitre`
--
ALTER TABLE `chapitre`
 ADD PRIMARY KEY (`idChapitre`);

--
-- Index pour la table `etape`
--
ALTER TABLE `etape`
 ADD PRIMARY KEY (`idEtape`);

--
-- Index pour la table `joue`
--
ALTER TABLE `joue`
 ADD PRIMARY KEY (`idJoue`);

--
-- Index pour la table `joueur`
--
ALTER TABLE `joueur`
 ADD PRIMARY KEY (`idJoueur`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `etape`
--
ALTER TABLE `etape`
MODIFY `idEtape` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2008;
--
-- AUTO_INCREMENT pour la table `joue`
--
ALTER TABLE `joue`
MODIFY `idJoue` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=398;
--
-- AUTO_INCREMENT pour la table `joueur`
--
ALTER TABLE `joueur`
MODIFY `idJoueur` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
