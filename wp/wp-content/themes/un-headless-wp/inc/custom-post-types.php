<?php
/**
 * Register custom post types.
 *
 * @package  UN_Headless_WP
 */

function cptui_register_my_cpts() {

	/**
	 * Post Type: Heroes.
	 */

	$labels = [
		"name" => __( "Heroes", "custom-post-type-ui" ),
		"singular_name" => __( "Hero", "custom-post-type-ui" ),
		"menu_name" => __( "Heroes", "custom-post-type-ui" ),
		"all_items" => __( "All Heroes", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new Hero", "custom-post-type-ui" ),
		"edit_item" => __( "Edit Hero", "custom-post-type-ui" ),
		"new_item" => __( "New Hero", "custom-post-type-ui" ),
		"view_item" => __( "View Hero", "custom-post-type-ui" ),
		"view_items" => __( "View Heroes", "custom-post-type-ui" ),
		"search_items" => __( "Search Heroes", "custom-post-type-ui" ),
		"not_found" => __( "No Heroes found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No Heroes found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent Hero:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this Hero", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this Hero", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this Hero", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this Hero", "custom-post-type-ui" ),
		"archives" => __( "Hero archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into Hero", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this Hero", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter Heroes list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "Heroes list navigation", "custom-post-type-ui" ),
		"items_list" => __( "Heroes list", "custom-post-type-ui" ),
		"attributes" => __( "Heroes attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "Hero", "custom-post-type-ui" ),
		"item_published" => __( "Hero published", "custom-post-type-ui" ),
		"item_published_privately" => __( "Hero published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "Hero reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "Hero scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "Hero updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent Hero:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Heroes", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "heroes",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "hero", "with_front" => true ],
		"query_var" => true,
		"menu_position" => 26,
		"menu_icon" => "dashicons-awards",
		"supports" => [ "title" ],
	];

	register_post_type( "hero", $args );

	/**
	 * Post Type: ContentWithPreview.
	 */

	$labels = [
		"name" => __( "ContentWithPreview", "custom-post-type-ui" ),
		"singular_name" => __( "ContentWithPreview", "custom-post-type-ui" ),
		"menu_name" => __( "Content With Preview", "custom-post-type-ui" ),
		"all_items" => __( "All ContentWithPreview", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new ContentWithPreview", "custom-post-type-ui" ),
		"edit_item" => __( "Edit ContentWithPreview", "custom-post-type-ui" ),
		"new_item" => __( "New ContentWithPreview", "custom-post-type-ui" ),
		"view_item" => __( "View ContentWithPreview", "custom-post-type-ui" ),
		"view_items" => __( "View ContentWithPreview", "custom-post-type-ui" ),
		"search_items" => __( "Search ContentWithPreview", "custom-post-type-ui" ),
		"not_found" => __( "No ContentWithPreview found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No ContentWithPreview found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent ContentWithPreview:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this ContentWithPreview", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this ContentWithPreview", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this ContentWithPreview", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this ContentWithPreview", "custom-post-type-ui" ),
		"archives" => __( "ContentWithPreview archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into ContentWithPreview", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this ContentWithPreview", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter ContentWithPreview list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "ContentWithPreview list navigation", "custom-post-type-ui" ),
		"items_list" => __( "ContentWithPreview list", "custom-post-type-ui" ),
		"attributes" => __( "ContentWithPreview attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "ContentWithPreview", "custom-post-type-ui" ),
		"item_published" => __( "ContentWithPreview published", "custom-post-type-ui" ),
		"item_published_privately" => __( "ContentWithPreview published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "ContentWithPreview reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "ContentWithPreview scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "ContentWithPreview updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent ContentWithPreview:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "ContentWithPreview", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "contentwithpreview",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "contentwithpreview", "with_front" => true ],
		"query_var" => true,
		"menu_position" => 27,
		"menu_icon" => "dashicons-align-left",
		"supports" => [ "title" ],
	];

	register_post_type( "contentwithpreview", $args );

	/**
	 * Post Type: Page Sections.
	 */

	$labels = [
		"name" => __( "Page Sections", "custom-post-type-ui" ),
		"singular_name" => __( "Page Section", "custom-post-type-ui" ),
		"menu_name" => __( "Page Sections", "custom-post-type-ui" ),
		"all_items" => __( "All Page Sections", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new Page Section", "custom-post-type-ui" ),
		"edit_item" => __( "Edit Page Section", "custom-post-type-ui" ),
		"new_item" => __( "New Page Section", "custom-post-type-ui" ),
		"view_item" => __( "View Page Section", "custom-post-type-ui" ),
		"view_items" => __( "View Page Sections", "custom-post-type-ui" ),
		"search_items" => __( "Search Page Sections", "custom-post-type-ui" ),
		"not_found" => __( "No Page Sections found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No Page Sections found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent Page Section:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this Page Section", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this Page Section", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this Page Section", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this Page Section", "custom-post-type-ui" ),
		"archives" => __( "Page Section archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into Page Section", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this Page Section", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter Page Sections list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "Page Sections list navigation", "custom-post-type-ui" ),
		"items_list" => __( "Page Sections list", "custom-post-type-ui" ),
		"attributes" => __( "Page Sections attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "Page Section", "custom-post-type-ui" ),
		"item_published" => __( "Page Section published", "custom-post-type-ui" ),
		"item_published_privately" => __( "Page Section published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "Page Section reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "Page Section scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "Page Section updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent Page Section:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Page Sections", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "pagesections",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "pagesection", "with_front" => true ],
		"query_var" => true,
		"menu_position" => 25,
		"menu_icon" => "dashicons-grid-view",
		"supports" => [ "title" ],
	];

	register_post_type( "pagesection", $args );

	/**
	 * Post Type: Navlinks.
	 */

	$labels = [
		"name" => __( "Navlinks", "custom-post-type-ui" ),
		"singular_name" => __( "Navlink", "custom-post-type-ui" ),
		"menu_name" => __( "Navlinks", "custom-post-type-ui" ),
		"all_items" => __( "All Navlinks", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new Navlink", "custom-post-type-ui" ),
		"edit_item" => __( "Edit Navlink", "custom-post-type-ui" ),
		"new_item" => __( "New Navlink", "custom-post-type-ui" ),
		"view_item" => __( "View Navlink", "custom-post-type-ui" ),
		"view_items" => __( "View Navlinks", "custom-post-type-ui" ),
		"search_items" => __( "Search Navlinks", "custom-post-type-ui" ),
		"not_found" => __( "No Navlinks found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No Navlinks found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent Navlink:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this Navlink", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this Navlink", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this Navlink", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this Navlink", "custom-post-type-ui" ),
		"archives" => __( "Navlink archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into Navlink", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this Navlink", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter Navlinks list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "Navlinks list navigation", "custom-post-type-ui" ),
		"items_list" => __( "Navlinks list", "custom-post-type-ui" ),
		"attributes" => __( "Navlinks attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "Navlink", "custom-post-type-ui" ),
		"item_published" => __( "Navlink published", "custom-post-type-ui" ),
		"item_published_privately" => __( "Navlink published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "Navlink reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "Navlink scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "Navlink updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent Navlink:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Navlinks", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "navlinks",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "navlink", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-admin-links",
		"supports" => [ "title" ],
	];

	register_post_type( "navlink", $args );

	/**
	 * Post Type: Carousels.
	 */

	$labels = [
		"name" => __( "Carousels", "custom-post-type-ui" ),
		"singular_name" => __( "Carousel", "custom-post-type-ui" ),
		"menu_name" => __( "Carousels", "custom-post-type-ui" ),
		"all_items" => __( "All Carousels", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new Carousel", "custom-post-type-ui" ),
		"edit_item" => __( "Edit Carousel", "custom-post-type-ui" ),
		"new_item" => __( "New Carousel", "custom-post-type-ui" ),
		"view_item" => __( "View Carousel", "custom-post-type-ui" ),
		"view_items" => __( "View Carousels", "custom-post-type-ui" ),
		"search_items" => __( "Search Carousels", "custom-post-type-ui" ),
		"not_found" => __( "No Carousels found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No Carousels found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent Carousel:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this Carousel", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this Carousel", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this Carousel", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this Carousel", "custom-post-type-ui" ),
		"archives" => __( "Carousel archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into Carousel", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this Carousel", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter Carousels list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "Carousels list navigation", "custom-post-type-ui" ),
		"items_list" => __( "Carousels list", "custom-post-type-ui" ),
		"attributes" => __( "Carousels attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "Carousel", "custom-post-type-ui" ),
		"item_published" => __( "Carousel published", "custom-post-type-ui" ),
		"item_published_privately" => __( "Carousel published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "Carousel reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "Carousel scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "Carousel updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent Carousel:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Carousels", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "carousels",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "carousel", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-image-flip-horizontal",
		"supports" => [ "title" ],
	];

	register_post_type( "carousel", $args );

	/**
	 * Post Type: Team Members.
	 */

	$labels = [
		"name" => __( "Team Members", "custom-post-type-ui" ),
		"singular_name" => __( "Team Member", "custom-post-type-ui" ),
		"menu_name" => __( "Team Members", "custom-post-type-ui" ),
		"all_items" => __( "All Team Members", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new Team Member", "custom-post-type-ui" ),
		"edit_item" => __( "Edit Team Member", "custom-post-type-ui" ),
		"new_item" => __( "New Team Member", "custom-post-type-ui" ),
		"view_item" => __( "View Team Members", "custom-post-type-ui" ),
		"view_items" => __( "View Team Members", "custom-post-type-ui" ),
		"search_items" => __( "Search Team Members", "custom-post-type-ui" ),
		"not_found" => __( "No Team Members found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No Team Members found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent Team Members:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this Team Member", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this Team Member", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this Team Member", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this Team Member", "custom-post-type-ui" ),
		"archives" => __( "Team Member archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into Team Member", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this Team Member", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter Team Members list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "Team Members list navigation", "custom-post-type-ui" ),
		"items_list" => __( "Team Members list", "custom-post-type-ui" ),
		"attributes" => __( "Team Member attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "Team Member", "custom-post-type-ui" ),
		"item_published" => __( "Team Member published", "custom-post-type-ui" ),
		"item_published_privately" => __( "Team Member published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "Team Membersreverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "Team Member scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "Team Member updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent Team Members:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Team Members", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "teammembers",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "teammember", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-groups",
		"supports" => [ "title" ],
	];

	register_post_type( "teammember", $args );

	/**
	 * Post Type: Content Grids.
	 */

	$labels = [
		"name" => __( "Content Grids", "custom-post-type-ui" ),
		"singular_name" => __( "Content Grid", "custom-post-type-ui" ),
		"menu_name" => __( "Content Grids", "custom-post-type-ui" ),
		"all_items" => __( "All Content Grids", "custom-post-type-ui" ),
		"add_new" => __( "Add new", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new Content Grid", "custom-post-type-ui" ),
		"edit_item" => __( "Edit Content Grid", "custom-post-type-ui" ),
		"new_item" => __( "New Content Grid", "custom-post-type-ui" ),
		"view_item" => __( "View Content Grid", "custom-post-type-ui" ),
		"view_items" => __( "View Content Grids", "custom-post-type-ui" ),
		"search_items" => __( "Search Content Grids", "custom-post-type-ui" ),
		"not_found" => __( "No Content Grids found", "custom-post-type-ui" ),
		"not_found_in_trash" => __( "No Content Grids found in trash", "custom-post-type-ui" ),
		"parent" => __( "Parent Content Grid:", "custom-post-type-ui" ),
		"featured_image" => __( "Featured image for this Content Grid", "custom-post-type-ui" ),
		"set_featured_image" => __( "Set featured image for this Content Grid", "custom-post-type-ui" ),
		"remove_featured_image" => __( "Remove featured image for this Content Grid", "custom-post-type-ui" ),
		"use_featured_image" => __( "Use as featured image for this Content Grid", "custom-post-type-ui" ),
		"archives" => __( "Content Grid archives", "custom-post-type-ui" ),
		"insert_into_item" => __( "Insert into Content Grid", "custom-post-type-ui" ),
		"uploaded_to_this_item" => __( "Upload to this Content Grid", "custom-post-type-ui" ),
		"filter_items_list" => __( "Filter Content Grids list", "custom-post-type-ui" ),
		"items_list_navigation" => __( "Content Grids list navigation", "custom-post-type-ui" ),
		"items_list" => __( "Content Grids list", "custom-post-type-ui" ),
		"attributes" => __( "Content Grids attributes", "custom-post-type-ui" ),
		"name_admin_bar" => __( "Content Grid", "custom-post-type-ui" ),
		"item_published" => __( "Content Grid published", "custom-post-type-ui" ),
		"item_published_privately" => __( "Content Grid published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => __( "Content Grid reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => __( "Content Grid scheduled", "custom-post-type-ui" ),
		"item_updated" => __( "Content Grid updated.", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent Content Grid:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Content Grids", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "contentgrids",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "contentgrid", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-list-view",
		"supports" => [ "title" ],
	];

	register_post_type( "contentgrid", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );


add_action( 'init', 'cptui_register_my_cpts' );

function cptui_register_my_taxes() {

	/**
	 * Taxonomy: UN Pages.
	 */

	$labels = [
		"name" => __( "UN Pages", "custom-post-type-ui" ),
		"singular_name" => __( "UN Page", "custom-post-type-ui" ),
		"menu_name" => __( "UN Pages", "custom-post-type-ui" ),
		"all_items" => __( "All UN Pages", "custom-post-type-ui" ),
		"edit_item" => __( "Edit UN Page", "custom-post-type-ui" ),
		"view_item" => __( "View UN Page", "custom-post-type-ui" ),
		"update_item" => __( "Update UN Page name", "custom-post-type-ui" ),
		"add_new_item" => __( "Add new UN Page", "custom-post-type-ui" ),
		"new_item_name" => __( "New UN Page name", "custom-post-type-ui" ),
		"parent_item" => __( "Parent UN Page", "custom-post-type-ui" ),
		"parent_item_colon" => __( "Parent UN Page:", "custom-post-type-ui" ),
		"search_items" => __( "Search UN Pages", "custom-post-type-ui" ),
		"popular_items" => __( "Popular UN Pages", "custom-post-type-ui" ),
		"separate_items_with_commas" => __( "Separate UN Pages with commas", "custom-post-type-ui" ),
		"add_or_remove_items" => __( "Add or remove UN Pages", "custom-post-type-ui" ),
		"choose_from_most_used" => __( "Choose from the most used UN Pages", "custom-post-type-ui" ),
		"not_found" => __( "No UN Pages found", "custom-post-type-ui" ),
		"no_terms" => __( "No UN Pages", "custom-post-type-ui" ),
		"items_list_navigation" => __( "UN Pages list navigation", "custom-post-type-ui" ),
		"items_list" => __( "UN Pages list", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "UN Pages", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => false,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'unpage', 'with_front' => true, ],
		"show_admin_column" => false,
		"show_in_rest" => true,
		"rest_base" => "unpages",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
		];
	register_taxonomy( "unpage", [ "pagesection" ], $args );
}

add_action( 'init', 'cptui_register_my_taxes' );

