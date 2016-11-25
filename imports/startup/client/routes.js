import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import { render } from 'react-dom';

// Import needed templates
import MainPage from '../../ui/pages/MainPage.jsx';
import DefaultFrame from '../../ui/layouts/DefaultFrame.jsx';


FlowRouter.route('/', {
  action() {
    mount(DefaultFrame, {content: <MainPage />});
  }
});
