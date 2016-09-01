import { check } from 'meteor/check'
import Eggs from 'lib/collections/eggs'

Meteor.methods({
  'eggs.increaseEggWalkCount'({ eggId, quantity }) {
    check(eggId, String)
    check(quantity, Number)

    return Eggs.update(eggId, {
      $inc: {
        walkedStart: quantity,
      },
    })
  },
})
