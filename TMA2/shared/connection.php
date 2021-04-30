<?php

//Server Information
$servername = 'localhost';
$username = 'tma2';
$password = 'wsci4X1Tio%@';
$dbname = 'tma2';

// Initiate Connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo "Connection Failed";
}

// Global cookie name
$cookie = 'username';
