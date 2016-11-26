import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import { render } from 'react-dom';

// Import needed templates
import BlankPage from '../../ui/pages/BlankPage.jsx';
import MainPage from '../../ui/pages/MainPage.jsx';

import LayoutWithLightMuiTheme from '../../ui/layouts/LayoutWithLightMuiTheme.jsx';
import BlankLayout from '../../ui/layouts/BlankLayout.jsx';
import DesktopLayout from '../../ui/layouts/LayoutWithAppBarAndLeftNev.jsx';



FlowRouter.route('/', {
  action() {
    mount(DesktopLayout, {content: <MainPage />, title:'Meteor React Scaffold App'});
  }
});

FlowRouter.route('/desktop', {
  action() {
    mount(DesktopLayout, {content: <MainPage />, title:'Meteor React Scaffold App'});
  }
});


FlowRouter.route('/lightmuitheme', {
  action() {
    mount(LayoutWithLightMuiTheme, {content: <MainPage />});
  }
});


FlowRouter.route('/blank', {
  action() {
    mount(BlankLayout, {content: <BlankPage />});
  }
});
