const config = require('../../config')

let ssidsIndexUrl = `${config.apiBaseUrl}/ssids`

module.exports = {
  all: function() {
	return fetch(ssidsIndexUrl)
	  .then(response => response.json())
	  .then(data => {      
      document.getElementById('ssids-all').textContent = data
	})
	.catch(error => console.log(error));
  },
  show: function(id) {
	return fetch(`${ssidsIndexUrl}/${id}`)
	  .then(response => response.json())
	  .then(data => {
	    return data
	})
	.catch(error => console.log(error));
  }
}
