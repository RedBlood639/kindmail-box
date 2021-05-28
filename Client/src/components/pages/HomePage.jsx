import {
    Page,
    Navbar,    
    Link,
    Toolbar,        
    List,
    ListItem,       
    Fab,
    Icon,    
    NavRight,
    Searchbar,
} from 'framework7-react';
import PopupForm from "./PopupForm";
import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { getCategories } from "../../Actions/CategoryAction"
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBottom:true,
      popupOpened:false
    }
  }
  setisBottom = (flag)=>{    
    this.setState({isBottom:flag});
  }
  setpopupOpened = (flag)=>{       
    this.setState({popupOpened:flag});
  }
  async componentDidMount() {
    await this.props.getCategories();
  }
  
  render() {
    return (
      <Page>
      {/* menubar */}
      <Navbar title="CATEGORIES" backLink="Back">
        <NavRight>
        {/* change position footer */}
        <Link
            iconIos="f7:arrow_up_arrow_down_circle_fill"
            iconAurora="f7:arrow_up_arrow_down_circle_fill"
            iconMd="material:compare_arrows"
            onClick={() => this.setisBottom(!this.state.isBottom)}
        ></Link>
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
      {/* define the 404 Page */}
      <List className="searchbar-not-found">
        <ListItem title="Nothing found"></ListItem>
      </List>
      {/* define content */}
      <List className="search-list searchbar-found">
        <ListItem title="Group1"></ListItem>
        <ListItem title="Group2"></ListItem>      
        <ListItem title="Group3"></ListItem>
      </List>
      {/* floating FAB */}    
      <Fab position="right-bottom" slot="fixed" onClick = {() => this.setpopupOpened(true)}>
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
        <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>      
      </Fab>            
      {/* PopupForm */}
      <PopupForm 
        opened = {this.state.popupOpened}
        onClose = {()=>this.setpopupOpened(false)}
      />
      {/* toolbar for footer */}
      <Toolbar position={this.state.isBottom ? 'bottom' : 'top'}>  
        <Link textColor="blue">Home</Link>
        <Link textColor="blue">Chat</Link>
        <Link textColor="blue">Preview</Link>
      </Toolbar>
    </Page>
    )
  }
}

PopupForm.propTypes = {}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  getCategories
};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
