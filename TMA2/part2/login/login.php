<?php

include('../../shared/connection.php');

if (isset($_GET['userExists'])) {
	$user = $_GET['userExists'];
	$query = "SELECT * FROM Users WHERE UserName = '$user'";
	$result = mysqli_query($conn, $query);
	echo mysqli_num_rows($result);
}


// Based off https://phppot.com/php/user-registration-in-php-with-login-form-with-mysql-and-code-download/

if (isset($_GET['loginUser'])) {
	$user = $_GET['loginUser'];
	$pw = $_GET['loginPw'];

	$query = "SELECT * FROM Users WHERE UserName = '$user' AND Password = '$pw'";
	$result = mysqli_query($conn, $query);
	echo mysqli_num_rows($result);
}

if (isset($_POST['signupUser'])) {
	$user = $_POST['signupUser'];
	$pw = $_POST['signupPw'];

	$query = "INSERT INTO Users (UserName, Password) VALUES ('$user', '$pw')";
	$result = mysqli_query($conn, $query); // false failed
	if (!$result)
		die(mysqli_error($result));
	echo $result == false ? false : true;
}
