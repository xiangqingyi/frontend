import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AxiosHandle from './utils/request';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import AxiosHandle from './utils/request';
// import App from './router';

// if (window.location.protocol === 'https:' && navigator.serviceWorker) {
//   window.addEventListener('load', () => {
//     const sw = '/service-worker.js';
//     navigator.serviceWorker.register(sw);
//   })
// }
// console.log(process.env.NODE_ENV);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// AxiosHandle.axiosConfigInit
