import React, { Component } from 'react'
import { count, all } from '../../api/v1/devices'

class DevicesTab extends Component {
  constructor(props) {
    super(props)
    this.state = {page: 1,
    deviceHtml: ''}
  }

  getDeviceCount() {
    let element = document.getElementById('devices-count')
    if(typeof element !== 'undefined' && element !== null) {
      count()
    }
  }

  nextPage () {
  this.setState( () => {
      return {page: this.state.page + 1}
    })
  this.renderDevices()
  }

  renderDevices () {
    let html = ''
    all(this.state.page)
    .then(devices => {
      for (let i = 0; i < devices.length; i++) {
        html += `<li> <a href=''>${devices[i].id}</a>: ${devices[i].mac_address} </li>`
      }
      this.setState({deviceHtml: html})
    })
  }

  componentDidMount() {
    this.renderDevices()
    setInterval(() => { this.getDeviceCount()}, 6000);
  }

  render () {
    return (
       <React.Fragment>
          <h3> View Devices </h3>
          <p> There are <strong id='devices-count'>0</strong> total devices detected.</p>
          <ul dangerouslySetInnerHTML={{__html: this.state.deviceHtml}}>
          </ul>
          <button id='next-device-page' onClick={ () => this.nextPage() }> Next Page </button>
      </React.Fragment>
        )
    }
}

export default DevicesTab;
