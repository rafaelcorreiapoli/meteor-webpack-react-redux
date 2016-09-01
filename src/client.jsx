// src/client.jsx
import ReactDOM from 'react-dom';
import Root from 'client/components/Root';
import React from 'react';

Meteor.startup(() => {
  ReactDOM.render(
    <Root />,
    document.getElementById('react-app')
  );
});
