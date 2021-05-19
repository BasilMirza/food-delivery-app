import addUserReducer from '../reducers/user';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: addUserReducer,
});
const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });
const store = createStore(
  rootReducer,
  devToolsEnhancer(
    // Specify custom devTools options
  )
);
export default store;
