import React from 'react';
import {
  App,  
  View,
  Statusbar,
} from 'framework7-react';
import routes from '../routes';
import { Provider } from 'react-redux'
import { store, stateKernel } from '../store';
// 
export default function (props) {
  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.app', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes,
    // App Framework7 Redux state kernel
    stateKernel,
    // Disable F7 automated routing for Links
    clicks: {
      externalLinks: 'a[href="#"]'
    },
    // Disable F7 automated routing for backdrops    
    panel: {
      closeByBackdropClick: false
    },
    popup: {
      closeByBackdropClick: false
    }
  };
  return (
    <Provider store={store}>
      <App params={f7params}>
        {/* Statusbar */}
        <Statusbar/>
        <View id="main-view" url="/" main className="safe-areas"/>
      </App>
    </Provider>
  );
};
