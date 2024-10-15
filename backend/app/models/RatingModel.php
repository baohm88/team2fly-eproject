<?php
class RatingModel extends BaseController
{
    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function addNewRating($col, $value, $o_rating)
    {
        $sql = "INSERT INTO ProductRating
            (" . $col . ")
            VALUES
            (" . $value . ")
            ";
        $stmt = $this->__conn->prepare($sql);
        $this->bind_instance_value($o_rating, $stmt);
        $stmt->execute();
    }
}
