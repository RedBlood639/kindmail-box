import React, {Component} from 'react';
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
  ListItem
} from 'framework7-react';

class PopupForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {            
      popupOpened:false,
      name:"",
      iscontent:false,
      description:""
    }   
  }    
  componentWillReceiveProps(nextProps) {    
      this.setState({popupOpened:nextProps.opened});
  }
  onChangehandler = (event)=>{     
    this.setState({[event.target.name]:event.target.value})
  }
  onSethandler = (flag)=>{       
    this.setState({iscontent:flag});
  }
  render() {
    return (
      <Popup      
      opened={this.state.popupOpened}
      onPopupClosed={this.props.onClose}
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
              clearButton
              validate
              name={"name"}
              onChange = {(e)=>this.onChangehandler(e)}                    
              value = {this.state.name}              
          >                      
          </ListInput>
          <ListItem 
            checkbox 
            title="Do you need description ?"  
            onChange={()=>this.onSethandler(!this.state.iscontent)}
            checked = {this.state.iscontent}
          />
          <ListInput
            label="Description"
            type="textarea"     
            name={"description"}
            clearButton
            placeholder="Input your description"
            resizable={true}
            onChange = {(e)=>this.onChangehandler(e)}
            value = {this.state.description}
          />                     
          </List>
        </Block>
      </Page>
    </Popup>
    )
  }
}

export default PopupForm;




