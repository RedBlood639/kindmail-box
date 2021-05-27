import React,{useState} from 'react';
import {
    Page,
    Navbar,    
    Link,
    Toolbar,        
    List,
    ListItem,       
    Fab,
    Icon,    
    NavRight,
    Searchbar
} from 'framework7-react';
export default () => {
  const [isBottom, setisBottom] = useState(true);
return (
  <Page>
    {/* menubar */}
    <Navbar title="Back" backLink="Back">
      <NavRight>
      {/* change position footer */}
      <Link
          iconIos="f7:arrow_up_arrow_down_circle_fill"
          iconAurora="f7:arrow_up_arrow_down_circle_fill"
          iconMd="material:compare_arrows"
          onClick={() => setisBottom(!isBottom)}
      ></Link>
      {/*Search Component Link */}
        <Link
          searchbarEnable=".searchbar-demo"
          iconIos="f7:search"
          iconAurora="f7:search"
          iconMd="material:search"
        ></Link>  
      </NavRight>
      <Searchbar
        className="searchbar-demo"
        expandable
        searchContainer=".search-list"
        searchIn=".item-title"        
      ></Searchbar>
    </Navbar>       
    {/* define the 404 Page */}
    <List className="searchbar-not-found">
      <ListItem title="Nothing found"></ListItem>
    </List>
    {/* define content */}
    <List className="search-list searchbar-found">
      <ListItem title="Component1"></ListItem>      
      <ListItem title="Component2"></ListItem>      
      <ListItem title="Component3"></ListItem>                
    </List>
    {/* floating FAB */}
    <Fab position="right-bottom" slot="fixed" color="blue">
      <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>            
    </Fab>     
    {/* toolbar for footer */}
    <Toolbar position={isBottom ? 'bottom' : 'top'}>  
      <Link textColor="blue">Home</Link>
      <Link textColor="blue">Chat</Link>
      <Link textColor="blue">Preview</Link>
    </Toolbar>
  </Page>
  );
};
