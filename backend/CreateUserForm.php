<?php
function CreateUserForm()
{
  print
    '<div class="login-page"> 
  <div class="form">
  <h1>Register New Account</h1>
    <form class="register-form"  action="CreateUser.php" method="POST">
      <input type="text" name="BuyerName" placeholder="name"/> <br>
      <input type="text" name="BuyerPhone" placeholder="phone"/> <br>
      <input type="text" name="BuyerAddress" placeholder="address"/> <br>
      <input type="text" name="BuyerPassword" placeholder="password"/> <br>
      <input type="text" name="BuyerEmail" placeholder="email"/> <br>
      <input type="date" name="BuyerDob" placeholder="dob"/> <br>
      <input type="submit"></input>
    </form>
    <div>
      <p>Already have an account ? <a href="LoginForm.php">Login</a></p>
    </div>
  </div>
</div> ';
}
