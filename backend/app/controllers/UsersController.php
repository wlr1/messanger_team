<?php

namespace App\Controllers;

use Leaf\Helpers\Password;

db()->autoConnect();

class UsersController extends Controller
{
    public function index(): void
    {
        $user = auth()->user(['id', 'password', 'created_at', 'updated_at']);
        response()->json(['user' => $user]);
    }
}
