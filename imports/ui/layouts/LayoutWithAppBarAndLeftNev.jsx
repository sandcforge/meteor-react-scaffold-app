import React from 'react';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {cyan500 as colorCyan, white as colorWhite} from 'material-ui/styles/colors'

import Footer from '../components/Footer';
import LeftNav from '../components/LeftNav';

const styles = {
  appBar: {
    position: 'fixed', //Use fixed to Fix AppBar on the top, also disable rubber
                       // band effect
    top: 0,
    left: 0,
    right: 0,
    //height: 64,
    zIndex:1000       //Make sure this is on the top layer
  },
  appBarPadding: {
    height: 64,
    backgroundColor: colorCyan
  },
}

let lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class LayoutWithAppBarAndLeftNev extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>

         <LeftNav ref='refLeftNav' />
           <AppBar
             style={styles.appBar}
             onLeftIconButtonTouchTap = { () => this.refs.refLeftNav._handleToggle() }
             zDepth={0}
             title={this.props.title}
           />
           <div style={styles.appBarPadding}></div>
        {this.props.content}
        <Footer/>
        </div>
      </MuiThemeProvider>
    )
  }


};
