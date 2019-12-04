import React, { Component } from 'react'

class SetCaptureDevice extends Component {
 render () { 
    return (
    	<div>
		  <div id='capture-device-container'>
		    <p> Capture Device: <input id='capture-device' type="text"></input></p>
		    <button id='set-capture'> Set capture device</button>
		  </div>
		</div>
        )
      }
    }

export default SetCaptureDevice;

