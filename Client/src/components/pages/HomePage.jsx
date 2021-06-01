
import React, { Component } from 'react'
import { connect } from "react-redux";
import ListComponent from "../nodetypes/ListComponent"
import { Page,Navbar,Link,Toolbar,Fab,Icon,NavRight,Searchbar} from 'framework7-react';
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }    
  componentDidMount() {} 
  render() {
    return (
      <Page>
      {/* menubar */}
      <Navbar title="CATEGORIES">
        <NavRight>             
        {/*Search Component Link */}
          <Link
            searchbarEnable=".searchbar-demo"
            iconIos="f7:search"
            iconAurora="f7:search"
            iconMd="material:search"
          ></Link>  
        </NavRight>
        <Searchbar
          className="searchbar-demo"
          expandable
          searchContainer=".search-list"
          searchIn=".item-title"        
        ></Searchbar>
      </Navbar>      
      <ListComponent />            
      <Fab position="right-bottom" slot="fixed"  href="/nodetype/" >              
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>                
      </Fab>                           
      <Toolbar bottom>  
        <Link textColor="blue">Home</Link>
        <Link textColor="blue">Chat</Link>
        <Link textColor="blue">Preview</Link>
      </Toolbar>
    </Page>
    )
  }
}


const mapStateToProps = (state) => {
  return  {

  };
};
const mapDispatchToProps = {    

};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
