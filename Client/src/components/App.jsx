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
  };
  return (
    <Provider store={store}>
      <App params={f7params}>
        {/* Statusbar */}
        <Statusbar/>
        <View id="main-view" url="/home/" main className="safe-areas"/>
        <View id="nodetype-view" url="/nodetype/"  className="safe-areas"/>        
        <View id="basic-view" url="/nodetype/basic/"  className="safe-areas"/>        
        <View id="invoice-view" url="/nodetype/invoice/"  className="safe-areas"/>        
      </App>
    </Provider>
  );
};
