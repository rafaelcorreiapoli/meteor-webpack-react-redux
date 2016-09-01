import Eggs from 'lib/collections/eggs'
import { Meteor } from 'meteor/meteor'

Meteor.publish('eggs', () => Eggs.find())

Meteor.startup(() => {
  console.log(Eggs.find().count())
  if (Eggs.find().count() === 0) {
    for (let i = 0; i < 10; i++) {
      Eggs.insert({
        walkedStart: 0,
        walkedTarget: 10,
      })
    }
  }
})
