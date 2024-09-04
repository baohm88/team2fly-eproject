<?php

/**
 *TODO: Create a function to check if Database is exist in the server or not
 * @param mixed $conn
 * @param string $dbName
 */
function checkDBExist($conn, $dbName): bool
{
    try {
        if ($conn->query("USE {$dbName}")) {
            return true;
        }
        return false;
    } catch (Exception $e) {
        return false;
    }
}
