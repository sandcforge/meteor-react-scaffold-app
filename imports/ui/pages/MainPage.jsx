import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {cyan500 as colorCyan, white as colorWhite, red200 as colorDarkRed} from 'material-ui/styles/colors'
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
          <img style={{width:'50%'}} src={'https://atomate.net/hire-javascript-developers/united-kingdom/london/img/meteor.png'} />
          <div style={styles.coverTextStyle}>A Meteor React Scaffold with Material UI</div>
          <div style={styles.coverItemStyle}>
            <RaisedButton backgroundColor={'#DC5150'} labelColor= {colorWhite} label="Github"  />
          </div>
        <br/>
        </div>

        <h1 style={styles.contentTextStyle}>FAQ</h1>
        <br/>

        <h3 style={styles.contentTextStyle}>
        1. Why do I need this Scaffold App?
        </h3>
        <p style={styles.contentTextStyle}>With Meteor 1.4, we have a 'full' option to create an app with scaffold. However this is a blaze-based app. I remove the blaze related packages and add React packages to support React.  This is the blank layout, which could be acessed by localhost:3000/blank .</p>
        <p style={styles.contentTextStyle}>Further, I import material-UI package into this app, and create a layout of default layout. </p>
        <p style={styles.contentTextStyle}>Last, I add more common used components, such as left navigation menu ,a fixed App Bar, and a footer.</p>

        <h3 style={styles.contentTextStyle}>
        2. How do I use this Scaffold?
        </h3>
        <p style={styles.contentTextStyle}>
        git clone https://github.com/sandcforge/meteor-react-scaffold-app.git
        </p>
        <p style={styles.contentTextStyle}>
        npm install
        </p>
        <p style={styles.contentTextStyle}>
        meteor
        </p>
        <h3 style={styles.contentTextStyle}>
        3. What is the dependency?
        </h3>
        <p style={styles.contentTextStyle}>"material-ui": "^0.16.4",</p>
        <p style={styles.contentTextStyle}>"meteor-node-stubs": "~0.2.3"</p>
        <p style={styles.contentTextStyle}>"material-ui": "^0.16.4"</p>
        <p style={styles.contentTextStyle}>"material-ui": "^0.16.4"</p>
        <p style={styles.contentTextStyle}>"material-ui": "^0.16.4"</p>
        <p style={styles.contentTextStyle}>"react": "^15.4.1"</p>
        <p style={styles.contentTextStyle}>"react-dom": "^15.4.1"</p>
        <p style={styles.contentTextStyle}>"react-mounter": "^1.2.0"</p>
        <p style={styles.contentTextStyle}>"react-tap-event-plugin": "^2.0.1"</p>


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
