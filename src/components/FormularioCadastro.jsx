import React, {Component}from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ButtonGroup } from '@mui/material';

const style = {
  stack: {minWidth: '40vw',margin: '1rem'},
  textField: {margin: '1rem',fontFamily: 'Roboto',background: '#fff'},
  button: {display: 'flex', alignItems: 'center', justifyContent: 'center' ,background:'#74bbfb', padding: '.6rem', margin: '1rem'},
  addCircleIcon : {marginLeft: '.8rem'}
}

class FormularioCadastro extends Component {
  
  constructor(props){
    super(props);
    this.titulo="";
    this.texto = "";

  }

  _handleMudancaTitulo(event){
    event.stopPropagation()
    this.titulo = event.target.value
    
  }

  _handleMudancaTexto(event){
    event.stopPropagation()
    this.texto = event.target.value
    
  }

  _criarNota(event){
    event.preventDefault()
    event.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
  }

  render() { 
    return (
      <Stack sx={style.stack} onSubmit={this._criarNota.bind(this)} component="form" autoComplete="off">
        <TextField onChange={this._handleMudancaTitulo.bind(this)} sx={style.textField} hiddenLabel id="filled-hidden-label-small" defaultValue="Título" variant="filled" size="small" />
        <TextField onChange={this._handleMudancaTexto.bind(this)} sx={style.textField} id="filled-multiline-static" multiline rows={6} defaultValue="Escreva sua Nota" variant="filled"/>
        <ButtonGroup>
        <Button type="submit" sx={style.button}>Criar Nota<AddCircleIcon sx={style.addCircleIcon}></AddCircleIcon></Button>
        </ButtonGroup>  
      </Stack>
    );
  }
}
 
export default FormularioCadastro;