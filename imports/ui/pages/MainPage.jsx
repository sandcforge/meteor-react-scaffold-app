import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {cyan500 as colorCyan, white as colorWhite} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton';



// App component - represents the whole app
export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">

        <div style={styles.coverContainerStyle}>
          <img style={{width:'33%'}} src={'http://powersync.us/PowerSyncLogo.png'} />
          <div style={styles.coverTextStyle}>Sync data from Fitbit to Apple Health</div>
          <div style={styles.coverItemStyle}>
            <RaisedButton label="Download" secondary={true} />
          </div>
        <br/>
        </div>

        <br/>
        <p style={styles.contentTextStyle}>We believe that your Fitbit data belongs to you, and syncing your own data to Apple Health should be FREE. So we created Power Sync.</p>
        <h3 style={styles.contentTextStyle}>FAQ</h3>

        <br/>
        <p style={styles.contentTextStyle}>And we're actively developing and improving this app for you, for healthy lives!</p>
        <br/>

      </div>
    );
  }
}


const styles = {


  coverContainerStyle: {
    display: 'flex',
    display: '-webkit-flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems:'center',
    backgroundColor: colorCyan,
  },
  coverItemStyle:{
    //padding: 5,
    //width: '540',
    //height: '120',
    //margin:5,
  },
  coverTextStyle:{
    margin:32,
    fontFamily: 'Roboto, sans-serif',
    fontSize:18,
    color: colorWhite,
  },
  contentTextStyle: {
    fontFamily: 'Roboto, sans-serif',
    marginLeft:5,
    marginRight:5,
    textAlign:'justify'
  },
}
