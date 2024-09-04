<?php
function LogoutPage()
{
    print '    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form method="POST" action="HandleLogout.php">
            <input type="submit" value="Logout">
        </form>
    </body>
    </html>';
}
LogoutPage();
