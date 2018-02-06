searchBtn.addEventListener( "click" , function() {
	var city = document.getElementById("inputCity").value;
	var xhr = new XMLHttpRequest();
	var url = 'https://api.nestoria.co.uk/api?encoding=json&action=search_listings&place_name='+city;
	xhr.open('GET', url, true, null, null);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState != 4) {
    	return
    	}
	}
	alert(xhr.status);
	if (xhr.status === 200) {
	    console.log('result', xhr.responseText)
	  } else {
	    console.log('err', xhr.responseText)
	  }
	alert(xhr.responseText);

});

