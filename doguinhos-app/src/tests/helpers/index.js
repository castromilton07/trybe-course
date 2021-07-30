import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../redux/reducers/reducer';


const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }),initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, {
    initialState,
    store = createMockStore(initialState),
  } = {},
) => ({ ...render(<Provider store={ store }>{ component }</Provider>), store });

export default renderWithRedux;

/*
  renderWithRedux(<App />, { initialState: { name: 'lala', email: 'lalala' } }, store:  )
*/