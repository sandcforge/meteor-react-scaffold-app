import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import {white as colorWhite, grey900 as colorGrey900, } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';


export default class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {drawOpened: false};
  }


  _handleToggle () {
    this.setState({drawOpened: !this.state.drawOpened})
  }

  _handleClose () {
    this.setState({drawOpened: false})
  }


  render() {

    return (
      <Drawer
        width={200}
        docked={false}
        open={this.state.drawOpened}
        onRequestChange={this._handleClose.bind(this)} >
        <AppBar title="Menu"
          iconElementLeft={<IconButton><IconClose /></IconButton>}
          onLeftIconButtonTouchTap = {this._handleClose.bind(this)}
        />
        <MenuItem onTouchTap={() => {this._handleClose();FlowRouter.go('/'); } }  >Home Page</MenuItem>
        <MenuItem onTouchTap={() => {this._handleClose();FlowRouter.go('/blank'); } }  >Blank Page</MenuItem>
        <MenuItem onTouchTap={() => {this._handleClose();FlowRouter.go('/desktop'); } }  >Desktop Page</MenuItem>

      </Drawer>
    )
  }
}
