<?php
include "./checkDBExist.php";
include "./setUpDatabase.php";
include "./CreateDatabase.php";
include "./CreateUserForm.php";
include "config.php";
function main()
{
    print("Connected" . "<br>");
    global $conn, $dbName;
    if (checkDBExist($conn, $dbName)) {
        echo ("db exist");
    } else {
        CreateDatabase($conn, $dbName);
        SetUpDatabase($conn, $dbName);
    }
    CreateUserForm();
}
