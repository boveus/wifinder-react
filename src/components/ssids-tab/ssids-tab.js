import React, { Component } from 'react'
import { count, all } from '../../api/v1/ssids'

class SSIDsTab extends Component {
  constructor(props) {
      super(props)
      this.state = {page: 1,
      ssidHtml: ''}
    }

  getSSIDs() {
    let element = document.getElementById('ssids-count')
    if(typeof element !== 'undefined' && element !== null) {
      count()
    }
  }

  componentDidMount() {
    this.renderSsids()
    setInterval(() => { this.getSSIDs()}, 6000);
  }

  nextPage () {
  this.setState( () => {
      return {page: this.state.page + 1}
    })
  this.renderSsids()
  }

  renderSsids () {
    let html = ''
    all(this.state.page)
    .then(ssids => {
      for (let i = 0; i < ssids.length; i++) {
        html += `<li> <a href=''>${ssids[i].id}</a>: ${ssids[i].name} </li>`
      }
      this.setState({ssidHtml: html})
    })
  }

  render () {
    return (
       <React.Fragment>
          <h3> View SSIDs </h3>
          <p> There are <strong id='ssids-count'>0</strong> total SSIDs detected.</p>
          <ul dangerouslySetInnerHTML={{__html: this.state.ssidHtml}}>
          </ul>
          <button id='next-device-page' onClick={ () => this.nextPage() }> Next Page </button>
      </React.Fragment>
        )
    }
}

export default SSIDsTab;
