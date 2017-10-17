document.addEventListener("offline", offlineState, false);
document.addEventListener("online", onlineState, false);

function offlineState(){
	const connectionImg = document.getElementById('noConnectionImg');
	connectionImg.style.visibility='visible'
	//myApp.alert('Internet connection is required for this application', 'Connection error');
}

function onlineState(){
	const connectionImg = document.getElementById('noConnectionImg');
	connectionImg.style.visibility='hidden'
}