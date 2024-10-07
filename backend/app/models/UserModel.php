<?php
class UserModel extends BaseController
{
    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function createNewUser($oUser)
    {
        // $this->viewData($oUser);
        $username   = $oUser->get_username();
        $password   = password_hash($oUser->get_password(), PASSWORD_DEFAULT);
        $firstName  = $oUser->get_first_name();
        $lastName   = $oUser->get_last_name();
        $email      = $oUser->get_email();
        $dob        = $oUser->get_dob();
        $phone      = $oUser->get_phone();
        $address    = $oUser->get_address();
        $buyerImage = $oUser->get_buyer_image();



        try {

            $sql = "INSERT INTO Buyers (
                userName,
                password,
                firstName,
                lastName,
                email,
                dob,
                phone,
                address,
                BuyerImage
               
            ) VALUES (
                :username,
                :password,
                :firstName,
                :lastName,
                :email,
                :dob,
                :phone,
                :address,
                :BuyerImage
            )";
            $stmt = $this->__conn->prepare($sql);
            $stmt->bindParam("username", $username, PDO::PARAM_STR);
            $stmt->bindParam("password", $password, PDO::PARAM_STR);
            $stmt->bindParam('email', $email, PDO::PARAM_STR);
            $stmt->bindParam('firstName', $firstName, PDO::PARAM_STR);
            $stmt->bindParam('lastName', $lastName, PDO::PARAM_STR);
            $stmt->bindParam('dob', $dob, PDO::PARAM_STR);
            $stmt->bindParam('phone', $phone, PDO::PARAM_STR);
            $stmt->bindParam('address', $address, PDO::PARAM_STR);
            $stmt->bindParam('BuyerImage', $buyerImage, PDO::PARAM_LOB);
            $stmt->execute();
        } catch (Exception $e) {
            $e->getMessage();
        }
    }

    public function checkUserExist($oUser)
    {
        $username = $oUser->get_username();
        try {
            $sql  = "SELECT * FROM Buyers WHERE userName = :username";
            $stmt = $this->__conn->prepare($sql);
            $stmt->bindParam('username', $username, PDO::PARAM_STR);
            $stmt->execute();
            $data = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!empty($data)) {
                $password = $oUser->get_password();
                if ($password !== null) {

                    $receivedPassword = $data['password'];
                    // $this->viewData($data);
                    $isVerified = password_verify($password, $receivedPassword);
                    if ($isVerified) {
                        return $data;
                    };
                    return null;
                }
                return $data;
            }
            return null;
        } catch (Exception $e) {
            echo "Error checking user: " . $e->getMessage();
        }
    }

    public function getUserData($oUser)
    {
        try {
            $id   = $oUser->get_user_id();
            $sql  = "SELECT * FROM Buyers WHERE buyerId = :id";
            $stmt = $this->__conn->prepare($sql);
            $stmt->bindParam('id', $id, PDO::PARAM_INT);
            $stmt->execute();
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function changeUserData($o_user)
    {
        $reflect = new ReflectionClass($o_user);
        $properties = $reflect->getProperties();
        $set_value = [];
        $bind_params = [];

        // Iterate over properties to build the SET clause and bind parameters
        foreach ($properties as $property) {
            // Make private/protected properties accessible
            $property->setAccessible(true);
            $name = $property->getName();
            $value = $property->getValue($o_user);

            // Skip null values and ID
            if ($value == null || $name == "__id") {
                continue;
            }

            // Clean property name and prepare the binding
            $clean_name = str_replace("__", "", $name);
            $set_value[] = "$clean_name = :$clean_name";  // Store the SET clause
            $bind_params[$clean_name] = $value; // Store the value to bind
        }
        $set_value_str = implode(", ", $set_value); // Join the SET clause

        if ($o_user->get_user_id() != null) {
            $sql = "UPDATE Buyers SET $set_value_str WHERE buyerId = :user_id"; // No trailing comma
            $stmt = $this->__conn->prepare($sql);


            $pdo_param_type = PDO::PARAM_STR;


            // Bind parameters
            foreach ($bind_params as $key => $val) {
                switch ($key) {
                    case "buyerImage":
                        $pdo_param_type = PDO::PARAM_LOB;
                        break;
                    case "isActive":
                        $pdo_param_type = PDO::PARAM_INT;
                        break;
                    case "password":
                        $val = password_hash($val, PASSWORD_DEFAULT);
                        $pdo_param_type = PDO::PARAM_STR;
                        break;
                    case "is_active":
                        break;
                    default:
                        $pdo_param_type = PDO::PARAM_STR;
                }
                // Bind the parameters
                // echo $key . ", " . $val . ", " . $pdo_param_type . "<br>";
                $stmt->bindValue(":$key", $val, $pdo_param_type);
            }

            // Bind the user ID separately
            $user_id = $o_user->get_user_id();
            $stmt->bindValue(":user_id", $user_id, PDO::PARAM_INT);

            // $stmt->debugDumpParams();
            // Execute the statement
            $stmt->execute();
            $this->FactoryMessage("Success", "User data changed successfully");
        } else {
            $this->FactoryMessage("Error", "User ID Not Found");
        }
    }
}
