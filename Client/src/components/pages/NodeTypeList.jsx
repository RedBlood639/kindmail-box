import React, {Component} from 'react';
import {connect} from "react-redux";
import 
{ 
  Page, 
  Navbar,    
  NavRight,
  Link,
  Searchbar,  
  Block,
  ListItem,
  List,
  NavLeft,
  Icon
} from 'framework7-react';
import {BackRouter2} from "../../Actions/CategoryAction";
// component for node types
class NodeTypeList extends Component { 
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (      
      <Page>        
       <Navbar>   
        <NavLeft >
          <Link onClick = {()=>this.props.BackRouter2(this.props.Lists.screenlist)}>
              <Icon f7="arrow_left"></Icon>
          </Link>
        </NavLeft>   
        {"NodeTypeList"}          
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
          <ListItem link="/nodetype/basic/" title="Basic" />
          <ListItem link="/nodetype/invoice/" title="Invoice" />
        </List>
      </Block> 
      </Page>         
    )
  }
}
const mapStateToProps = (state) => {
  return {  
    ...state 
  };
};
const mapDispatchToProps = {
  BackRouter2
};
export default connect(mapStateToProps,mapDispatchToProps)(NodeTypeList);




