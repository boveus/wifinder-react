import React, { Component } from 'react'
import { count } from '../../api/v1/devices'

class DevicesTab extends Component {
  getDeviceCount() {
    let element = document.getElementById('devices-count')
    if(typeof element !== 'undefined' && element !== null) {
      count()
    }
  }

  componentDidMount() {
    setInterval(() => { this.getDeviceCount()}, 6000);
  }

  render () {
    return (
       <React.Fragment>
          <h3> View Devices </h3>
          <p> There are <strong id='devices-count'>0</strong> total devices detected.</p>
      </React.Fragment>
        )
    }
}

export default DevicesTab;
