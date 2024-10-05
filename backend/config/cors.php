<?php

return [

    'origin' => '*', // Укажите конкретный источник

    'methods' => 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',

    'headers' =>  'Content-Type,Authorization', // Заголовки с правильным регистром

    'exposedHeaders' => '',

    'credentials' => true, // Оставляем true для работы с cookies/Authorization

    'maxAge' => null,

    'preflightContinue' => false,

    'optionsSuccessStatus' => 204,
];
