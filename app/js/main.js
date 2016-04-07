(function(document) {
	'use strict';

	var app = document.querySelector('#app');
 	app.baseUrl = '/';
 	
  	if (window.location.port === '') {  // if production
    	// Uncomment app.baseURL below and
    	// set app.baseURL to '/your-pathname/' if running from folder in production
    	app.baseUrl = '/';
  	}

})(document);