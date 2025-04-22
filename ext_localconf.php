<?php

defined('TYPO3') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
    'custom_link_handler',
    'setup',
    '@import "EXT:custom_link_handler/Configuration/setup.typoscript"'
);