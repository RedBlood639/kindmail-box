import React, {Component} from 'react';
import {connect} from "react-redux";
import {  
    f7,
    Page,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
} from 'framework7-react';
// basic component 
class LoginScreen extends Component { 
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (      
      <Page>        
      
      </Page>         
    )
  }
}
const mapStateToProps = (state) => {
  return {  
    ...state 
  };
};
const mapDispatchToProps = { };
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);




