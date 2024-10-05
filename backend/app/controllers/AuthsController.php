<?php

namespace App\Controllers;

class AuthsController extends Controller
{
    public function login(): void
    {
        $data = auth()->login([
            'email' => request()->get('email'),
            'password' => request()->get('password'),
        ]);

        if($data){
            response()->json([
                'user' => $data['user'],
                'token' => $data['token']]);
        }
        else{
            response()->json([
                'message' => 'Login failed'
            ], 401);
        }
    }
    public function create(): void
    {

        $data = auth()->register([
            'username' => request()->get('username'),
            'email' => request()->get('email'),
            'password' => request()->get('password'),
        ]);

        if($data){
            response()->json([
                'user' => $data['user']], 201);
        }
        else{
            response()->json([
                'message' => 'Registration failed'
            ], 400);
        }
    }
}
