import { Meteor } from 'meteor/meteor'
import { connect } from 'react-redux'
import { composeWithTracker } from 'react-komposer';
import EggsList from 'client/components/EggsList'
import Eggs from 'lib/collections/eggs'
import { increaseEggWalkCount } from 'client/ducks/eggs'


const composer = (props, onData) => {
  if (Meteor.subscribe('eggs').ready()) {
    const eggs = Eggs.find().fetch()
    onData(null, {
      eggs,
    })
  }
}

const mapStateToProps = (state, ownProps) => ({
  eggs: ownProps.eggs,
})

const mapDispatchToProps = dispatch => ({
  increaseEggWalkCount(eggId) {
    dispatch(increaseEggWalkCount(eggId, 1))
  },
})

export default composeWithTracker(composer)(
  connect(
    mapStateToProps,
    mapDispatchToProps)(EggsList)
  )
