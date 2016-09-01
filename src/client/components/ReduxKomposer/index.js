import { connect } from 'react-redux'
import { composeWithTracker } from 'react-komposer';


export default
  (composer, mapStateToProps, mapDispatchToProps) =>
    ComposedComponent =>
      composeWithTracker(composer)(
        connect(mapStateToProps, mapDispatchToProps)(
          ComposedComponent
        )
      )
