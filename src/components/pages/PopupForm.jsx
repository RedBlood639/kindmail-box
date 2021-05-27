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
  ListItem,
  Button,
} from 'framework7-react';

class PopupForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {                  
      name:"",      
      description:"",
      isLoading:false,
      iscontent:false,
      popupOpened:false
    }   
  }    
  componentWillReceiveProps(nextProps) {
      this.setState({              
        name:"",      
        description:"",
        isLoading:false,
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
  onSave = ()=>{
    if(this.state.isLoading) return;
    this.setState({isLoading:true});

    console.log(this.state);
    this.setState({isLoading:false});
  
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
          { this.state.iscontent?(
            <ListInput
            label="Description"
            type="textarea"     
            name={"description"}            
            placeholder="Input your description"
            resizable={true}
            onChange = {(e)=>this.onChangehandler(e)}
            value = {this.state.description}
          />                     
          ):("")}          
          </List>
        </Block>
        <Block strong>
          <Button fill preloader loading={this.state.isLoading} onClick={this.onSave}>
            Save
          </Button>
        </Block>
      </Page>
    </Popup>
    )
  }
}

export default PopupForm;




