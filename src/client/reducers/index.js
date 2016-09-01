import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import counter from 'client/ducks/counter'

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  counter,
});

export default rootReducer
