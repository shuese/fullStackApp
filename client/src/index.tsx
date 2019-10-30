import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { stores } from './stores';
import App from './components/App';

ReactDOM.render(
  <StrictMode>
    <Provider {...stores}>
      <App oneBlock />
    </Provider>
  </StrictMode>,
  document.getElementById('root'));
