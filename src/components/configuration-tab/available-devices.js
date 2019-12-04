import React, { Component } from 'react'

class AvailableDevices extends Component {
 render () { 
    return (
    	<div>
			<button id='available-devices'> Run iwconfig </button>
			<div id='device-data-container'>     
				<p id='available-devices-data'></p>
			</div>
		</div>
        )
      }
    }
export default AvailableDevices;

