import React, { Component } from 'react'
import { startCapture, checkStatus } from '../../api/v1/administration'

class CaptureBox extends Component {
    componentDidMount() {
      setInterval(() => { checkStatus() }, 60000);
    }

 render () {
    return (
		<div id='capture-box'>
		 <button id='check-status' onClick = { () => checkStatus() }>Refresh Status</button>
		 <button id='start-capture' onClick= { () => startCapture() }>Start Capturing</button>
		 <div id='status'>Unknown</div>
		</div>
        )
      }
    }
export default CaptureBox;
