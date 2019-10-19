redirectTime = "1500";
redirectURL = "http://127.0.0.1:5500/index.html";
function timedRedirect() {
	setTimeout("location.href = redirectURL;",redirectTime);
}