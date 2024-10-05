<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="POST" action="./register">
        <p>username</p>
        <input type="text" name="username">
        <p>password</p>
        <input type="password" name="password">
        <p>first name</p>
        <input type="text" name="first_name">
        <p>last_name</p>
        <input type="text" name="last_name">
        <p>dob</p>
        <input type="date" name="dob">
        <p>phone</p>
        <input type="text" name="phone">
        <p>address</p>
        <input type="text" name="address">
        <p>Avatar</p>
        <input type="file" name="image">
        <input type="submit" value="LOGIN">
    </form>

    <a href="logout">logout</a>
    <a href="login">login</a>
</body>

</html>