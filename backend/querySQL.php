<?php

/**
 * Todo: create a function to run SQL query
 * @param string $SQL
 * @param mixed $conn
 * @return bool
 */
function querySQL($conn, $sql)
{
    if (mysqli_query($conn, $sql)) {
        return true;
    } else {
        return false;
    }
}
