import { Box, List, ListItem, TextField} from '@mui/material';
import React, {Component} from 'react';

class ListaDeCategorias extends Component {
 
  render() { 
    return (
      <Box sx={{display: 'flex'}}>
        <List sx={{display: 'flex'}}>
          <ListItem>Categoria</ListItem>
          <ListItem>Categoria</ListItem>
          <ListItem>Categoria</ListItem>
        </List>
        <TextField id="outlined-basic" label="" variant="outlined" />
      </Box>   
    );
  }
}
 
export default ListaDeCategorias;