import React from 'react';
import Main from './component/Main';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
      

    </div>
  );
}

export default App;
