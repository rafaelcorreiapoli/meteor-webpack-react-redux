import { Meteor } from 'meteor/meteor'
import { connect } from 'react-redux'
import { composeWithTracker } from 'react-komposer';
import EggsList from 'client/components/EggsList'
import Eggs from 'lib/collections/eggs'


const composer = (props, onData) => {
  if (Meteor.subscribe('eggs').ready()) {
    const eggs = Eggs.find().fetch()
    onData(null, {
      eggs,
    })
  }
}
export default composeWithTracker(composer)(EggsList)
