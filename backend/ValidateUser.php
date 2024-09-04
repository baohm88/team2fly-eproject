<?php
include("oLoginForm.php");
include("SelectDatabase.php");
include("UserInfo.php");
function main()
{
    $oLoginForm = getLoginFormData();
    $query = createQuery($oLoginForm);
    if (queryLogin($query) != null) {
        setcookie("isLogin", "1", time() + (86400 * 30), "/");
        UserInfo();
    } else {
        print "Not Found";
    }
}


function createQuery($oData)
{
    $email = $oData->email;
    $password = $oData->password;

    selectDatabase();
    $query = "SELECT * FROM BuyerTable WHERE BuyerEmail =" . "'" . $email . "'" . "AND BuyerPassword = " . "'" . $password . "'";
    return $query;
}

function queryLogin($query)
{
    global $conn;
    try {
        // Prepare the SQL query to prevent SQL injection

        // Prepare the statement
        if ($stmt = $conn->prepare($query)) {

            // Bind the parameters (s = string)

            // Execute the statement
            $stmt->execute();

            // Get the result
            $result = $stmt->get_result();

            // Fetch all results as an associative array
            $data = $result->fetch_all(MYSQLI_ASSOC);

            // Close the statement
            $stmt->close();

            // Return or process the result
            return $data;
        } else {
            throw new Exception("Failed to prepare statement: " . $conn->error);
        }
    } catch (Exception $e) {
        // Handle the exception with an error message
        echo "Error: " . $e->getMessage();
    }
}

function getLoginFormData()
{
    $oLoginForm = new oLoginForm();
    $oLoginForm->email = $_POST["BuyerEmail"];
    $oLoginForm->password = $_POST["BuyerPassword"];
    return $oLoginForm;
}
main();
