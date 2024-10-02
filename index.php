<?php
include_once "./backend/app/configs/database.php";
include_once "./backend/app/controllers/BaseController.php";
include_once "./backend/app/controllers/BuyerController.php";
include_once "./backend/app/App.php";
$request_uri = $_SERVER['REQUEST_URI'];


$app = new App($conn);
