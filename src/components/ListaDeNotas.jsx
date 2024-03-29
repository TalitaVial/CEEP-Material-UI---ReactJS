import React, { Component } from 'react';
import CardNota from './CardNota';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';

const style = {
  list: {minWidth: '50vw',display: 'flex', flexDirection: 'row',alignItems: 'flex-start', flexWrap: 'wrap'},
  listItem : {width: '20rem',display: 'block'}
}
class ListaDeNotas extends Component {

  constructor(){
    super()
    this.state = {notas: []}
    this._novasNotas = this._novasNotas.bind(this)
  }

 componentDidMount(){
   this.props.notas.inscrever(this._novasNotas)
 }

 componentWillUnmount(){
  this.props.notas.desinscrever(this._novasNotas)
 }

 _novasNotas(notas){
  this.setState({...this.state, notas})
 }

 render(){
   return (
      <List sx={style.list}>
        {this.state.notas.map((nota, index)=>{
          return(
             <ListItem sx={style.listItem} key={index}>
              <CardNota 
              indice={index}
              deletarNota={this.props.deletarNota} 
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria={nota.categoria}
              />
            </ListItem>
        )})}
      </List>
  
  
   )}
}

export default ListaDeNotas