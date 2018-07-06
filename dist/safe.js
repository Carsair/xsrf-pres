console.log("Safe Code Executing");

var post = (url, data) => {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {//Call a function when the state changes.
			if(this.readyState == XMLHttpRequest.DONE) {
				console.log("status: ", xhr.status);
				console.log('POST xhr.responseText: ', xhr.responseText);
			}
	}
	xhr.send(data);
}

var logInButton = document.getElementById('log-in');
var updatePwButton = document.getElementById('update-password');

logInButton.addEventListener('click', () => {
	var logInText = document.getElementById('log-in-text').value;
	post('http://localhost:3334/log-in', `pw=${logInText}`);
});

updatePwButton.addEventListener('click', () => {
	var updatePwText = document.getElementById('update-password-text').value;
	post('http://localhost:3334/update-password', `pw=${updatePwText}`);
});
