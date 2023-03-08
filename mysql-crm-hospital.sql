-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-03-2023 a las 20:54:46
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
-- Base de datos: `mysql-crm-hospital`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrator_information`
--

CREATE TABLE `administrator_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `hospital_id` bigint(20) UNSIGNED NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `administrator_information`
--

INSERT INTO `administrator_information` (`id`, `type_id`, `user_id`, `name`, `last_name`, `hospital_id`, `user`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, '055781449', 'Hector', 'Aguilar', 3, 'hectoraguilar1', 'hector@correo.com', NULL, 'hectoraguilar1/', NULL, '2023-03-01 06:33:02', '2023-03-03 12:32:39'),
(2, 1, '06546232', 'Mariana Yamileth', 'Melendez Orellana', 2, 'marianamelendez1', 'mariana@correo.com', NULL, NULL, NULL, '2023-03-01 07:29:24', '2023-03-02 19:34:54'),
(5, 1, 'MITA', 'Mariana Isabel', 'Torres Alvarado', 3, 'marianatorres1', 'mariana2@correo.com', NULL, 'marianatorres1', NULL, '2023-03-03 09:12:45', '2023-03-03 09:12:45'),
(6, 1, '054212343', 'Sebastian Alejandro', 'Vega Montenegro', 3, 'sebastianvega1', 'sebastian@correo.com', NULL, 'sebastianvega1/', NULL, '2023-03-03 12:02:13', '2023-03-03 12:02:13'),
(7, 1, '325406510', 'Dominic Alejandro', 'Melendez Orellana', 3, 'dominicmelendez1', 'dominic2@correo.com', NULL, 'domoinic1/', NULL, '2023-03-03 12:38:57', '2023-03-03 12:38:57'),
(8, 1, '354651324', 'Jairo', 'Vega', 3, 'jairovega2', 'jairo@correo.com', NULL, 'jairo1/', NULL, '2023-03-04 02:32:35', '2023-03-04 02:33:32');

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
  `appointment_status` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `appointment_information`
--

INSERT INTO `appointment_information` (`id`, `appointment_doctor_id`, `appointment_speciality_id`, `appointment_patient_id`, `appointment_hospital_id`, `appointment_date`, `appointment_hour`, `appointment_description`, `appointment_status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, '2023-03-30', '10:00', 'Revision de los Ojos Rutinaria', 4, '2023-03-02 05:42:45', '2023-03-03 12:42:57'),
(2, 1, 2, 2, 2, '2023-03-29', '12:37', 'Control Rutinario', 2, '2023-03-02 23:37:29', '2023-03-02 23:37:29'),
(3, 1, 1, 1, 1, '2023-03-17', '19:33', 'revision de operacion', 2, '2023-03-03 07:31:36', '2023-03-03 07:31:36'),
(5, 4, 2, 4, 1, '2023-03-24', '09:20', 'Rutina', 2, '2023-03-03 09:23:05', '2023-03-03 09:23:05'),
(7, 4, 2, 4, 1, '2023-03-15', '12:23', 'Rutinario', 2, '2023-03-03 12:25:25', '2023-03-03 12:25:25');

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

--
-- Volcado de datos para la tabla `comment_appointment_information`
--

INSERT INTO `comment_appointment_information` (`id`, `comment_appointment_id`, `comment_doctor_id`, `comment_appointment`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Se realiza correctamente la cita', '2023-03-02 22:45:37', '2023-03-02 22:45:37'),
(2, 1, 1, 'Este es un nuevo comentario', '2023-03-02 23:32:08', '2023-03-02 23:32:08'),
(3, 2, 1, 'Segunda prueba comentario', '2023-03-02 23:38:14', '2023-03-02 23:38:14'),
(4, 7, 1, 'Prueba de comentario', '2023-03-03 12:29:47', '2023-03-03 12:29:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_information`
--

CREATE TABLE `doctor_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `speciality_id` bigint(20) UNSIGNED NOT NULL,
  `hospital_id` bigint(20) UNSIGNED NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `doctor_information`
--

INSERT INTO `doctor_information` (`id`, `type_id`, `user_id`, `name`, `last_name`, `speciality_id`, `hospital_id`, `user`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 2, '048432152', 'Ana Maria', 'Lopez Garcia', 1, 1, 'analopez1', 'analopez1@correo.com', NULL, 'analopez1/', NULL, '2023-03-02 02:27:54', '2023-03-02 19:47:37'),
(2, 2, '05215654', 'Carlos Andres', 'Perez Sanchez', 1, 1, 'carlosperez1', 'carlos@gmail.com', NULL, 'carlosperez1/', NULL, '2023-03-03 04:21:18', '2023-03-03 04:21:18'),
(3, 2, '015465421', 'Sofía Alejandra', 'Ramírez Martínez', 2, 1, 'sofiaramirez1', 'sofia@correo.com', NULL, 'sofiaramirez1/', NULL, '2023-03-03 04:23:08', '2023-03-03 04:23:08'),
(4, 2, '0554544115', 'Juan Manuel', 'González Torres', 2, 1, 'juangonzalez1', 'juangonzalez1@correo.com', NULL, 'juangonzalez1/', NULL, '2023-03-03 09:14:22', '2023-03-03 09:14:22'),
(5, 2, '4987684684', 'Natalia Paola', 'Rodriguez Medina', 3, 3, 'nataliarodriguez1', 'natalia@correo.com', NULL, NULL, NULL, '2023-03-03 12:08:04', '2023-03-03 12:44:43');

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
(1, 'HNZ', 'Hospital Nacional \"Dr. Juan José Fernández\", Zacamil', 'Calle la Ermita y Avenida Castro Moran, Urbanización José Simeón Cañas, Colonia Zacamil,', 'Mejicanos', 'San Salvador', 'El Salvador', '2023-03-01 06:00:42', '2023-03-02 21:45:18'),
(2, 'HNNBB', 'Hospital Nacional Especializado de Niños \"Benjamín Bloom', 'Final 25 Avenida Norte y Final 29 Calle Poniente', 'San Salvador', 'San Salvador', 'El Salvador', '2023-03-01 06:01:15', '2023-03-01 06:01:15'),
(3, 'HNSB', 'Hospital Nacional General \"Enfermera Angélica Vidal de Najarro\", San Bartolo', 'Centro Urbano San Bartolo Septima Etapa, Boulevard San Bartolo y Calle Meléndez, Contiguo a Zona Franca, San Bartolo', 'Ilopango', 'San Salvador', 'El Salvador', '2023-03-03 09:06:42', '2023-03-03 09:06:42'),
(4, 'HNSR', 'Hospital Nacional General \"San Rafael\", La Libertad', 'Final 4ta Calle Oriente 9-2', 'Santa Tecla', 'La Libertad', 'El Salvador', '2023-03-03 12:18:35', '2023-03-03 12:46:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital_specialities`
--

CREATE TABLE `hospital_specialities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hospital_information_id` bigint(20) UNSIGNED NOT NULL,
  `medical_speciality_information_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `hospital_specialities`
--

INSERT INTO `hospital_specialities` (`id`, `hospital_information_id`, `medical_speciality_information_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2023-03-03 04:33:12', '2023-03-03 04:33:12'),
(2, 1, 1, '2023-03-03 04:48:51', '2023-03-03 04:48:51'),
(3, 1, 2, '2023-03-03 04:55:05', '2023-03-03 04:55:05'),
(4, 2, 3, '2023-03-03 09:08:26', '2023-03-03 09:08:26'),
(5, 4, 5, '2023-03-03 12:21:26', '2023-03-03 12:21:26');

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
(1, 'OFT', 'Oftalmológia', '2023-03-01 05:59:40', '2023-03-02 21:56:44'),
(2, 'NEU', 'Neurología', '2023-03-01 05:59:48', '2023-03-01 05:59:48'),
(3, 'PED', 'Pediatría', '2023-03-01 05:59:56', '2023-03-01 05:59:56'),
(4, 'CAR', 'Cardiología', '2023-03-03 09:07:44', '2023-03-03 09:07:44'),
(5, 'NEF', 'Nefrología', '2023-03-03 12:20:17', '2023-03-03 12:51:02');

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
(78, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(79, '2023_02_28_125647_create_user_type_information_table', 1),
(80, '2023_02_28_125727_create_hospital_information_table', 1),
(81, '2023_02_28_125757_create_medical_speciality_information_table', 1),
(82, '2023_02_28_135501_create_hospital_speciality_table', 1),
(83, '2023_02_28_223111_create_administrator_information_table', 1),
(84, '2023_02_28_224406_create_doctor_information_table', 1),
(85, '2023_02_28_225453_create_patient_information_table', 1),
(86, '2023_02_28_230114_create_secretary_information_table', 1),
(87, '2023_02_28_232011_create_status_type_information_table', 1),
(88, '2023_02_28_232012_create_appointment_information_table', 1),
(89, '2023_02_28_233039_create_comment_appointment_information_table', 1),
(90, '2023_03_02_200634_create_hospital_specialities_table', 2),
(91, '2023_03_02_214933_create_hospital_specialities_table', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patient_information`
--

CREATE TABLE `patient_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `hospital_id` bigint(20) UNSIGNED NOT NULL,
  `number_phone` int(11) NOT NULL,
  `emergency_number_phone` int(11) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `patient_information`
--

INSERT INTO `patient_information` (`id`, `type_id`, `user_id`, `name`, `last_name`, `hospital_id`, `number_phone`, `emergency_number_phone`, `date_of_birth`, `gender`, `address`, `city`, `department`, `country`, `user`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 3, '0555248465', 'Dominic Martin', 'Aguilar Melendez', 1, 47845454, 76360002, '2020-07-21', 'Masculino', 'calle principal a Radio Vea, pasaje 1 Poligono A casa #2', 'San Martín', 'San Salvador', 'El Salvador', 'dominicaguilar1', 'dominic@correo.com', NULL, NULL, NULL, '2023-03-02 05:38:21', '2023-03-02 20:13:18'),
(2, 3, '054215421', 'Karla Alejandra', 'Aguilar Monterrosa', 1, 55223365, 76360002, '1993-12-11', 'Femenino', 'Residencial Las Magnolias, reparto Santa Maria, casa 10E', 'Ayutuxtepeque', 'San Salvador', 'El Salvador', 'karlaaguilar1', 'karla@correo.com', NULL, 'karlaaguilar1/', NULL, '2023-03-02 09:10:07', '2023-03-02 09:10:07'),
(4, 3, '055454214', 'Claudia Elizabeth', 'Ramos Urrutia', 3, 78545610, 76360002, '1971-01-31', 'Femenino', 'Colonia Montserrat, apartamento N, #47', 'San Salvador', 'San Salvador', 'El Salvador', 'claudiaramos1', 'claudia@correo.com', NULL, 'claudiaramos1/', NULL, '2023-03-03 09:17:40', '2023-03-03 09:17:40'),
(5, 3, '054651065', 'Maria De Los Angeles', 'Aguilar Monterrosa', 2, 654351654, 76360002, '2000-12-03', 'Femenino', 'Colonia las magnolias, reparto las santa Maria', 'Ayutuxtepeque', 'San Salvador', 'El Salvador', 'mariaaguilar1', 'mariaaguilar@correo.com', NULL, 'mariaaguilar1/', NULL, '2023-03-03 12:13:50', '2023-03-03 12:13:50');

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
-- Estructura de tabla para la tabla `secretary_information`
--

CREATE TABLE `secretary_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `hospital_id` bigint(20) UNSIGNED NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `secretary_information`
--

INSERT INTO `secretary_information` (`id`, `type_id`, `user_id`, `name`, `last_name`, `hospital_id`, `user`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 4, '08452121', 'Daniel Esteban', 'Sánchez Alzate', 1, 'danielsanchez1', 'daniel@correo.com', NULL, NULL, NULL, '2023-03-02 03:37:14', '2023-03-02 20:27:24'),
(2, 4, '054521546', 'Adriana Camila', 'Mendoza Velasco', 2, 'adrianamendoza1', 'adriana@correo.com', NULL, 'adrianamendoza1/', NULL, '2023-03-03 09:19:16', '2023-03-03 09:19:16'),
(3, 4, '545854654', 'Fatima Gabriela', 'Melendez Orellana', 2, 'fatimamelendez1', 'fatima@correo.com', NULL, NULL, NULL, '2023-03-03 12:16:10', '2023-03-03 12:49:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status_type_information`
--

CREATE TABLE `status_type_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status_type_id` varchar(255) NOT NULL,
  `status_type_name` varchar(255) NOT NULL,
  `status_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `status_type_information`
--

INSERT INTO `status_type_information` (`id`, `status_type_id`, `status_type_name`, `status_active`, `created_at`, `updated_at`) VALUES
(1, 'ACT', 'Activa', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24'),
(2, 'PEN', 'Pendiente', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24'),
(3, 'REA', 'Realizada', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24'),
(4, 'CAN', 'Cancelada', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_type_information`
--

CREATE TABLE `user_type_information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_type_id` varchar(255) NOT NULL,
  `user_type_name` varchar(255) NOT NULL,
  `user_active_members` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_type_information`
--

INSERT INTO `user_type_information` (`id`, `user_type_id`, `user_type_name`, `user_active_members`, `created_at`, `updated_at`) VALUES
(1, 'ADM', 'Administrator', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24'),
(2, 'DOC', 'Doctor', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24'),
(3, 'PAT', 'Patient', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24'),
(4, 'SEC', 'Secretary', 0, '2023-03-01 05:49:24', '2023-03-01 05:49:24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrator_information`
--
ALTER TABLE `administrator_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `administrator_information_email_unique` (`email`),
  ADD KEY `administrator_information_type_id_foreign` (`type_id`),
  ADD KEY `administrator_information_hospital_id_foreign` (`hospital_id`);

--
-- Indices de la tabla `appointment_information`
--
ALTER TABLE `appointment_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointment_information_appointment_doctor_id_foreign` (`appointment_doctor_id`),
  ADD KEY `appointment_information_appointment_speciality_id_foreign` (`appointment_speciality_id`),
  ADD KEY `appointment_information_appointment_patient_id_foreign` (`appointment_patient_id`),
  ADD KEY `appointment_information_appointment_hospital_id_foreign` (`appointment_hospital_id`),
  ADD KEY `appointment_information_appointment_status_foreign` (`appointment_status`);

--
-- Indices de la tabla `comment_appointment_information`
--
ALTER TABLE `comment_appointment_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_appointment_information_comment_appointment_id_foreign` (`comment_appointment_id`),
  ADD KEY `comment_appointment_information_comment_doctor_id_foreign` (`comment_doctor_id`);

--
-- Indices de la tabla `doctor_information`
--
ALTER TABLE `doctor_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `doctor_information_email_unique` (`email`),
  ADD KEY `doctor_information_type_id_foreign` (`type_id`),
  ADD KEY `doctor_information_speciality_id_foreign` (`speciality_id`),
  ADD KEY `doctor_information_hospital_id_foreign` (`hospital_id`);

--
-- Indices de la tabla `hospital_information`
--
ALTER TABLE `hospital_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hospital_specialities`
--
ALTER TABLE `hospital_specialities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hospital_specialities_hospital_information_id_foreign` (`hospital_information_id`),
  ADD KEY `hospital_specialities_medical_speciality_information_id_foreign` (`medical_speciality_information_id`);

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
-- Indices de la tabla `patient_information`
--
ALTER TABLE `patient_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `patient_information_email_unique` (`email`),
  ADD KEY `patient_information_type_id_foreign` (`type_id`),
  ADD KEY `patient_information_hospital_id_foreign` (`hospital_id`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `secretary_information`
--
ALTER TABLE `secretary_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `secretary_information_email_unique` (`email`),
  ADD KEY `secretary_information_type_id_foreign` (`type_id`),
  ADD KEY `secretary_information_hospital_id_foreign` (`hospital_id`);

--
-- Indices de la tabla `status_type_information`
--
ALTER TABLE `status_type_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_type_information`
--
ALTER TABLE `user_type_information`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrator_information`
--
ALTER TABLE `administrator_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `appointment_information`
--
ALTER TABLE `appointment_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `comment_appointment_information`
--
ALTER TABLE `comment_appointment_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `doctor_information`
--
ALTER TABLE `doctor_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `hospital_information`
--
ALTER TABLE `hospital_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `hospital_specialities`
--
ALTER TABLE `hospital_specialities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `medical_speciality_information`
--
ALTER TABLE `medical_speciality_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de la tabla `patient_information`
--
ALTER TABLE `patient_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `secretary_information`
--
ALTER TABLE `secretary_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `status_type_information`
--
ALTER TABLE `status_type_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user_type_information`
--
ALTER TABLE `user_type_information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrator_information`
--
ALTER TABLE `administrator_information`
  ADD CONSTRAINT `administrator_information_hospital_id_foreign` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `administrator_information_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `user_type_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `appointment_information`
--
ALTER TABLE `appointment_information`
  ADD CONSTRAINT `appointment_information_appointment_doctor_id_foreign` FOREIGN KEY (`appointment_doctor_id`) REFERENCES `doctor_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_hospital_id_foreign` FOREIGN KEY (`appointment_hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_patient_id_foreign` FOREIGN KEY (`appointment_patient_id`) REFERENCES `patient_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_speciality_id_foreign` FOREIGN KEY (`appointment_speciality_id`) REFERENCES `medical_speciality_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_information_appointment_status_foreign` FOREIGN KEY (`appointment_status`) REFERENCES `status_type_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comment_appointment_information`
--
ALTER TABLE `comment_appointment_information`
  ADD CONSTRAINT `comment_appointment_information_comment_appointment_id_foreign` FOREIGN KEY (`comment_appointment_id`) REFERENCES `appointment_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_appointment_information_comment_doctor_id_foreign` FOREIGN KEY (`comment_doctor_id`) REFERENCES `doctor_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `doctor_information`
--
ALTER TABLE `doctor_information`
  ADD CONSTRAINT `doctor_information_hospital_id_foreign` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctor_information_speciality_id_foreign` FOREIGN KEY (`speciality_id`) REFERENCES `medical_speciality_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctor_information_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `user_type_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hospital_specialities`
--
ALTER TABLE `hospital_specialities`
  ADD CONSTRAINT `hospital_specialities_hospital_information_id_foreign` FOREIGN KEY (`hospital_information_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hospital_specialities_medical_speciality_information_id_foreign` FOREIGN KEY (`medical_speciality_information_id`) REFERENCES `medical_speciality_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `patient_information`
--
ALTER TABLE `patient_information`
  ADD CONSTRAINT `patient_information_hospital_id_foreign` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_information_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `user_type_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `secretary_information`
--
ALTER TABLE `secretary_information`
  ADD CONSTRAINT `secretary_information_hospital_id_foreign` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `secretary_information_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `user_type_information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
