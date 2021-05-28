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
    SwipeoutActions,
    SwipeoutButton
    
} from 'framework7-react';
import PopupForm from "./PopupForm";
import React, { Component } from 'react'
import {connect} from "react-redux";
import { getCategories,previewCategory } from "../../Actions/CategoryAction"
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {      
      popupOpened:false,
      lists:[],
      
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
      <List menuList  className="search-list searchbar-found">
        { 
          this.props.lists.map(element=>
             (
              <ListItem
                swipeout
                link
                onClick = {()=>this.props.previewCategory(element._id)}
                title={element.name}                 
                key={element._id}>
                    <SwipeoutActions left>
                      <SwipeoutButton delete>Delete</SwipeoutButton>
                    </SwipeoutActions>
                </ListItem>
             )
          )
        }
      </List>
      {/* floating FAB */}    
      <Fab position="right-bottom" slot="fixed" onClick = {()=>this.setpopupOpened(true)}>
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
        <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>      
      </Fab>            
      {/* PopupForm */}
      <PopupForm 
        opened = {this.state.popupOpened}
        onClose = {this.setpopupOpened}
      />
      {/* toolbar for footer */}
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
    lists:state.categories.lists
  };
};
const mapDispatchToProps = {
  getCategories,
  previewCategory
};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
