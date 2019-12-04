import React, { Component } from 'react'
import CaptureBox from './capture-box'
import AvailableDevices from './available-devices'
import SetCaptureDevice from './set-capture-device'

class ConfigTab extends Component {
  render () { 
    return (
       <React.Fragment>
          <h3> Configure Capturing </h3>
          <CaptureBox />
          <AvailableDevices />
          <SetCaptureDevice />
      </React.Fragment>  
        )
    }
} 

export default ConfigTab;
