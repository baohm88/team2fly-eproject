<?php
class ProductsController extends BaseController
{

    private $__instanceModel, $__conn;
    public function __construct($conn)
    {
        $this->__instanceModel         = $this->initModel("ProductModel", $conn);
        $this->__conn                  = $conn;
    }

    public function product($params)
    {
        try {
            if (ctype_digit($params["product_id"]) && $params["product_id"] > 0) {
                $params["product_id"]  = (int)$params["product_id"];
                $data                  = $this->__instanceModel->getProductData($params["product_id"]);
                if (empty($data)) {
                    throw new InvalidArgumentException("There are none of our products that matched your requirement");
                }
                $data["image"]         = $this->__instanceModel->getProductImage($params["product_id"]);
                $data["ratings"]       = $this->__instanceModel->getProductRating($params["product_id"]);
                $this->FactoryMessage("success", "This is product data", $data);
            } else {
                throw new InvalidArgumentException("There are none of our products that matched your requirement");
            }
        } catch (Exception $e) {
            $this->FactoryMessage("error", $e->getMessage());
        }
    }
    public function rating()
    {
        // $instanceBaseModel          = $this->initModel("BaseModel", $this->__conn);
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $input                     = json_decode(file_get_contents('php://input'), true);
            include_once("./app/controllers/RatingController.php");
            $instance_rating           = new RatingController($this->__conn);
            $instance_rating           = $this->insert_data_to_instance($instance_rating, $input);
            $arr                       = $this->create_sql_param_for_sql($instance_rating, "POST");
            $instanceRatingModel       = $this->initModel("RatingModel", $this->__conn);
            $instanceRatingModel->addNewRating($arr["col"], $arr["value"], $instance_rating);
        }
    }
}
