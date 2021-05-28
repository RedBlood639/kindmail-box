import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
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
} from 'framework7-react';
import { addCategory } from "../../Actions/CategoryAction"
class PopupForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {                  
      name:"",      
      description:"",      
      iscontent:false,
      popupOpened:false,      
    }   
  }    
  componentWillReceiveProps(nextProps) {    
      console.log(nextProps);
      this.setState({              
        name:"",      
        description:"",        
        iscontent:false,
        popupOpened:nextProps.opened
      });             
  }
  onChangehandler = (event)=>{         
    this.setState({[event.target.name]:event.target.value})
  }
  onSethandler = (flag)=>{       
    this.setState({iscontent:flag});
  }
  onSave = async ()=>{    
    await this.props.addCategory(this.state);
    await this.props.onClose(false);      
  }
  render() {
    return (
      <Popup      
        opened={this.state.popupOpened}
        onPopupClosed={()=>this.props.onClose(false)}
      >
      <Page>
        <Navbar title="Create Content">
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
            title="Do you need description ?"  
            onChange={()=>this.onSethandler(!this.state.iscontent)}
            checked = {this.state.iscontent}
          />
          { this.state.iscontent?(
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
          <Button fill  onClick={this.onSave}>
            Save
          </Button>          
        </Block>
      </Page>
    </Popup>
    )
  }
}
PopupForm.propTypes = {  
  onClose:PropTypes.func.isRequired,
  opened:PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => {
  return {
    preview:state.categories.preview
  };
};
const mapDispatchToProps = {
  addCategory
};
export default connect(mapStateToProps,mapDispatchToProps)(PopupForm);




