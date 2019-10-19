redirectTime = "1500";
redirectURL = "https://www.quackit.com";
function timedRedirect() {
	setTimeout("location.href = redirectURL;",redirectTime);
}