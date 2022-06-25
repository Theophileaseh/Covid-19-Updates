import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducer from './country';

export default configureStore({
  reducer: {
    countries: countryReducer,
  },
  middleware: [logger, thunk],
});
