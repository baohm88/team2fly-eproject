<?php

class ValidateController
{
    public function validate($type, $value)
    {
        $type = strtolower($type);
        switch ($type) {
            case "name":
                $regex = "/^[A-Za-z]+(?: [A-Za-z]+)*$/";
                break;
            case "username":
                $regex = "/^[a-z0-9_]{1,30}$/";
                break;
            case "email":
                $regex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
                break;
            case "timestamp":
                $dateTimestamp = strtotime($value . "+18 year");
                $todayTimestamp = time();
                if ($dateTimestamp > $todayTimestamp) {
                    return null;
                }
                $regex = "/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/";
                break;
            case "phone":
                $regex = "/^(\+?\d{1,3}[-. ]?)?(\(?\d{1,3}\)?[-. ]?)?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/";
                break;
            case "address":
                $regex = "/.*/";
                break;
            default:
                $regex = "/a^/";
        }
        if (preg_match($regex, $value)) {
            return $value;
        } else {
            return null;
        }
    }
}
