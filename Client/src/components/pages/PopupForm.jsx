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
  Icon
} from 'framework7-react';
import { addCategory,setPreviewer } from "../../Actions/CategoryAction"

class PopupForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {                  
      name:"",            
      description:"", 
      totalName:"",     
      iscontent:false,
      popupOpened:false,
      previewer:false,
      _id:"",
      parentID:"root" 
    }   
  }           
  componentWillReceiveProps(nextProps) {  
    
      this.setState({              
        name:nextProps.preview.name,      
        description:nextProps.preview.description,        
        iscontent:nextProps.preview.iscontent,
        popupOpened:nextProps.opened,
        _id:nextProps.preview._id,
        totalName:nextProps.preview.totalName
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
  setOpepreviewer = async ()=>{
    await this.props.onClose(false);
    await this.props.setPreviewer(true)
  }
  render() {
    return (
      <Popup      
        opened={this.state.popupOpened}
        onPopupClosed={()=>this.props.onClose(false)}
      >
      <Page>
        <Navbar title={this.state._id===""?"New Content":this.state.totalName}>
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
              {/* floating FAB */}    
          {this.state._id === ""?(""):(   
            <>   
              <Fab position="right-bottom" slot="fixed" color="green" onClick = {()=>this.setOpepreviewer()}>        
                <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
                <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>      
            </Fab>             <Previewer/>
            </>
          )}  
  
      </Page>
    </Popup>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    preview:state.categories.preview    
  };
};
const mapDispatchToProps = {
  addCategory,
  setPreviewer
};
export default connect(mapStateToProps,mapDispatchToProps)(PopupForm);




