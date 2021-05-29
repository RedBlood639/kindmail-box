import React, {Component} from 'react';
import {connect} from "react-redux";
//import f7 component
import { Page,Navbar,Block,Popup,NavRight,Link,List,ListInput,ListItem,Button,} from 'framework7-react';
// import actions
import { addCategory,setPreviewer ,setInitial ,onCreatechild} from "../../Actions/CategoryAction"
//define the Previewer
class Previewer extends Component { 
  constructor(props) {
    super(props);
    this.state = {                  
      name:"",      
      description:"",      
      iscontent:false,
      popupOpened:false,   
      parentID:"",
      totalName:""
    }   
  }
  componentWillReceiveProps(nextProps) {      
      this.setState({
          popupOpened:nextProps.opened,          
          parentID:nextProps.preview._id,
          totalName:nextProps.preview.totalName
     })
  }  
  setInit = ()=>{
    this.props.setPreviewer(false);    
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
  onCreatechild= async ()=>{
      await this.props.onCreatechild(this.state);
      await this.setInit();
      await this.setState({name:"",description:"",iscontent:false,popupOpened:false,parentID:"",totalName:""})
  }
  render() {
    return (
      <Popup 
        opened={this.props.ispreviewer}
        onPopupClosed={()=>this.setInit()}>
      <Page>
        <Navbar title={"New Content"}>
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
        <List noHairlinesMd inlineLabels>          
          <ListInput          
              label={"Name *"}             
              type={"text"}
              placeholder={"Your name"}
              validate
              onChange = {this.onChangehandler}    
              name={"name"}                                
              value = {this.state.name}              
          >                      
          </ListInput>
          <ListItem 
            checkbox 
            onChange={()=>this.onSethandler(!this.state.iscontent)}
            title={"Do you need description ?"}              
            checked = {this.state.iscontent}
          />
          { this.state.iscontent?
          ( 
            <ListInput
            onChange = {this.onChangehandler}    
              label="Description"
              type="textarea"     
              name={"description"}            
              placeholder="Input your description"
              resizable={true}              
              value = {this.state.description}
          />                     
          ):("")}          
          </List>
        </Block>
        <Block strong>        
          <Button fill onClick={this.onCreatechild}>
            Save
          </Button>          
        </Block>      
      </Page>
    </Popup>
    )
  }
}

const mapDispatchToProps = {
  addCategory,
  setPreviewer,
  setInitial,
  onCreatechild
};
const mapStateToProps = (state) => {
    return {
        preview:state.categories.preview,
        ispreviewer:state.categories.ispreviewer
      };
};
export default connect(mapStateToProps,mapDispatchToProps)(Previewer);