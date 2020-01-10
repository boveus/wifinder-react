import React, { Component } from 'react'
import ConfigTab from '../configuration-tab/config-tab'
import DevicesTab from '../devices-tab/devices-tab'
import SSIDsTab from '../ssids-tab/ssids-tab'

class Tabs extends Component {
  showActiveTab(tab) {
    let tabToShow = tab.getAttribute('data-tab')
    document.getElementById(tabToShow).style.display = 'block'
  }

  setActive(tab) {
    let tabs = document.getElementsByClassName('tab')
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active')
      let tabToHide = tabs[i].getAttribute('data-tab')
      document.getElementById(tabToHide).style.display = 'none'
    }
    tab.classList.add('active')
    this.showActiveTab(tab)
  }


  render () {
    return (
       <React.Fragment>
       <div id='tabs-panel'>
         <div className='tab active' data-tab='configuration' id="config-tab" onClick={(e) => {this.setActive(e.target)}}>
           Configuration
         </div>
         <div className='tab' id='devices-tab' data-tab='devices' onClick={(e) => {this.setActive(e.target)}}>
           View Devices
         </div>
         <div className='tab' id='ssids-tab' data-tab='ssids' onClick={(e) => {this.setActive(e.target)}}>
           View SSIDs
         </div>
       </div>
         <div id="configuration">
           <ConfigTab />
         </div>
         <div id='devices'>
           <DevicesTab />
         </div>
         <div id='ssids'>
           <SSIDsTab />
         </div>
      </React.Fragment>
        )
    }
}

export default Tabs;
