-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-02-2023 a las 21:40:20
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm-hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointment_information`
--

CREATE TABLE `appointment_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `appointment_doctor_id` bigint(20) UNSIGNED NOT NULL,
  `appointment_speciality_id` bigint(20) UNSIGNED NOT NULL,
  `appointment_patient_id` bigint(20) UNSIGNED NOT NULL,
  `appointment_hospital_id` bigint(20) UNSIGNED NOT NULL,
  `appointment_date` varchar(255) NOT NULL,
  `appointment_hour` varchar(255) NOT NULL,
  `appointment_description` varchar(255) NOT NULL,
  `appointment_status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment_appointment_information`
--

CREATE TABLE `comment_appointment_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `comment_appointment_id` bigint(20) UNSIGNED NOT NULL,
  `comment_doctor_id` bigint(20) UNSIGNED NOT NULL,
  `comment_appointment` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital_information`
--

CREATE TABLE `hospital_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hospital_id` varchar(255) NOT NULL,
  `hospital_name` varchar(255) NOT NULL,
  `hospital_address` varchar(255) NOT NULL,
  `hospital_city` varchar(255) NOT NULL,
  `hospital_department` varchar(255) NOT NULL,
  `hospital_country` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `hospital_information`
--

INSERT INTO `hospital_information` (`id`, `hospital_id`, `hospital_name`, `hospital_address`, `hospital_city`, `hospital_department`, `hospital_country`, `created_at`, `updated_at`) VALUES
(1, 'HNZ', 'Hospital Nacional \"Dr. Juan José Fernández\", Zacamil', 'Calle la Ermita y Avenida Castro Moran, Urbanización José Simeón Cañas, Colonia Zacamil', 'Mejicanos', 'San Salvador', 'El Salvador', '2023-02-24 23:42:39', '2023-02-24 23:42:39'),
(2, 'HNNBB', 'Hospital Nacional Especializado de Niños \"Benjamín Bloom', '\'Final 25 Avenida Norte y Final 29 Calle Poniente', 'San Salvador', 'San Salvador', 'El Salvador', '2023-02-25 00:12:37', '2023-02-25 00:12:37'),
(3, 'HNSB', 'Hospital Nacional General \"Enfermera Angélica Vidal de Najarro\", San Bartolo', 'Centro Urbano San Bartolo Septima Etapa, Boulevard San Bartolo y Calle Meléndez, Contiguo a Zona Franca, San Bartolo', 'Ilopango', 'San Salvador', 'El Salvador', '2023-02-26 01:50:28', '2023-02-26 01:50:28'),
(4, 'HNSR', 'Hospital Nacional General \"San Rafael\", La Libertad', 'Final 4° Calle Oriente 9-2', 'Santa Tecla', 'La Libertad', 'El Salvador', '2023-02-26 01:51:02', '2023-02-26 01:51:02'),
(5, 'HNSJDSA', 'Hospital Nacional Regional \"San Juan de Dios\", Santa Ana', 'Final 13 avenida sur, No. 1', 'Santa Ana', 'Santa Ana', 'El Salvador', '2023-02-26 01:51:38', '2023-02-26 01:51:38'),
(6, 'HNNSFC', 'Hospital Nacional \"Nuestra Señora de Fátima\" de Cojutepeque', 'Bo. El Calvario, km.33 Antigua Carretera Panamericana', 'Cojutepeque', 'Cuscatlan', 'El Salvador', '2023-02-26 01:52:17', '2023-02-26 01:52:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_speciality_information`
--

CREATE TABLE `medical_speciality_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `speciality_id` varchar(255) NOT NULL,
  `speciality_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medical_speciality_information`
--

INSERT INTO `medical_speciality_information` (`id`, `speciality_id`, `speciality_name`, `created_at`, `updated_at`) VALUES
(1, 'OFT', 'Oftalmológica', '2023-02-24 23:42:52', '2023-02-24 23:42:52'),
(2, 'NEU', 'Neurología', '2023-02-24 23:45:16', '2023-02-24 23:45:16'),
(3, 'PED', 'Pediatría', '2023-02-25 00:11:53', '2023-02-25 00:11:53'),
(4, 'CAR', 'Cardiología', '2023-02-26 01:46:50', '2023-02-26 01:46:50'),
(5, 'NEF', 'Nefrologia', '2023-02-26 01:47:23', '2023-02-26 01:47:23'),
(6, 'END', 'Endocrinologia', '2023-02-26 01:47:44', '2023-02-26 01:47:44'),
(7, 'ORT', 'Ortopedia', '2023-02-26 01:47:54', '2023-02-26 01:47:54'),
(8, 'PSI', 'Psiquiatria', '2023-02-26 01:48:04', '2023-02-26 01:48:04'),
(9, 'GAS', 'Gastroenterologia', '2023-02-26 01:48:18', '2023-02-26 01:48:18'),
(11, 'URO', 'Urologia', '2023-02-26 01:48:45', '2023-02-26 01:48:45'),
(12, 'GIN', 'Ginecologia', '2023-02-26 01:49:08', '2023-02-26 01:49:08'),
(13, 'Nut', 'Nutricion', '2023-02-26 01:49:20', '2023-02-26 01:49:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(39, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(40, '2019_08_19_000000_create_failed_jobs_table', 1),
(41, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(42, '2023_02_24_023042_create_hospital_information_table', 1),
(43, '2023_02_24_024424_create_medical_speciality_information_table', 1),
(44, '2023_02_24_024507_create_user_type_information_table', 1),
(45, '2023_02_24_024508_create_users_table', 1),
(46, '2023_02_24_200958_create_appointment_information_table', 2),
(47, '2023_02_24_201025_create_comment_appointment_information_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `speciality_id` bigint(20) UNSIGNED DEFAULT NULL,
  `hospital_id` bigint(20) UNSIGNED NOT NULL,
  `number_phone` int(11) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `type_id`, `user_id`, `name`, `last_name`, `speciality_id`, `hospital_id`, `number_phone`, `date_of_birth`, `gender`, `address`, `city`, `department`, `country`, `user`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(3, 2, 'AMLG', 'Ana Maria', 'Lopez Garcia', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000000001', 'analopez1@correo.com', NULL, 'analopez1/', NULL, '2023-02-24 23:43:05', '2023-02-24 23:43:05'),
(4, 2, 'CAPS', 'Carlos Andres', 'Perez Sanchez', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000000002', 'carlosperez1@correo.com', NULL, 'carlosperez1/', NULL, '2023-02-24 23:44:21', '2023-02-24 23:44:21'),
(5, 2, 'SARM', 'Sofía Alejandra', 'Ramírez Martínez', 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000000003', 'sofiaramirez1@correo.com', NULL, 'sofiaramirez1/', NULL, '2023-02-24 23:46:55', '2023-02-24 23:46:55'),
(6, 2, 'JMGT', 'Juan Manuel', 'González Torres', 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000000004', 'juangonzalez1@correo.com', NULL, 'juangonzalez1/', NULL, '2023-02-25 00:10:19', '2023-02-25 00:10:19'),
(9, 1, 'MITA', 'Mariana Isabel', 'Torres Alvarado', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000000005', 'marianatorres1@correo.com', NULL, 'marianatorres/', NULL, '2023-02-26 01:55:19', '2023-02-26 01:55:19'),
(10, 4, 'DESA', 'Daniel Esteban', 'Sánchez Alzate', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000000006', 'danielsanchez@gmail.com', NULL, 'danielsanchez/', NULL, '2023-02-26 01:56:46', '2023-02-26 01:56:46'),
(11, 3, 'HAAR', 'Hector Alejandro', 'Aguilar Ramos', NULL, 1, 76360002, '1997-08-23', 'Femenino', 'calle principal a Radio Vea, pasaje 1 Poligono A casa #2', 'San Martín', 'San Salvador', 'El Salvador', '000000007', 'hectoraguilar@correo.com', NULL, 'hectoraguilar1/', NULL, '2023-02-26 01:59:34', '2023-02-26 01:59:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_type_information`
--

CREATE TABLE `user_type_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` varchar(255) NOT NULL,
  `type_name` varchar(255) NOT NULL,
  `active_members` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_type_information`
--

INSERT INTO `user_type_information` (`id`, `type_id`, `type_name`, `active_members`, `created_at`, `updated_at`) VALUES
(1, 'ADM', 'administrator', 0, '2023-02-24 23:40:24', '2023-02-24 23:40:24'),
(2, 'DOC', 'Doctor', 0, '2023-02-24 23:40:24', '2023-02-24 23:40:24'),
(3, 'PAT', 'patient', 0, '2023-02-24 23:40:24', '2023-02-24 23:40:24'),
(4, 'GEN', 'GENERAL', 0, '2023-02-24 23:40:24', '2023-02-24 23:40:24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointment_information`
--
ALTER TABLE `appointment_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointment_information_appointment_doctor_id_foreign` (`appointment_doctor_id`),
  ADD KEY `appointment_information_appointment_speciality_id_foreign` (`appointment_speciality_id`),
  ADD KEY `appointment_information_appointment_patient_id_foreign` (`appointment_patient_id`),
  ADD KEY `appointment_information_appointment_hospital_id_foreign` (`appointment_hospital_id`);

--
-- Indices de la tabla `comment_appointment_information`
--
ALTER TABLE `comment_appointment_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_appointment_information_comment_appointment_id_foreign` (`comment_appointment_id`),
  ADD KEY `comment_appointment_information_comment_doctor_id_foreign` (`comment_doctor_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `hospital_information`
--
ALTER TABLE `hospital_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medical_speciality_information`
--
ALTER TABLE `medical_speciality_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_type_id_foreign` (`type_id`),
  ADD KEY `users_speciality_id_foreign` (`speciality_id`),
  ADD KEY `users_hospital_id_foreign` (`hospital_id`);

--
-- Indices de la tabla `user_type_information`
--
ALTER TABLE `user_type_information`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `appointment_information`
--
ALTER TABLE `appointment_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comment_appointment_information`
--
ALTER TABLE `comment_appointment_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hospital_information`
--
ALTER TABLE `hospital_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `medical_speciality_information`
--
ALTER TABLE `medical_speciality_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `user_type_information`
--
ALTER TABLE `user_type_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `appointment_information`
--
ALTER TABLE `appointment_information`
  ADD CONSTRAINT `appointment_information_appointment_doctor_id_foreign` FOREIGN KEY (`appointment_doctor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_hospital_id_foreign` FOREIGN KEY (`appointment_hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_patient_id_foreign` FOREIGN KEY (`appointment_patient_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_speciality_id_foreign` FOREIGN KEY (`appointment_speciality_id`) REFERENCES `medical_speciality_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comment_appointment_information`
--
ALTER TABLE `comment_appointment_information`
  ADD CONSTRAINT `comment_appointment_information_comment_appointment_id_foreign` FOREIGN KEY (`comment_appointment_id`) REFERENCES `appointment_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_appointment_information_comment_doctor_id_foreign` FOREIGN KEY (`comment_doctor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_hospital_id_foreign` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_speciality_id_foreign` FOREIGN KEY (`speciality_id`) REFERENCES `medical_speciality_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `user_type_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
