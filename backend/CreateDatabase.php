<?php
function CreateDatabase($conn, $dbName)
{
    try {
        $conn->query("CREATE DATABASE {$dbName};");
        return true;
    } catch (Exception $e) {
        return false;
    }
}
