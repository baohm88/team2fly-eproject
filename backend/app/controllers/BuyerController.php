<?php
include_once("./backend/app/controllers/ValidateController.php");
class BuyerController extends ValidateController
{
    private $__InstanceModel;
    private $__firstName;
    private $__password;
    private $__userName;
    private $__lastName;
    private $__dob;
    private $__phone;
    private $__address;
    private $__buyerImage;

    public function __construct()
    {
        echo "vao r nhe";
    }

    public function setUserName($name)
    {
        $validatedUserName = $this->validate("username", $name);
        if ($validatedUserName != null) {
            $this->__userName = $name;
            return $this->getUserName();
        } else {
            return null;
        }
    }

    public function getUserName()
    {
        return $this->__userName;
    }

    public function setPassword($password)
    {
        $this->__password = password_hash($password, PASSWORD_DEFAULT);
        return $this->getPassword();
    }

    public function getPassword()
    {
        return $this->__password;
    }

    public function setFirstName($name)
    {
        $validatedName = $this->validate("name", $name);
        if ($validatedName != null) {
            $this->__firstName = $name;
            return $this->getFirstName();
        } else {
            return null;
        }
    }

    public function getFirstName()
    {
        return $this->__firstName;
    }

    public function setLastName($name)
    {
        $validatedName = $this->validate("name", $name);
        if ($validatedName != null) {
            $this->__lastName = $name;
            return $this->getLastName();
        }
        return null;
    }

    public function getLastName()
    {
        return $this->__lastName;
    }

    public function setDob($dob)
    {
        $validatedDob = $this->validate("timestamp", $dob);
        if ($validatedDob != null) {
            $this->__dob = $dob;
            return $this->getDob();
        } else {
            return null;
        }
    }

    public function getDob()
    {
        return $this->__dob;
    }

    public function setPhone($phone)
    {
        $validatedPhone = $this->validate("phone", $phone);
        if ($validatedPhone != null) {
            $this->__phone = $phone;
            return $this->getPhone();
        } else {
            return null;
        }
    }
    public function getPhone()
    {
        return $this->__phone;
    }
    public function setAddress($address)
    {
        $validatedAddress = $this->validate("address", $address);
        if ($validatedAddress != null) {
            $this->__address = $address;
            return $this->getAddress();
        } else {
            return null;
        }
    }
    public function getAddress()
    {
        return $this->__address;
    }
    public function setBuyerImage($picture)
    {

        $this->__buyerImage = $picture;
        return $this->getBuyerImage();
    }
    public function getBuyerImage()
    {
        return $this->__buyerImage;
    }
}
