import { Box, List, ListItem, TextField} from '@mui/material';
import React, {Component} from 'react';


const style={
    box: {display: 'flex', marginTop: '1.5rem'},
    list: {display: 'flex'},
    textField: {marginLeft: '8rem', width: '18rem'}

}
class ListaDeCategorias extends Component {

  render() { 
    return (
      <Box sx={style.box}>
        <List sx={style.list}>
          <ListItem>Categoria</ListItem>
          <ListItem>Categoria</ListItem>
          <ListItem>Categoria</ListItem>
        </List>
        <TextField sx={style.textField} id="outlined-basic" label="Insira uma categoria" variant="outlined" />
      </Box>   
    );
  }
}
 
export default ListaDeCategorias;