<?php
$M = 0;
$N = 0;
$g = 0;
$x = 0;
$divisors = array();

if (isset($_POST['M'])) {
    $M = $_POST['M'];
}

if (isset($_POST['N'])) {
    $N = $_POST['N'];
}

for ($i = 1; $i <= $M && $i <= $N; $i++) {
    if ($M % $i == 0 && $N % $i == 0)
        $g = $i;
    $divisors[] = $i;
}

$x = ($p * $q) / $g;

$data = $divisors;
$html = "<table>";
foreach ($data as $row) {
    $html .= "<tr>";
    foreach ($row as $cell) {
        $html .= "<td>" . $cell . "</td>";
    }
    $html .= "</tr>";
}
$html .= "</table>";
?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" src="jquery-1.6.3.js"></script>
    <title>
        Question one GSD
    </title>

</head>

<body>
    <form>
        <label for="M">M Input</label>
        <input type="number" id="M" name="M" min="0">
        <br />
        <br />
        <label for="N">N Input</label>
        <input type="number" id="N" name="N" min="0">
    </form>
    <div id="error"></div>

    <h3>Results</h3>

    <table>
        <tr>
            <th>
                M
            </th>
            <th>
                N
            </th>
            <th>
                GCD
            </th>
        </tr>
        <tr>
            <th>
                <?php echo $M ?>
            </th>
            <th>
                <?php echo $N ?>
            </th>
            <th>
                <?php echo $x ?>
            </th>
        </tr>
    </table>

    <?php echo $html ?>
    <script>
        M = document.getElementById('M');
        N = document.getElementById('M');

        if (M > 0 || N > 0) {
            document.getElementById('error').innerHTML += '<br><p>M and N can not be negatives</p>';
        } else {
            document.getElementById('error').innerHTML += '<br><p>Nice</p>';
        }

        $.post('examq1.php', {
            'M': M
        }, function(M) {
            $('#M').text(M);
        })

        $.post('examq1.php', {
            'N': N
        }, function(N) {
            $('#N').text(N);
        })
    </script>

</body>

</html>