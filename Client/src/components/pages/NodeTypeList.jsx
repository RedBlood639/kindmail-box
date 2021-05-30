import React, {Component} from 'react';
import {connect} from "react-redux";
import 
{ 
  Page, 
  Navbar,    
  NavRight,
  Link,
  List,
  ListItem,  
  Searchbar,  
  Block
} from 'framework7-react';
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
        <Block>
        <List className="searchbar-not-found">
            <ListItem title="Nothing found"></ListItem>
        </List>           
        <List menuList  className="search-list searchbar-found">  
          <ListItem link="/notetype/poll/" title="Poll" />      
          <ListItem link="/notetype/basic/" title="Basic" />
          <ListItem link="/notetype/invoice/" title="Invoice" />
        </List>
      </Block>                       
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




