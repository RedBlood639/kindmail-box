import { Block,ListItem,List ,SwipeoutActions,SwipeoutButton} from 'framework7-react';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {getListItems,getListItem} from "../../Actions/CategoryAction";
//define the ListComponent
class ListComponent extends Component { 
  constructor(props) {
    super(props);
    this.state = {}   
  } 

  componentDidMount() {
    this.props.getListItems();
  }  
  render() {
    return (      
        <Block>
            <List className="searchbar-not-found">
                <ListItem title="Nothing found"></ListItem>
            </List>
            <List menuList  className="search-list searchbar-found">
            {
                this.props.lists.map(element=>(
                <ListItem
                    swipeout
                    link 
                    title={element.data.name}                 
                    onClick = {()=>this.props.getListItem(element.data.parentId,element._id,element.data.nodetype)}
                    key={element._id}>
                        <SwipeoutActions left>
                        <SwipeoutButton color="red">Delete</SwipeoutButton>
                        </SwipeoutActions>
                </ListItem>
                ))
            }
            </List>
        </Block>
    )
  }
}

const mapDispatchToProps = {
    getListItems,
    getListItem
};
const mapStateToProps = (state) => {
    return {   lists:state.Lists.lists};
};
export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);