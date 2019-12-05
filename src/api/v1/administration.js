const config = require('../../config')

let adminUrl = `${config.apiBaseUrl}/administration`

module.exports = {
  startCapture: function() {
	   fetch(`${adminUrl}/start_capture`)
		   .catch(error => console.log(error))},
  checkStatus: function() {
  	  fetch(`${adminUrl}/check_status`)
		  .then(function(response) {
		    if (response.status === 200)
		    {
		      document.getElementById('status').style.backgroundColor = 'green'
		      document.getElementById('status').textContent = 'Collecting Packets'
		    } else {
		      document.getElementById('status').style.backgroundColor = 'red'
		      document.getElementById('status').textContent = 'Not Collecting'
		    }
		  })
  		},
  	availableDevices: function() {
  	   return fetch(`${adminUrl}/available_devices`)
			  .then(response => response.json())
			  .then(data => {
        document.getElementById('available-devices-data').textContent = data.body
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
