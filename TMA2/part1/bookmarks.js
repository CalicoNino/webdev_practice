var user;

document.onreadystatechange = function() {
	user = GetCookie('username');
	if(user == "")
		location.href="./index.html";
};

window.onload = function() { 
	$('#user').text(user);
	DisplayUrls();
};

// Log Out
$('#logout').click(function() {
	document.cookie = "username=; path=./index.html;";
	location.href="./index.html";
});


function DisplayUrls() {
	$('#urlList').empty();
	$.get('bookmarks.php',
		{'getUserUrls': user},
		function(data) {
			if(data.length == 0)
				$('#urlList').append("<h6 id='noBookmarks'> You don't have any saved bookmarks right now!</h6>");

			for(var i = 0; i < data.length; i++){
				var url = data[i].Url;
				AddUrlToPage(url);

			}
		}, "json");
}

function AddUrlToPage(url) {
	var urlElement = CreateUrlElement(url);
	$('#urlList').prepend(urlElement);
	if($('#noBookmarks'))
		$('#noBookmarks').remove();
}

function CreateUrlElement(url) {
	var urlElement = "<div class='bg-info w-75 text-center pt-1 pb-1 px-1 py-3 px-3 m-auto rounded' id='" + url + "'>"
	urlElement += "<a target='_blank' class='font-weight-bold my-4 h6 text-sm-center text-light' href='" + url + "'>" + url + "</a>";
	urlElement += "<input id='editbtn' class='btn btn-primary mx-2 btn-sm' type='submit' value='EDIT'>";
	urlElement += "<input id='delebtn' class='btn btn-danger  mx-2 btn-sm' type='submit' value='DELETE'>";
	urlElement += "</div><hr>"
	return urlElement;
}

$('#addUrl').click(function() {
	var url = $('#urlInput').prop('value');
	AddNewUrl(url);
	window.location.reload()
});

// will add if valid url
function AddNewUrl(url) {
	$.post('bookmarks.php',
		{'addUrl': url,
		 'user': user},
		function(data) {
			if(data == false)
				ShowDatabaseError("Unable to add URL. Please ensure it is valid.");
			else if(data == -1)
				ShowDatabaseError("This url has already been added to your list!");
			else {
				ShowDatabaseError("");
				AddUrlToPage(url);
			}
		});
}

function UpdateUrl(url, oldUrl) {
	$.post('bookmarks.php',
		{'updateUrl': url,
		 'user': user,
		 'oldUrl': oldUrl},
		function(data){
			if(data == false)
				ShowDatabaseError("Unable to update URL. Please ensure it is valid.");
			else if(data == -1)
				ShowDatabaseError("This url has already been added to your list!");
			else {
				ShowDatabaseError("");
				UpdateEditedLink(url);
			}
		});
}

$(document).on('click', '#delebtn', function() {
	var url = this.parentNode.getAttribute('id');
	$.post('bookmarks.php',
		{'deleteUrl':url},
		function(data) {
			if(data == false)
				ShowDatabaseError("Unable to delete the url" + url);
			else {
				ShowDatabaseError("");
				DisplayUrls();			
			}
		})
	window.location.reload();
});

// var curr, new disable everything 
var prevUrl;
$(document).on('click', '#editbtn', function() {
	$(':input').prop('disabled', true);

	var link = this.previousElementSibling;
	link.setAttribute("id", "replaceWithEditableLink");
	var linkUrl = link.getAttribute('href');

	prevUrl = linkUrl;
	var newEdit = "<input id='editableLink' type='text' class='text-center w-50 rounded p-1 m-3' value='" + linkUrl + "'>";
	newEdit += "<input id='saveUrl' class='btn btn-success mx-2 btn-sm' type='submit' value='SAVE'>";
	newEdit += "<input id='cancelUrl' class='btn btn-secondary mx-2 btn-sm' type='submit' value='CANCEL'>";
	$("#replaceWithEditableLink").after(newEdit);
	$("#replaceWithEditableLink").remove();
});

function UpdateEditedLink(url) {
	var urlElement = "<a target='_blank' class='font-weight-bold my-4 h6 text-sm-center text-light' href='" + url + "'>" + url + "</a>";
	$('#editableLink').before(urlElement);
	$('#editableLink').remove();
	$('#saveUrl').remove();
	$('#cancelUrl').remove();

	$(':input').prop('disabled', false);
}

$(document).on('click', '#saveUrl', function() {
	UpdateUrl(this.previousElementSibling.value, prevUrl);
	$("#editbtn"+linkUrl+"'").hide();
	$("#delebtn"+linkUrl+"'").hide();
	window.location.reload();
});

$(document).on('click', '#cancelUrl', function() {
	UpdateEditedLink(prevUrl);
	window.location.reload();
});

function ShowDatabaseError(msg) {
	$('#error').text(msg);
}

