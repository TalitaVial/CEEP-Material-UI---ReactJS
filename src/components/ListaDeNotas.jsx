import React, { Component } from 'react';
import CardNota from './CardNota';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';

const style = {
  list: {display: 'flex', flexDirection: 'row',alignItems: 'flex-start', flexWrap: 'wrap'},
  listItem : { width: '20rem',display: 'block'}
}
class ListaDeNotas extends Component {
 render(){
   return (
      <List sx={style.list}>
        {this.props.notas.map((nota, index)=>{
          return(
             <ListItem sx={style.listItem} key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </ListItem>
        )})}
      </List>
   
   )}
}

export default ListaDeNotas