//////////////// User Actions \\\\\\\\\\\\\\\\\\\ 
var user;

document.onreadystatechange = function () {
	user = GetCookie('username');
	if (user == "")
		location.href = "./index.html";
};

$('#logout').click(function () {
	document.cookie = "username=; path=./index.html;";
	location.href = "./index.html";
});

window.onload = function () {
	$('#user').text(user);
	DisableStartUnitBtn();
	DisplayCourses();
	$("#unitSelected").hide();
	$("#btnMark").hide();
	$("#btnBackToSelection").hide();
};


//. uploading xml file and verifying
$('#btnUpload').click(function () {
	var path = $('input[name$="coursePath"]').prop('value');
	VerifyValidFilePath(path);
	
});

$("#btnStartUnit").click(function () {
	$("#selectionAndUpload").hide();
	ParseAndDisplayUnit(selection);
});

$("#btnBackToSelection").click(function () {
	$("#unitSelected").empty();
	$("#unitSelected").hide();
	$("#btnBackToSelection").hide();
	$("#btnMark").hide();
	DisableStartUnitBtn();
	ParseAndDisplayUnit("");
});

// https://usefulangle.com/post/193/javascript-read-local-file
document.querySelector("#read-button").addEventListener('click', function() {
	let file = document.querySelector("#file-input").files[0];
	let reader = new FileReader();
	reader.addEventListener('load', function(e) {
			let text = e.target.result;
			UploadFile(text);
	});
	reader.readAsText(file);
});

var selection = "";
$(document).on('click', '#tblCourses tr', function () {
	if (selection != "")
		$("#" + selection).children('td').css("background-color", "#F0AD4E");

	selection = this.id;
	$(this).children('td').css('background-color', '#A47E48');
	DisableStartUnitBtn();
});

//////////////// Functionalities \\\\\\\\\\\\\\\\\\\ 
// verifies file path
function VerifyValidFilePath(filePath) {
	$.get('upload.php', {
			'verifyFilePath': filePath
		},
		function (data) {
			if (data == false) {
				DisplayErrMsg("Please input a valid file path to a .xml file");
			} else {
				DisplayInfo("Loading your course file to the database...");
				UploadPath(filePath);
			}
		}
	);
}

// uploads file using php
function UploadFile(filePath) {
	$.post('upload.php', {
			'uploadFile': filePath
		},
		function (data) {
			if (data == false)
				DisplayErrMsg("Error: Unable to upload file to the database.");
			else
				DisplayInfo("Successfully uploaded " + filePath);
				window.location.reload()
		}
	);
}

// uploads filepath using php
function UploadPath(filePath) {
	$.post('upload.php', {
			'uploadPath': filePath
		},
		function (data) {
			if (data == false)
				DisplayErrMsg("Error: Unable to upload file to the database.");
			else
				DisplayInfo("Successfully uploaded " + filePath);
				window.location.reload()
		}
	);
}

function DisplayInfo(msg) {
	$('#error').css('color', 'black');
	$('#error').text(msg);
}

function DisplayErrMsg(err) {
	$('#error').css('color', 'black');
	$('#error').text(err);
}

function DisplayCourses() {
	$.get('reader.php', {
			'getUnits': user
		},
		function (data) {
			if (data.length == 0)
				DisplayErrMsg("An Error occurred or the Database is Empty.");

			for (var i = 0; i < data.length; i++)
				AddUnitToTable(data[i]);

		}, "json");
}

function AddUnitToTableTest(data) {
	var row = "<tr id='" + data + "'><td>" + data + "</td><td>" + data + "</td></tr>";
	$("#tblCourses").append(row);
}

function AddUnitToTable(data) {
	var id = data.ID;
	var title = data.Title;
	var row = "<tr id='" + id + "'><td>" + id + "</td><td>" + title + "</td></tr>";
	$("#tblCourses").append(row);
}

function DisableStartUnitBtn() {
	var id = "#btnStartUnit";
	if (selection == "") {
		$(id).attr('disabled', 'disabled');
		$(id).css('background-color', 'grey');
	} else {
		$(id).removeAttr('disabled');
		$(id).css('background-color', '#F0AD4E');
	}
}