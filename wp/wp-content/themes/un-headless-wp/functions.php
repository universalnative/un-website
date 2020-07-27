<?php
/**
 * Theme for the UN Headless WordPress Starter Kit.
 *
 * Based on project at:
 * https://postlight.com/trackchanges/introducing-postlights-wordpress-react-starter-kit
 *
 * @package  UN_Headless_WP
 */

// Frontend origin.
require_once 'inc/frontend-origin.php';

// Logging functions.
require_once 'inc/log.php';

// CORS handling.
require_once 'inc/cors.php';

// Admin modifications.
require_once 'inc/admin.php';

// Add Menus.
require_once 'inc/menus.php';

// ACF commands.
require_once 'inc/class-acf-commands.php';

// Add Headless Settings area.
require_once 'inc/acf-options.php';

// Add custom post types.
require_once 'inc/custom-post-types.php';

// Add fields for custom post types.
require_once 'inc/custom-fields.php';