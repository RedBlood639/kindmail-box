import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,List,ListInput,Button,Fab,Icon,NavRight,Link,Searchbar,NavLeft} from 'framework7-react';
// import action
import { OnaddNodeType,BackRouter1,subItemRouter } from "../../Actions/CategoryAction";
import {OnshowAlert} from "../../Actions/ShowAlertAction";
import ListComponent from "../nodetypes/ListComponent"
//define the Basic

class Basic extends Component { 
  constructor(props) {
    super(props);
    this.state = {      
        name:"",
        description:"",
        nodetype:"BASIC"      
    };
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
      })
    }else{     
      this.setState({
        name:"",
        description:"",
      })
    }
  }
  
// 
  componentWillReceiveProps(nextProps) { 
    if(nextProps.Lists.preview.itself !== ""){            
      this.setState({
        name:nextProps.Lists.preview.list[0].data.name,
        description:nextProps.Lists.preview.list[0].data.description,
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
          <Navbar>      
          <NavLeft >
            <Link onClick={()=>this.props.BackRouter1(this.props.Lists.preview.itself,this.props.Lists.screenlist)}>
              <Icon f7="arrow_left"></Icon>
            </Link>
          </NavLeft>   
          {this.props.Lists.preview.itself === ""?"Basic":this.props.Lists.preview.list[0].data.name}
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
        {this.props.Lists.preview.itself === ""?"":(    
          <ListComponent />   )}    
        {this.props.Lists.preview.itself === ""?"":(             
        <Fab position="right-bottom" slot="fixed" 
             onClick={()=>this.props.subItemRouter(this.props.Lists.preview.itself,this.props.Lists.preview.list[0].data.nodetype)}>              
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
export default connect(mapStateToProps,mapDispatchToProps)(Basic);