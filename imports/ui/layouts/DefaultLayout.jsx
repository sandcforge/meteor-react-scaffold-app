import React from 'react';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        {this.props.content}
        </div>
      </MuiThemeProvider>
    )
  }


};
