import React, { Component } from 'react'
import { startCapture, checkStatus } from '../../api/v1/administration'

class CaptureBox extends Component {
    componentDidMount() {
      setInterval(() => { checkStatus() }, 6000);
    }
 render () {
    return (
		<div id='capture-box'>
		 <button id='check-status' onClick = { checkStatus() }>Refresh Status</button>
		 <button id='start-capture' onClick= { startCapture() }>Start Capturing</button>
		 <div id='status'>Unknown</div>
		</div>
        )
      }
    }
export default CaptureBox;






 //    } )
	// $("#start-capture").on("click", function(event) {
	//   admin.startCapture()
	// })

	// $("#check-status").on("click", function(event) {
	//   admin.checkStatus()
	// })

	// $("#set-capture").on("click", function(event) {
	//   admin.setCaptureDevice($('#capture-device').val()).then(response => {
	//   	alert(response)
	//   })
	// })
