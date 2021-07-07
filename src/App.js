import './App.css'
import React from 'react';
import Start from './components/Start';
import store from './store/source';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
}

export default App;
