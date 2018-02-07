searchBtn.addEventListener( "click" , function() {
	/*var xhr = new XMLHttpRequest();
	var url = 'https://api.nestoria.co.uk/api?encoding=json&action=search_listings&place_name='+city;
	xhr.open('GET', url, true, null, null);
	xhr.withCredentials = true;
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
	alert(xhr.responseText);*/
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();
	xhr.open('GET', 'https://api.nestoria.co.uk/api?encoding=json&action=search_listings&place_name='+city, true);
	xhr.onload = function() {
	  alert( this.responseText );
	}
	xhr.onerror = function() {
	  alert( 'Ошибка ' + this.status );
	}
	alert(xhr.status);
	xhr.send();

});

