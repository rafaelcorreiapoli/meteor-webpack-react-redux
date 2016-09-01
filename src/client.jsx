// src/client.jsx
import ReactDOM from 'react-dom';
import Root from 'client/components/Root';
import React from 'react';
import 'lib/methods'

Meteor.startup(() => {
  Package['msavin:mongol'].Mongol.showCollection('eggs')
  Package['msavin:mongol'].Mongol.showCollection('pokemons')

  ReactDOM.render(
    <Root />,
    document.getElementById('react-app')
  );
});
