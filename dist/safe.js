console.log("Safe Code Executing");

document.cookie = 'id=12345'
console.log('document.cookie: ', document.cookie);

var post = () => {
	var POST_URL = 'http://localhost:3334/password-update';
	var xhr = new XMLHttpRequest();
	xhr.open("POST", POST_URL, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {//Call a function when the state changes.
			if(this.readyState == XMLHttpRequest.DONE) {
				console.log("status: ", xhr.status);
				console.log('POST xhr.responseText: ', xhr.responseText);
			}
	}
	xhr.send("pw=password");
}
post();
