-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2026 a las 04:50:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `documento` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` tinyint(4) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `mercancia` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `latitud` decimal(10,0) NOT NULL,
  `longitud` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `tipo`, `documento`, `nombre`, `edad`, `genero`, `mercancia`, `latitud`, `longitud`) VALUES
(1, 'Cedula', '34567', 'natalia', 67, 'Masculino', '[\"granel\",\"fragil\"]', 5, -74),
(2, 'extrangera', '34567', 'natalia', 43, 'Masculino', '[\"general\",\"granel\"]', 5, -74),
(3, 'Cedula', '123456', 'natalia', 32, 'Masculino', '[\"granel\",\"fragil\"]', 5, -74);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
