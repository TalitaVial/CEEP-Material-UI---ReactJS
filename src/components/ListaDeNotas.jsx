import React, { Component } from 'react';
import CardNota from './CardNota';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';
class ListaDeNotas extends Component {
 render(){
   return (
    <>
      <List>
        {this.props.notas.map((nota, index)=>{
          return(
             <ListItem key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </ListItem>
        )})}
      </List>
   </>
   
   )}
}

export default ListaDeNotas