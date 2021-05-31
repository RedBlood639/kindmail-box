import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,List,ListInput,Button,Fab,Icon,NavRight,Link,Searchbar} from 'framework7-react';
// import action
import { OnaddNodeType } from "../../Actions/CategoryAction";
import {OnshowAlert} from "../../Actions/ShowAlertAction";
import NodeType from './NodeType';
//define the Basic
class Basic extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        description:"",
        nodetype:"BASIC"                           
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
    if(this.props.parentID !==""){
      this.setState({
        name:this.props.preview.data.name,
        description:this.props.preview.data.description,
      })
    }else{
      this.setState({
        name:"",
        description:"",
      })
    }
  }  
  render() {
    return (      
      <Page>
          <Navbar title={"Basic"} backLink={"Back"}>         
          <NavRight>
          <Link
            searchbarEnable=".searchbar-basic"
            iconIos="f7:search"
            iconAurora="f7:search"
            iconMd="material:search"
          ></Link>
        </NavRight>
        <Searchbar
          className="searchbar-basic"
          expandable
          searchContainer=".search-list"
          searchIn=".item-title"        
        ></Searchbar>  
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
      parentID:state.Lists.preview.id,      
      preview:state.Lists.preview.list[0],
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Basic);