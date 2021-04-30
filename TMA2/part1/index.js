//////////////// Top Ten Update List \\\\\\\\\\\\\\\\\\\
window.onload = function() {
	$('#TopTen').empty();
	$.get('index.php',
		{'getTopTen': ""},
		function(data) {
			if(data.length == 0)
				$('#TopTen').append("<h6>No Booksmarks have been added</h6>");

			for(var i = 0; i < data.length; i++){
				var url = data[i].Url;
				if(i % 2 == 0){
					TopTenItem(url, "light", "dark");
				} else{
					TopTenItem(url, "dark", "warning");
				}				
			}
		}, "json");

		$('#user').text(user);
	DisplayUrls();
}

// Top Ten Item
function TopTenItem(url, text, bg) {
	var card ="<div class='card bg-" + bg + " text-center pt-1 pb-1 px-1'><a class='font-weight-bold my-4 h6 text-sm-center text-" + text + "' href='" + url + "'>" + url + "</a></div><hr/>"
	$('#TopTen').append(card);
}


https://www.w3schools.com/js/js_cookies.asp
function GetCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
