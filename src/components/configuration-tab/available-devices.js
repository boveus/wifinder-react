import React, { Component } from 'react'
import { availableDevices } from '../../api/v1/administration'

class AvailableDevices extends Component {
  getDeviceInfo() {
    let element = document.getElementById('available-devices-data')
    if(typeof element !== 'undefined' && element !== null) {
      availableDevices()
    }
  }
 render () {
    return (
    	<div>
			<button id='available-devices' onClick = { () => availableDevices() }> Run iwconfig </button>
			<div id='device-data-container'>
				<p id='available-devices-data'></p>
			</div>
		</div>
        )
      }
    }
export default AvailableDevices;
