<?php

include_once("./app/controllers/BuyerController.php");
class TestController extends BuyerController
{
    private $__instanceModel;
    public function __construct($conn)
    {
        // $this->__instanceModel = $this->initModel("BaseModel", $conn);
    }

    public function test()
    {
        $name = "quando_asasd";
        $name = $this->setPassword($name);
    }
}
