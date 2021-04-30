//////////////// User Actions \\\\\\\\\\\\\\\\\\\ 
// Check if user logged in
document.onreadystatechange = function() {
	$('#AuthContainer').hide();
	user = GetCookie("username");
	if(user != "")
		location.href="./school.html";
};


// if user selects Login option
$('#SelectLOGIN').click(function() {
	AuthDisplay('LOGIN');
});

// if user select SignUp option
$('#SelectSIGNUP').click(function() {
	AuthDisplay('SIGNUP');
});

// Username Check
$('input[name$="username"]').keyup(function() {
	ValidUsernameCheck(this.value);
	EmptyInputCheck();
});

// Password Check
$('input[name$="password"]').keyup(function() {
	if(!EmptyInputCheck())
		return;
	var user = $('input[name$="username"]').prop('value');
	ValidUsernameCheck(user);
});

// Login Button Click
$('#loginBtn').click(function() {
	LoginORSignUp(this.getAttribute('value'));
});


// Sign Up Button Click
$('#signupBtn').click(function() {
	LoginORSignUp(this.getAttribute('value'));
});


//////////////// Login or Sign Up functions \\\\\\\\\\\\\\\\\\\ 
// Select Auth type
function AuthDisplay(name) {
	$('#AuthSelection').hide();
	$('#AuthContainer').show();
	$('#AuthContainer').attr('name', name);

	// presents choice
	$('#loginBtn').attr('value', name);	
	var tmp = name == "LOGIN" ? "SIGN UP" : "LOGIN";
	$('#signupBtn').attr('value', tmp);

	// turns on login option
	LoginBtn(false);
}


// Login Button CSS&Hovering
function LoginBtn(enable) {
	$('#loginBtn').prop('disabled', !enable);
	var colour = enable ? '#F0AD4E' : 'gray';
	var hoverColour = enable ? '#ED9D2D' : 'gray';

	$('#loginBtn').css('background-color', colour);
	$('#loginBtn').hover(function() {
		$(this).css('background-color', hoverColour);
	});
}

// SignUp Button CSS&Hovering
function SignUpBtn(enable) {
	$('#signupBtn').prop('disabled', !enable);
	var colour = enable ? '#F0AD4E' : 'gray';
	var hoverColour = enable ? '#ED9D2D' : 'gray';

	$('#signupBtn').css('background-color', colour);
	$('#signupBtn').hover(function() {
		$(this).css('background-color', hoverColour);
	});
}


//////////////// Username and Passwird Input \\\\\\\\\\\\\\\\\\\
// Manages display for Username Validity
function ValidUsernameCheck(username) {
	var name = $('#AuthContainer').attr('name');
	if(name.toLowerCase() == 'login') {
		CheckUsername(username, true);
	}
	else
		CheckUsername(username, false);

	return $('#error').text().length > 0;
}

// Manages Display for Empty Inputs
function EmptyInputCheck() {
	if($('input[name$="password"]').prop('value').length <= 0 ||
		$('input[name$="username"]').prop('value').length <= 0) {
		ShowError('Please fill out all fields');
		return false;
	}
	HideError();
	return true;
}

// Checks if Username exists in the database
function CheckUsername(username, wantExists) {
	$.get('login/login.php',
		{'userExists':username},
		function(data) {
			if(wantExists && data == false) {
				ShowError('Your Username does not exist in our Database. Would you like to sign up instead?');
				SignUpBtn(true);
			}
			else if(!wantExists && data == true) {
				ShowError('Your Username is already taken. Would you like to login instead?');
				SignUpBtn(true);
			}
			else if((wantExists && data == true) || (!wantExists && data == false)) {
				HideError();
				SignUpBtn(false);
			}
			
			if($('input[name$="password"]').prop('value') == "")
				LoginBtn(false);
		});		
}

// Manage Error Display
function ShowError(msg) {
	$('#error').text(msg);
	$('#error').show();
	LoginBtn(false);
	SignUpBtn(false);
}

// Manage Error Display by Hiding
function HideError() {
	$('#error').text('');
	$('#error').hide();
	LoginBtn(true);
	LoginBtn(true);
}

// Sign Up Attenpt
function SignUpAttempt(user, pw) {
	$.post('login/login.php',
	{'signupUser': user,
	 'signupPw'  : pw},
	function(data) {
		if(data == false)
			ShowError('Unable to add user, please try again.');
		else {
			document.cookie = "username=" + user;
			location.href="./school.html";
		}
	});
}


// Login Attempt
function LoginAttempt(user, pw) {
	$.get('login/login.php',
	{'loginUser': user,
	 'loginPw'  : pw},
	function(data) {
		if(data == false)
			ShowError('Invalid password');
		else {
			document.cookie = "username=" + user;
			location.href="./school.html";
		}
	});
}

// Calls Login or SIgn Up
function LoginORSignUp(btnVal) {
	if(!EmptyInputCheck())
		return;
	var user = $('input[name$="username"]').prop('value');
	var pw = $('input[name$="password"]').prop('value');
	if(btnVal.toLowerCase() == 'login')
		LoginAttempt(user, pw);
	else
		SignUpAttempt(user, pw);
}


















