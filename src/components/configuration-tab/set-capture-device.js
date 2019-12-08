import React, { Component } from 'react'
import { setCaptureDevice, setCaptureDeviceToMonitor } from '../../api/v1/administration'

class SetCaptureDevice extends Component {
  sendCaptureDevice () {
    let element = document.getElementById('capture-device')
    if(typeof element !== 'undefined' && element !== null) {
      setCaptureDevice(element.value)
    }
  }

  sendCaptureDeviceToMonitor () {
    let element = document.getElementById('set-capture-device-to-monitor')
    if(typeof element !== 'undefined' && element !== null) {
      setCaptureDeviceToMonitor()
    }
  }



 render () {
    return (
    	<div>
		  <div id='capture-device-container'>
		    <p> Capture Device: <input id='capture-device' type="text"></input></p>
		    <button id='set-capture' onClick={ () => this.sendCaptureDevice() }> Set capture device </button>
        <button id='set-capture-device-to-monitor' onClick = { () => this.sendCaptureDeviceToMonitor() }> Set Capture Device to Monitor </button>
      </div>
		</div>
        )
      }
    }

export default SetCaptureDevice;
