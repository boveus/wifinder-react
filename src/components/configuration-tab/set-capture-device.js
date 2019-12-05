import React, { Component } from 'react'
import { setCaptureDevice } from '../../api/v1/administration'

class SetCaptureDevice extends Component {
  sendCaptureDevice () {
    setCaptureDevice(document.getElementById('capture-device').value)
  }
 render () {
    return (
    	<div>
		  <div id='capture-device-container'>
		    <p> Capture Device: <input id='capture-device' type="text"></input></p>
		    <button id='set-capture' onClick={this.sendCaptureDevice}> Set capture device </button>
		  </div>
		</div>
        )
      }
    }

export default SetCaptureDevice;
