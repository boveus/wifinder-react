import React, { Component } from 'react'
import { all } from '../../api/v1/ssids'

class SSIDsTab extends Component {
  getSSIDs() {
    let element = document.getElementById('ssids-all')
    if(typeof element !== 'undefined' && element !== null) {
      all()
    }
  }

  componentDidMount() {
    setInterval(() => { this.getSSIDs()}, 6000);
  }

  render () {
    return (
       <React.Fragment>
          <h3> View SSIDs </h3>
          <p><strong id='ssids-all'></strong></p>
      </React.Fragment>
        )
    }
}

export default SSIDsTab;
