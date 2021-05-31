import { Block,ListItem,List } from 'framework7-react';
import React, {Component} from 'react';
import {connect} from "react-redux";
//define the NodeType
class NodeType extends Component { 
  constructor(props) {
    super(props);
    this.state = {}   
  } 

  render() {
    return (      
      <Block>
        <List className="searchbar-not-found">
            <ListItem title="Nothing found"></ListItem>
        </List>           
        <List menuList  className="search-list searchbar-found">  
          {/* <ListItem link="/notetype/poll/" title="Poll" />       */}
          <ListItem link="/notetype/basic/" title="Basic" />
          <ListItem link="/notetype/invoice/" title="Invoice" />
        </List>
      </Block> 
    )
  }
}

const mapDispatchToProps = {
    
};
const mapStateToProps = (state) => {
    return {  };
};
export default connect(mapStateToProps,mapDispatchToProps)(NodeType);