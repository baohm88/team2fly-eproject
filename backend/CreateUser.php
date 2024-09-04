<?php
include("./Users.php");
include("./querySQL.php");
include("./connect.php");
function main()
{
    $oUserInfo = createUserObject();
    $query = createQuery($oUserInfo);
    $conn = connect();
    querySQL($conn, "USE website123;");
    querySQL($conn, $query);
}
function createUserObject()
{
    $oUser = new User();
    $oUser->BuyerName = $_POST["BuyerName"];
    $oUser->BuyerPhone = $_POST["BuyerPhone"];
    $oUser->BuyerAddress = $_POST["BuyerAddress"];
    $oUser->BuyerPassword = $_POST["BuyerPassword"];
    $oUser->BuyerEmail = $_POST["BuyerEmail"];
    $oUser->BuyerDob = $_POST["BuyerDob"];
    $oUserInfo = $oUser->returnUserInfo();
    return $oUserInfo;
}

function createQuery($oUserInfo)
{
    $query = "INSERT INTO BuyerTable ";
    $keys = "";
    $values = "";
    foreach ($oUserInfo as $key => $value) {
        $keys .= $key . ",";
        $values .=  "'" . $value . "'" . ",";
    }
    $keys = rtrim($keys, ", ");
    $values = rtrim($values, ", ");

    $query = $query . " (" . chop($keys) . ") " . "VALUES" . " (" . chop($values) . ")";
    print $query;
    return $query;
}

main();
