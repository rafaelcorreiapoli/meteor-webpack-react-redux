import React, { PropTypes } from 'react'
import Counter from 'client/containers/Counter'
import EggsList from 'client/containers/EggsList'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <EggsList />
      </div>
    )
  }
}

export default Welcome;
