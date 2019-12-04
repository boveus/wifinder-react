const config = require('../../config')

let adminUrl = `${config.apiBaseUrl}/administration`

module.exports = {
  startCapture: function() {
	   fetch(`${adminUrl}/start_capture`)
		   .catch(error => console.log(error))},
  checkStatus: function() {
  	  fetch(`${adminUrl}/check_status`)
		  .then(function(response) {
		    if (response.status == 200)
		    {
		      document.getElementById('status').css('background-color', 'green')
		      document.getElementById('status').text('Collecting Packets')
		    } else {
		      document.getElementById('status').css('background-color', 'red')
		      document.getElementById('status').text('Not Collecting')
		    }
		  })
  		},
  	availableDevices: function() {
  	   return fetch(`${adminUrl}/available_devices`)
			  .then(response => response.json())
			  .then(data => {
			    return data.body
			})
  	},
	setCaptureDevice: function(captureDevice) {
	   return fetch(`${adminUrl}/set_capture_device/${captureDevice}`)
		  .then(response => response.json())
		  .then(data => {
		    return data.message
		})
  	}
  }
