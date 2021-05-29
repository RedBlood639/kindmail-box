
import PopupForm from "./PopupForm";
import React, { Component } from 'react'
import { connect } from "react-redux";
import { getCategories,previewCategory,setInitial,deleteItem,compareroot} from "../../Actions/CategoryAction"
import { Page,Navbar,Link,Toolbar,List,ListItem,Fab,Icon,NavRight,Searchbar,SwipeoutActions,SwipeoutButton} from 'framework7-react';
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {      
      popupOpened:false,
      lists:[],      
    }
  }  
  setpopupOpened =  (isopen,isnew=false)=>{
    if(isnew === true && isopen === true){        
          this.props.setInitial();
    }
    this.setState({popupOpened:isopen});  
  }
  onClickItem = async(id)=>{
    await this.props.previewCategory(id);
    await this.props.compareroot(id);
    await this.setpopupOpened(true);    
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
                onClick = {()=>this.onClickItem(element._id)}
                title={element.name}                 
                key={element._id}>
                    <SwipeoutActions left>
                      <SwipeoutButton color="red" onClick={()=>this.props.deleteItem(element._id)}>Delete</SwipeoutButton>
                    </SwipeoutActions>
                </ListItem>
             )
          )
        }
      </List>
      {/* floating FAB */}    
      <Fab position="right-bottom" slot="fixed" onClick = {()=>this.setpopupOpened(true,true)}>
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>        
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
    lists:state.categories.lists,
    ispreviewer:state.categories.ispreviewer
  };
};
const mapDispatchToProps = {
  getCategories,
  previewCategory,
  setInitial,
  deleteItem,
  compareroot
};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
