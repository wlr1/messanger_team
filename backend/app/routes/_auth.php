<?php

db()->autoConnect();

app()->registerMiddleware('auth', function () {
    $user = auth()->user();

    if (!$user) {
        response()->exit([
            'error' => 'Unauthorized',
            'data' => auth()->errors(),
        ], 401);
    }
});


app()->group('/auth', function() {
    app()->post('login', 'AuthsController@login');
    app()->post('register', 'AuthsController@create');
});

app()->group('/user', ['middleware' => 'auth', function () {
    app()->get('/', 'UsersController@index');

    app()->get('/logout', function (){
        auth()->logout();
    });
}]);
