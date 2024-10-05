<?php

app()->get('/', function() {
    response()->json(['now' => time()]);
});





