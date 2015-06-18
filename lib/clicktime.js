function ClickTime() {
	var endpoint  = 'https://app.clicktime.com/api/1.3/';

	// executes a request to the API
	// method: 'GET' or 'POST'
	// data: data to be sent (usually for post requets)
	// parameters: query parameters for get requests
	// callback: function (data) to be called upon completion
	function exec(method, data, parameters, callback) {
		if (method != 'POST' || method != 'GET') {
			return 'Method must be POST or GET';
		}

		var xmlHttp = new XMLHttpRequest();

		xmlHttp.setRequestHeader("Authorization","Basic " + credentials);
	}
}