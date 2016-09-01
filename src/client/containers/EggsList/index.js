import { Meteor } from 'meteor/meteor'
import EggsList from 'client/components/EggsList'
import Eggs from 'lib/collections/eggs'
import { increaseEggWalkCount } from 'client/ducks/eggs'
import reduxKomposer from 'client/components/ReduxKomposer'

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
  selectedEgg: sstate.eggs.get('selectedEgg'),
})

const mapDispatchToProps = dispatch => ({
  increaseEggWalkCount(eggId) {
    dispatch(increaseEggWalkCount(eggId, 1))
  },
})

export default reduxKomposer(composer, mapStateToProps, mapDispatchToProps)(EggsList)
