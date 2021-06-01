import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,List,ListInput,Button,Fab,Icon, NavRight,Link,Searchbar,NavLeft} from 'framework7-react';
import {getCurrentDate} from "../../utility/getCurrentDate"
import { OnaddNodeType,BackRouter1 ,subItemRouter} from "../../Actions/CategoryAction";
import {OnshowAlert} from "../../Actions/ShowAlertAction";
import ListComponent from "../nodetypes/ListComponent"
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
      this.props.OnaddNodeType(
        this.state,
        this.props.Lists.preview.itself,
        this.props.Lists.screenlist[this.props.Lists.screenlist.length-1].parentID
      );
    }
  }

  componentWillReceiveProps(nextProps) {    
    if(nextProps.Lists.preview.itself !== ""){  
      this.setState({
        name:nextProps.Lists.preview.list[0].data.name,
        description:nextProps.Lists.preview.list[0].data.description,
        clientname:nextProps.Lists.preview.list[0].data.clientname,
        date:nextProps.Lists.preview.list[0].data.date,
        amount:nextProps.Lists.preview.list[0].data.amount,
        curreny:nextProps.Lists.preview.list[0].data.curreny,
        prodescription:nextProps.Lists.preview.list[0].data.prodescription,
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
          <Navbar>  
          <NavLeft >
          <Link onClick={()=>this.props.BackRouter1(this.props.Lists.preview.itself,this.props.Lists.screenlist)}>
              <Icon f7="arrow_left"></Icon>
            </Link>
          </NavLeft>  
          {this.props.Lists.preview.itself === ""?"Basic":this.props.Lists.preview.list[0].data.name}
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
        {this.props.Lists.preview.itself === ""?"":(    
          <ListComponent />   )}
        {this.props.Lists.preview.itself === ""?"":(               
           <Fab position="right-bottom" slot="fixed" onClick={()=>this.props.subItemRouter(this.props.Lists.preview.itself,this.props.Lists.preview.list[0].data.nodetype)}>              
             <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>                
           </Fab>           
        )}      
    </Page>
    )
  }
}
const mapDispatchToProps = {
  OnaddNodeType,
  OnshowAlert,
  BackRouter1,
  subItemRouter

};
const mapStateToProps = (state) => {
    return {          
        ...state
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Invoice);