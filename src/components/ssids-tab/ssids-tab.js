import React, { Component } from 'react'
import { count } from '../../api/v1/ssids'

class SSIDsTab extends Component {
  getSSIDs() {
    let element = document.getElementById('ssids-count')
    if(typeof element !== 'undefined' && element !== null) {
      count()
    }
  }

  componentDidMount() {
    setInterval(() => { this.getSSIDs()}, 6000);
  }

  render () {
    return (
       <React.Fragment>
          <h3> View SSIDs </h3>
          <p> There are <strong id='ssids-count'>0</strong> total SSIDs detected.</p>
      </React.Fragment>
        )
    }
}

export default SSIDsTab;
