import React, {Component} from 'react';
import {connect} from "react-redux";
import Previewer from "./Previewer"
import 
{ 
  Page, 
  Navbar, 
  Block,
  Popup,
  NavRight,
  Link,
  List,
  ListInput,
  ListItem,
  Button,
  Fab,
  Icon,
  SwipeoutActions,
  SwipeoutButton,
  NavLeft
} from 'framework7-react';
import { addCategory,setPreviewer,previewCategory,compareroot } from "../../Actions/CategoryAction"

class PopupForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {                  
      _id:"",
      name:"",    
      description:"", 
      totalName:"",                 
      iscontent:false,
      popupOpened:false,
      parentId:null,
      previewer:false,    
    }   
  }           
  componentWillReceiveProps(nextProps) {   
      console.log(nextProps);         
      this.setState({              
        name:nextProps.preview.name,      
        description:nextProps.preview.description,        
        iscontent:nextProps.preview.iscontent,
        popupOpened:nextProps.opened,
        _id:nextProps.preview._id,        
        totalName:nextProps.preview.totalName,
        parentId:nextProps.preview.parentId
      });             
  }
  onChangehandler = (event)=>{         
    this.setState({[event.target.name]:event.target.value})
  }
  onSethandler = (flag)=>{       
    if(this.state.iscontent === false){
      this.setState({description:""})
    }
    this.setState({iscontent:flag});
  }
  onSave = async ()=>{        
    await this.props.addCategory(this.state);
    await this.props.onClose(false);      
  }
  onClickItem = async(id)=>{  
    await this.props.previewCategory(id);     
  }
  setOpepreviewer = async ()=>{
    await this.props.onClose(false);
    await this.props.setPreviewer(true)
  }
  backItem=(id)=>{          
      if(id === this.props.root){
        this.props.onClose(false);
      }else{
        this.props.previewCategory(this.state.parentId);         
      }
  }
  render() {
    return (
      <Popup      
        opened={this.state.popupOpened}
        onPopupClosed={()=>this.props.onClose(false)}
      >
      <Page>        
        <Navbar>
          <NavLeft >
            <Link onClick={()=>this.backItem(this.state._id)}>
              <Icon f7="arrow_left"></Icon>
            </Link>
          </NavLeft>
          {this.state._id===""?"New Content":this.state.name}
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
        <List noHairlinesMd inlineLabels>          
          <ListInput          
              label="Name"           
              type="text"
              placeholder="Your name"              
              validate
              name={"name"}
              onChange = {this.onChangehandler}                    
              value = {this.state.name}              
          >                      
          </ListInput>
          <ListItem 
            checkbox 
            color={this.state._id===""?"blue":"green"} 
            title="Do you need description ?"  
            onChange={()=>this.onSethandler(!this.state.iscontent)}
            checked = {this.state.iscontent}
          />
          { this.state.iscontent?
          ( 
            <ListInput
              label="Description"
              type="textarea"     
              name={"description"}            
              placeholder="Input your description"
              resizable={true}
              onChange = {this.onChangehandler}
              value = {this.state.description}
          />                     
          ):("")}          
          </List>
        </Block>
        <Block strong>        
          <Button fill  color={this.state._id===""?"blue":"green"} onClick={this.onSave}>
            Save
          </Button>          
        </Block>
        <Block>        
        <List menuList  className="search-list searchbar-found">
        { 
          this.props.preview.subs.map(element=>
             (
              <ListItem
                swipeout
                link
                title={element.name}  
                onClick = {()=>this.onClickItem(element._id)}              
                key={element._id}>
                    <SwipeoutActions left>
                      <SwipeoutButton color="red">Delete</SwipeoutButton>
                    </SwipeoutActions>
                </ListItem>
             )
          )
        }
      </List>       
        </Block>
          {this.state._id === ""?(""):(   
            <>
              <Fab position="right-bottom" slot="fixed" color="green" onClick = {()=>this.setOpepreviewer()}>
                <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>             
            </Fab>           
            <Previewer/>
            </>
          )}              
      </Page>
    </Popup>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    preview:state.categories.preview,
    root:state.categories.root    
  };
};
const mapDispatchToProps = {
  addCategory,
  previewCategory,
  setPreviewer,
  compareroot
};
export default connect(mapStateToProps,mapDispatchToProps)(PopupForm);




