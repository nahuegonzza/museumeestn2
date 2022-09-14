-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2022 a las 23:38:15
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_museo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id_administrador` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `username` varchar(24) NOT NULL,
  `contraseña` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_persona`
--

CREATE TABLE `datos_persona` (
  `id_persona` int(11) NOT NULL,
  `nombre` varchar(24) NOT NULL,
  `apellido` varchar(24) NOT NULL,
  `dni` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exposiciones`
--

CREATE TABLE `exposiciones` (
  `id_exposiciones` int(11) NOT NULL,
  `id_salas` int(11) NOT NULL,
  `titulo_exposicion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestion`
--

CREATE TABLE `gestion` (
  `id_gestion` int(11) NOT NULL,
  `id_administrador` int(11) NOT NULL,
  `id_exposiciones` int(11) NOT NULL,
  `fecha_exposicion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `guia`
--

CREATE TABLE `guia` (
  `id_guia` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `id_idioma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idioma`
--

CREATE TABLE `idioma` (
  `id_idioma` int(11) NOT NULL,
  `idioma` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `institucion`
--

CREATE TABLE `institucion` (
  `id_institucion` int(11) NOT NULL,
  `nombre_institucion` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receptor`
--

CREATE TABLE `receptor` (
  `id_receptor` int(11) NOT NULL,
  `id_institucion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recorrido`
--

CREATE TABLE `recorrido` (
  `id_recorrido` int(11) NOT NULL,
  `id_institucion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE `salas` (
  `id_salas` int(11) NOT NULL,
  `id_institucion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno`
--

CREATE TABLE `turno` (
  `id_turno` int(11) NOT NULL,
  `id_visitante` int(11) NOT NULL,
  `id_receptor` int(11) NOT NULL,
  `id_visitaguiada` int(11) NOT NULL,
  `fecha_turno` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitante`
--

CREATE TABLE `visitante` (
  `id_visitante` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `numero_telefono` int(11) NOT NULL,
  `cantidad_visitantes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_guiada`
--

CREATE TABLE `visita_guiada` (
  `id_visitaguiada` int(11) NOT NULL,
  `id_guia` int(11) NOT NULL,
  `id_recorrido` int(11) NOT NULL,
  `fecha_visita` date NOT NULL,
  `horario` time NOT NULL,
  `visitante_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_administrador`),
  ADD UNIQUE KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `datos_persona`
--
ALTER TABLE `datos_persona`
  ADD PRIMARY KEY (`id_persona`);

--
-- Indices de la tabla `exposiciones`
--
ALTER TABLE `exposiciones`
  ADD PRIMARY KEY (`id_exposiciones`),
  ADD UNIQUE KEY `id_salas` (`id_salas`);

--
-- Indices de la tabla `gestion`
--
ALTER TABLE `gestion`
  ADD PRIMARY KEY (`id_gestion`),
  ADD UNIQUE KEY `id_administrador` (`id_administrador`),
  ADD UNIQUE KEY `id_exposiciones` (`id_exposiciones`);

--
-- Indices de la tabla `guia`
--
ALTER TABLE `guia`
  ADD PRIMARY KEY (`id_guia`),
  ADD UNIQUE KEY `id_persona` (`id_persona`),
  ADD UNIQUE KEY `id_idioma` (`id_idioma`);

--
-- Indices de la tabla `idioma`
--
ALTER TABLE `idioma`
  ADD PRIMARY KEY (`id_idioma`);

--
-- Indices de la tabla `institucion`
--
ALTER TABLE `institucion`
  ADD PRIMARY KEY (`id_institucion`);

--
-- Indices de la tabla `receptor`
--
ALTER TABLE `receptor`
  ADD PRIMARY KEY (`id_receptor`),
  ADD UNIQUE KEY `id_receptor` (`id_receptor`),
  ADD UNIQUE KEY `id_institucion` (`id_institucion`);

--
-- Indices de la tabla `recorrido`
--
ALTER TABLE `recorrido`
  ADD PRIMARY KEY (`id_recorrido`),
  ADD UNIQUE KEY `id_institucion` (`id_institucion`);

--
-- Indices de la tabla `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id_salas`),
  ADD UNIQUE KEY `id_institucion` (`id_institucion`);

--
-- Indices de la tabla `turno`
--
ALTER TABLE `turno`
  ADD PRIMARY KEY (`id_turno`),
  ADD UNIQUE KEY `id_visitante` (`id_visitante`),
  ADD UNIQUE KEY `id_receptor` (`id_receptor`),
  ADD UNIQUE KEY `id_visitaguiada` (`id_visitaguiada`);

--
-- Indices de la tabla `visitante`
--
ALTER TABLE `visitante`
  ADD PRIMARY KEY (`id_visitante`),
  ADD UNIQUE KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `visita_guiada`
--
ALTER TABLE `visita_guiada`
  ADD PRIMARY KEY (`id_visitaguiada`),
  ADD UNIQUE KEY `id_guia` (`id_guia`),
  ADD UNIQUE KEY `id_recorrido` (`id_recorrido`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id_administrador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datos_persona`
--
ALTER TABLE `datos_persona`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `exposiciones`
--
ALTER TABLE `exposiciones`
  MODIFY `id_exposiciones` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `gestion`
--
ALTER TABLE `gestion`
  MODIFY `id_gestion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `guia`
--
ALTER TABLE `guia`
  MODIFY `id_guia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `idioma`
--
ALTER TABLE `idioma`
  MODIFY `id_idioma` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `institucion`
--
ALTER TABLE `institucion`
  MODIFY `id_institucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `receptor`
--
ALTER TABLE `receptor`
  MODIFY `id_receptor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recorrido`
--
ALTER TABLE `recorrido`
  MODIFY `id_recorrido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `salas`
--
ALTER TABLE `salas`
  MODIFY `id_salas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `turno`
--
ALTER TABLE `turno`
  MODIFY `id_turno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `visitante`
--
ALTER TABLE `visitante`
  MODIFY `id_visitante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `visita_guiada`
--
ALTER TABLE `visita_guiada`
  MODIFY `id_visitaguiada` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `rol_persona_admin` FOREIGN KEY (`id_persona`) REFERENCES `datos_persona` (`id_persona`);

--
-- Filtros para la tabla `exposiciones`
--
ALTER TABLE `exposiciones`
  ADD CONSTRAINT `relacion_exposiciones_salas` FOREIGN KEY (`id_salas`) REFERENCES `salas` (`id_salas`);

--
-- Filtros para la tabla `gestion`
--
ALTER TABLE `gestion`
  ADD CONSTRAINT `relacion_gestion_admin` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id_administrador`),
  ADD CONSTRAINT `relacion_gestion_exposicion` FOREIGN KEY (`id_exposiciones`) REFERENCES `exposiciones` (`id_exposiciones`);

--
-- Filtros para la tabla `guia`
--
ALTER TABLE `guia`
  ADD CONSTRAINT `relacion_guia_idioma` FOREIGN KEY (`id_idioma`) REFERENCES `idioma` (`id_idioma`),
  ADD CONSTRAINT `rol_persona_guia` FOREIGN KEY (`id_persona`) REFERENCES `datos_persona` (`id_persona`);

--
-- Filtros para la tabla `receptor`
--
ALTER TABLE `receptor`
  ADD CONSTRAINT `rol_institucion_receptor` FOREIGN KEY (`id_institucion`) REFERENCES `institucion` (`id_institucion`);

--
-- Filtros para la tabla `recorrido`
--
ALTER TABLE `recorrido`
  ADD CONSTRAINT `rol_institucion_recorrido` FOREIGN KEY (`id_institucion`) REFERENCES `institucion` (`id_institucion`);

--
-- Filtros para la tabla `salas`
--
ALTER TABLE `salas`
  ADD CONSTRAINT `rol_institucion_salas` FOREIGN KEY (`id_salas`) REFERENCES `institucion` (`id_institucion`);

--
-- Filtros para la tabla `turno`
--
ALTER TABLE `turno`
  ADD CONSTRAINT `relacion_turno_receptor` FOREIGN KEY (`id_receptor`) REFERENCES `receptor` (`id_receptor`),
  ADD CONSTRAINT `relacion_turno_visita` FOREIGN KEY (`id_visitaguiada`) REFERENCES `visita_guiada` (`id_visitaguiada`),
  ADD CONSTRAINT `relacion_turno_visitante` FOREIGN KEY (`id_visitante`) REFERENCES `visitante` (`id_visitante`);

--
-- Filtros para la tabla `visitante`
--
ALTER TABLE `visitante`
  ADD CONSTRAINT `rol_persona_visitante` FOREIGN KEY (`id_persona`) REFERENCES `datos_persona` (`id_persona`);

--
-- Filtros para la tabla `visita_guiada`
--
ALTER TABLE `visita_guiada`
  ADD CONSTRAINT `relacion_visita_guia` FOREIGN KEY (`id_guia`) REFERENCES `guia` (`id_guia`),
  ADD CONSTRAINT `relacion_visita_recorrido` FOREIGN KEY (`id_recorrido`) REFERENCES `recorrido` (`id_recorrido`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
