searchBtn.addEventListener( "click" , function() {
	var xhr = new XMLHttpRequest();
	var url = 'https://api.nestoria.co.uk/api?encoding=json&action=search_listings&place_name='+city;
	xhr.open('GET', url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState != 4) {
    	return
    	}
	}
	alert("status: "+xhr.status);
	if (xhr.status === 200) {
	    console.log('result', xhr.responseText)
	  } else {
	    console.log('err', xhr.responseText)
	  }
	alert(xhr.responseText);
	/*var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();
	xhr.open('GET', 'https://api.nestoria.co.uk/api?encoding=json&action=search_listings&place_name='+city, true);
	xhr.send();
	xhr.onload = function() {
	  console.log( this.responseText );
	}
	xhr.onerror = function() {
	  console.log( 'Ошибка ' + this.status );
	}
	alert("status: "+xhr.status);*/
	

});

