<?php
class User
{
    public $BuyerName;
    public $BuyerPhone;
    public $BuyerAddress;
    public $BuyerPassword;
    public $BuyerEmail;
    public $BuyerDob;
    public $BuyerAvatar;
    public $BuyerCoverImage;

    function returnUserInfo()
    {
        return $this;
    }
}
