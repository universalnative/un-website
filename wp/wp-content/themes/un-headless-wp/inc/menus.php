<?php
/**
 * Register main menu.
 *
 * @package  UN_Headless_WP
 */

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus() {
    register_nav_menu( 'header-menu', __( 'Header Menu', 'un-headless-wp' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
