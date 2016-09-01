import { Meteor } from 'meteor/meteor'

import './server/publications'
Meteor.startup(() => {
  console.log('hello from server')
})
