<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Monolog settings
        'logger' => function($c) {
            $logger = new \Monolog\Logger('bcjp-game');
            $file_handler = new \Monolog\Handler\StreamHandler('../logs/app.log');
            $logger->pushHandler($file_handler);
            return $logger;
        },
    ],
];
