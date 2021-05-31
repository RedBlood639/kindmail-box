import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,List,ListInput,Button,Fab,Icon, NavRight,Link,Searchbar} from 'framework7-react';
import {getCurrentDate} from "../../utility/getCurrentDate"
import { OnaddNodeType } from "../../Actions/CategoryAction";
import {OnshowAlert} from "../../Actions/ShowAlertAction";
import NodeType from './NodeType';
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
        prodescription:"",
        nodetype:"INVOICE"    
    }   
  } 
  onChangehandler = (event)=>{          
    this.setState({[event.target.name]:event.target.value})
  }
  onSavehandler = ()=>{
    if(this.state.name.trim() === ""){
        this.props.OnshowAlert("Warning","Name must required");
    }else{      
      this.props.OnaddNodeType(this.state);
    }
  }
  componentDidMount() {      
    if(this.props.parentID !==null){
      this.setState({
        name:this.props.preview.data.name,
        description:this.props.preview.data.description,
        clientname:this.props.preview.data.clientname,
        date:this.props.preview.data.date,
        amount:this.props.preview.data.amount,
        curreny:this.props.preview.data.curreny,
        prodescription:this.props.preview.data.prodescription,
      })
    }else{
      this.setState({
        name:"",
        description:"",
        clientname:"",
        date:getCurrentDate(),
        amount:0,
        curreny:"",
        prodescription:""})
    }
  }  
  render() {
    return (      
      <Page>
          <Navbar title={"Invoice"} backLink={"Back"}>  
          <NavRight>
          <Link
            searchbarEnable=".searchbar-invoice"
            iconIos="f7:search"
            iconAurora="f7:search"
            iconMd="material:search"
          ></Link>  
        </NavRight>
        <Searchbar
          className="searchbar-invoice"
          expandable
          searchContainer=".search-list"
          searchIn=".item-title"        
        ></Searchbar>       
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
          <Button fill onClick={this.onSavehandler}>
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
  OnaddNodeType,
  OnshowAlert

};
const mapStateToProps = (state) => {
    return {     
       Lists:state.Lists.lists,
       parentID:state.Lists.preview.parentID,
       preview:state.Lists.preview.list[0],
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Invoice);