<?php
include('../shared/connection.php');

if (isset($_GET['getTopTen'])) {
    $query = "SELECT Url FROM Bookmarks GROUP BY Url ORDER BY COUNT(*) DESC LIMIT 10";
    $result = mysqli_query($conn, $query);

    $urls = array();
    while ($url = mysqli_fetch_array($result))
        $urls[] = $url;
    echo json_encode($urls);
    exit();
}
