import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './components/Main';
import styles from './styles.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Main);

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept('./components/Main.js', () => {
    // if you are using harmony modules ({modules:false})
    const NextMain = require('./components/Main').default;
    // in all other cases - re-require App manually
    render(NextMain);
  });
  // UNCOMMENT BOTTOM TO CLEAR OUT CHROME DEV TOOLS CONSOLE UPON HOT RELOAD
  // module.hot.addStatusHandler(status => {
  //   if (status === 'prepare') console.clear()
  // })
}