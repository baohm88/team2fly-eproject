<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://localhost/project/app/assets/css/AllProduct.css">
    <title>Document</title>
</head>

<body>
    <a href="user/login">login page</a>
    <a href="user/register">register page</a>
    <table>
        <caption>ALL OF YOUR PRODUCTS</caption>
        <thead>
            <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Categories</th>
                <th scope="col">Date Listed</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $products = $data;
            foreach ($products as $product) {
                echo '<tr>
                <td data-label="Account">' . $product["productId"] . '</td>
                <td data-label="Account">' . $product["productName"] . '</td>
                <td data-label="Account">' . $product["price"] . '</td>
                <td data-label="Account">' . $product["quantityInStock"] . '</td>
                <td data-label="Account">' . $product["category"] . '</td>
                <td data-label="Account">' . $product["dateListed"] . '</td>
            </tr> ';
            } ?>
        </tbody>
    </table>
    <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a class="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
    </div>
</body>

</html>