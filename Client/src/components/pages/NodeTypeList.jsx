import React, {Component} from 'react';
import {connect} from "react-redux";
import 
{ 
  Page, 
  Navbar,    
  NavRight,
  Link,
  Searchbar,  
} from 'framework7-react';
import NodeType from '../nodetypes/NodeType';
// component for node types
class NodeTypeList extends Component { 
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (      
      <Page>        
       <Navbar title="NodeTypeList" backLink="Back">   
       <NavRight>
        <Link
              searchbarEnable=".searchbar-nodetype"
              iconIos="f7:search"
              iconAurora="f7:search"
              iconMd="material:search"
          />
        </NavRight> 
          <Searchbar
            className="searchbar-nodetype"
            expandable
            searchContainer=".search-list"
            searchIn=".item-title"
          ></Searchbar>
        </Navbar>
        <NodeType/>                      
      </Page>         
    )
  }
}
const mapStateToProps = (state) => {
  return {   
  };
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps,mapDispatchToProps)(NodeTypeList);




