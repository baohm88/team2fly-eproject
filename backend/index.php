<?php
global $conn;
include_once "./app/configs/database.php";
include_once "./app/controllers/BaseController.php";
include_once "./app/controllers/ValidateController.php";
include_once "./app/App.php";
$app = new App($conn);

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
