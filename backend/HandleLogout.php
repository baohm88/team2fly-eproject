<?php
function HandleLogout()
{
    setcookie("isLogin", "0", time(), "/");
    echo "Logged Out";
}

HandleLogout();
