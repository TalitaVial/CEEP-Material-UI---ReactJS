import React, {Component}from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';


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
      <Stack onSubmit={this._criarNota.bind(this)} component="form" sx={{width: '25ch'}} spacing={2} autoComplete="off">
        <TextField onChange={this._handleMudancaTitulo.bind(this)} sx={{minWidth: 400}} hiddenLabel id="filled-hidden-label-small" defaultValue="Título" variant="filled" size="small" />
        <TextField onChange={this._handleMudancaTexto.bind(this)} sx={{minWidth: 400}} id="filled-multiline-static" label="Multiline" multiline rows={6} defaultValue="Escreva sua Nota" variant="filled"/>
        <Button type="submit" sx={{background:'#add8e6'}}>Criar Nota<AddCircleIcon></AddCircleIcon></Button>
      </Stack>
    );
  }
}
 
export default FormularioCadastro;