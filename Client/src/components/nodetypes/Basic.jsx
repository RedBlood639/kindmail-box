import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,List,ListInput,Button,Fab,Icon} from 'framework7-react';
//define the Basic
class Basic extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        description:""                        
    }   
  } 
  onChangehandler = (event)=>{         
    this.setState({[event.target.name]:event.target.value})
  }
  render() {
    return (      
      <Page>
          <Navbar title={"Basic"} backLink={"Back"}>         
        </Navbar>
        <Block>
        <List noHairlinesMd inlineLabels>          
          <ListInput          
              label={"Name *"}             
              type={"text"}
              placeholder={"Your name"}                      
              name={"name"}             
              required
              validate
              clearButton     
              info="Name must required"
              value = {this.state.name}      
              onChange = {this.onChangehandler}
          >             
          <span slot="info"></span>         
          </ListInput>
          <ListInput            
              label="Description"
              type="textarea"     
              name={"description"}            
              placeholder={"Input your description"}
              resizable={true}     
              value = {this.state.description}      
              onChange = {this.onChangehandler}                       
          />                               
          </List>
        </Block>
        <Block strong>        
          <Button fill>
            Save
          </Button>          
        </Block>  
      <Fab position="right-bottom" slot="fixed" >              
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>                
      </Fab>        
    </Page>
    )
  }
}

const mapDispatchToProps = {

};
const mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps,mapDispatchToProps)(Basic);