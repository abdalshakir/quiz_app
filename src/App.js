import './App.css'
import React from 'react';
import Questions from './components/Questions';
import Start from './components/Start';
import Result from './components/Result';
import store from './store/source';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Start />
      <Questions />
      <Result />
    </Provider>
  );
}

export default App;
