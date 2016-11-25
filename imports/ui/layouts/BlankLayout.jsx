import React from 'react';

export default class BlankLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        {this.props.content}
        </div>
    )
  }


};
