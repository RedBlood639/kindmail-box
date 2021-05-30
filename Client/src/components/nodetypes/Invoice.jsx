import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,List,ListInput,Button,Fab,Icon} from 'framework7-react';
import {getCurrentDate} from "../../utility/getCurrentDate"

class Invoice extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        description:"",
        clientname:"",
        date:getCurrentDate(),
        amount:0,
        curreny:"",
        prodescription:""
    }   
  } 
  onChangehandler = (event)=>{   
       
    this.setState({[event.target.name]:event.target.value})
  }
  render() {
    return (      
      <Page>
          <Navbar title={"Invoice"} backLink={"Back"}>         
        </Navbar>
        <Block>
        <List noHairlinesMd>          
          <ListInput          
              label={"Name *"}             
              type={"text"}
              placeholder={"Your name"}                      
              name={"name"}             
              required
              validate
              clearButton  
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
              clearButton     
              value = {this.state.description}      
              onChange = {this.onChangehandler}      
          /> 
          <ListInput            
              label={"Client Name"}             
              type={"text"}
              placeholder={"Client Name"}                      
              name={"clientname"}                                         
              clearButton    
              value = {this.state.clientname}      
              onChange = {this.onChangehandler}                                    
          /> 
          <ListInput            
              label={"Date"}             
              type={"date"}
              placeholder={"please choose ... "}                      
              name={"date"} 
              value = {this.state.date}      
              onChange = {this.onChangehandler}                                                                            
          /> 
          <ListInput            
              label={"Amount"}             
              type={"text"}
              placeholder={"Amount"}
              name={"amount"}                                                                      
              errorMessage="Only numbers please!"
              required
              validate
              pattern="[0-9,.]*"
              clearButton
              value = {this.state.amount}      
              onChange = {this.onChangehandler}    
          />         
          <ListInput            
              label={"Curreny"}             
              type={"text"}
              placeholder={"Curreny"}
              name={"curreny"}                                                                                   
              clearButton
              value = {this.state.curreny}      
              onChange = {this.onChangehandler}    
          /> 
          <ListInput            
              label="Product description"
              type="textarea"     
              name={"prodescription"}            
              placeholder={"Input your product description"}
              resizable={true}   
              clearButton    
              value = {this.state.prodescription}      
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
export default connect(mapStateToProps,mapDispatchToProps)(Invoice);