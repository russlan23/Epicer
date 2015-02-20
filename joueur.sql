-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 02 Février 2015 à 17:47
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=202 ;

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
(108, 'FinChapitre', 1, 8),
(200, 'Introduction', 2, 0),
(201, 'narration', 2, 1),
(1001, 'miniJeuNotice', 1, 4),
(2001, 'miniJeuPlay', 1, 5);

-- --------------------------------------------------------

--
-- Structure de la table `joue`
--

CREATE TABLE IF NOT EXISTS `joue` (
`idJoue` int(11) NOT NULL,
  `idJoueur` int(11) NOT NULL,
  `idEtape` int(11) NOT NULL,
  `scoreEtape` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `joue`
--

INSERT INTO `joue` (`idJoue`, `idJoueur`, `idEtape`, `scoreEtape`) VALUES
(1, 2, 1, 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `joueur`
--

INSERT INTO `joueur` (`idJoueur`, `pseudo`, `motPass`, `scoreTotal`, `idEtape`, `scoreActChap`) VALUES
(1, 'russlan', 'rus', 0, 0, 0),
(2, 'baba', 'baba', 100, 3, 10),
(3, 'rus', 'rus', 0, 0, 0);

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
MODIFY `idEtape` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=202;
--
-- AUTO_INCREMENT pour la table `joue`
--
ALTER TABLE `joue`
MODIFY `idJoue` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `joueur`
--
ALTER TABLE `joueur`
MODIFY `idJoueur` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
