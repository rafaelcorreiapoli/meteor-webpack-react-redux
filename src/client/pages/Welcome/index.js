import React, { PropTypes } from 'react'
import Counter from 'client/containers/Counter'
import EggsList from 'client/containers/EggsList'
import EggMethodListener from 'client/containers/EggMethodListener'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <EggsList />
        <EggMethodListener />
      </div>
    )
  }
}

export default Welcome;
