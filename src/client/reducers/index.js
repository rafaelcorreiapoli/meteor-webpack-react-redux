import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import counter from 'client/ducks/counter'
import eggs from 'client/ducks/eggs'
import methods from 'client/ducks/methods'

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  methods,
  counter,
  eggs,
});

export default rootReducer
