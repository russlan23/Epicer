-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-03-2015 a las 16:07:59
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `joueur`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chapitre`
--

CREATE TABLE IF NOT EXISTS `chapitre` (
  `idChapitre` int(11) NOT NULL,
  `nomChapitre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `chapitre`
--

INSERT INTO `chapitre` (`idChapitre`, `nomChapitre`) VALUES
(0, 'Accueil'),
(1, 'Introduction'),
(2, 'Explication'),
(3, 'Developpement'),
(4, 'Conseils');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etape`
--

CREATE TABLE IF NOT EXISTS `etape` (
`idEtape` int(11) NOT NULL,
  `nomEtape` varchar(25) NOT NULL,
  `idChapitre` int(11) NOT NULL,
  `emplacementChap` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4004 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `etape`
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
(200, 'Introduction', 2, 0),
(201, 'narration', 2, 1),
(202, 'narration', 2, 2),
(203, 'narration', 2, 3),
(204, 'narration', 2, 4),
(205, 'narration', 2, 5),
(206, 'narration', 2, 6),
(207, 'narration', 2, 7),
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
(1000, 'miniJeu1Notice', 1, 4),
(1001, 'minijeu1', 1, 5),
(1002, 'quizz1Notice', 1, 12),
(1003, 'quizz', 1, 13),
(2001, 'miniJeuPlay', 1, 5),
(3000, 'miniJeu2Notice', 3, 5),
(3001, 'miniJeu2', 3, 6),
(3002, 'miniJeu3Notice', 3, 10),
(3003, 'miniJeu3', 3, 11),
(3004, 'miniJeu4Notice', 3, 17),
(3005, 'miniJeu4', 3, 18),
(4000, 'miniJeu5Notice', 4, 3),
(4001, 'miniJeu5', 4, 4),
(4002, 'quizzNotice', 4, 14),
(4003, 'quizz', 4, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `joue`
--

CREATE TABLE IF NOT EXISTS `joue` (
`idJoue` int(11) NOT NULL,
  `idJoueur` int(11) NOT NULL,
  `idEtape` int(11) NOT NULL,
  `scoreEtape` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `joue`
--

INSERT INTO `joue` (`idJoue`, `idJoueur`, `idEtape`, `scoreEtape`) VALUES
(1, 2, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `joueur`
--

CREATE TABLE IF NOT EXISTS `joueur` (
`idJoueur` int(11) NOT NULL,
  `pseudo` varchar(25) NOT NULL,
  `motPass` varchar(25) NOT NULL,
  `scoreTotal` int(11) NOT NULL DEFAULT '0',
  `idEtape` int(11) NOT NULL DEFAULT '0',
  `scoreActChap` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `joueur`
--

INSERT INTO `joueur` (`idJoueur`, `pseudo`, `motPass`, `scoreTotal`, `idEtape`, `scoreActChap`) VALUES
(1, 'russlan', 'rus', 0, 0, 0),
(2, 'baba', 'baba', 100, 3, 10),
(3, 'rus', 'rus', 0, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chapitre`
--
ALTER TABLE `chapitre`
 ADD PRIMARY KEY (`idChapitre`);

--
-- Indices de la tabla `etape`
--
ALTER TABLE `etape`
 ADD PRIMARY KEY (`idEtape`);

--
-- Indices de la tabla `joue`
--
ALTER TABLE `joue`
 ADD PRIMARY KEY (`idJoue`);

--
-- Indices de la tabla `joueur`
--
ALTER TABLE `joueur`
 ADD PRIMARY KEY (`idJoueur`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `etape`
--
ALTER TABLE `etape`
MODIFY `idEtape` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4004;
--
-- AUTO_INCREMENT de la tabla `joue`
--
ALTER TABLE `joue`
MODIFY `idJoue` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `joueur`
--
ALTER TABLE `joueur`
MODIFY `idJoueur` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
