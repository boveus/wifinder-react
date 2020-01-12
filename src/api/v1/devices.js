const config = require('../../config')

let devicesIndexUrl = `${config.apiBaseUrl}/devices`

module.exports = {
  count: function() {
	return fetch(`${devicesIndexUrl}/count`)
	  .then(response => response.json())
	  .then(data => {
      document.getElementById('devices-count').textContent = data
	})
	.catch(error => console.log(error));
  },
  all: function(devicePage) {
  let page = devicePage || 0
	return fetch(`${devicesIndexUrl}?page=${page}`)
	  .then(response => response.json())
	  .then(data => {
	    return data
	})
	.catch(error => console.log(error));
  },
  show: function(id) {
	return fetch(`${devicesIndexUrl}/${id}`)
	  .then(response => response.json())
	  .then(data => {
	    return data
	})
	.catch(error => console.log(error));
  }
}
