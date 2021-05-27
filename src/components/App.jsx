import React from 'react';
import {
  App,  
  View,
  Statusbar,
} from 'framework7-react';
import routes from '../routes';
// 
export default function (props) {
  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection    
    routes,
  };

  return (
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar bgColor = "red"/>     
      <View id="main-view" url="/" main className="safe-areas"/>
    </App>
  );
};
