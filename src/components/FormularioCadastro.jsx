import React, {Component}from 'react';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ButtonGroup from '@mui/material/ButtonGroup';
import NativeSelect from '@mui/material/NativeSelect'



const style = {
  formControl: {minWidth: '40vw',margin: '1rem'},
  textField: {margin: '1rem',fontFamily: 'Roboto',background: '#fff'},
  select: {margin: '1rem',fontFamily: 'Roboto',background: '#fff'},
  button: {display: 'flex', alignItems: 'center', justifyContent: 'center' ,background:'#74bbfb', padding: '.6rem', margin: '1rem'},
  addCircleIcon : {marginLeft: '.8rem'}
}

class FormularioCadastro extends Component {
  
  constructor(props){
    super(props);
    this.titulo="";
    this.texto = "";
    this.categoria = "";

  }

  _handleMudancaCategoria(event){
    event.stopPropagation()
    this.categoria = event.target.value
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
    this.props.criarNota(this.titulo, this.texto, this.categoria)
  }

  render() { 
    return (
      <FormControl sx={style.formControl} onSubmit={this._criarNota.bind(this)} component="form" autoComplete="off">
        <TextField onChange={this._handleMudancaTitulo.bind(this)} sx={style.textField} hiddenLabel id="filled-hidden-label-small" defaultValue="Título" variant="filled" size="small" />
        <NativeSelect onChange={this._handleMudancaCategoria.bind(this)} sx={style.select} variant="filled">
        <option>Sem categoria</option>
        {this.props.categorias.map((categoria) =>{
          return <option>{categoria}</option>
        })}</NativeSelect>
        <TextField onChange={this._handleMudancaTexto.bind(this)} sx={style.textField} id="filled-multiline-static" multiline rows={6} defaultValue="Escreva sua Nota" variant="filled"/>
        <ButtonGroup>
        <Button type="submit" sx={style.button}>Criar Nota<AddCircleIcon sx={style.addCircleIcon}></AddCircleIcon></Button>
        </ButtonGroup>  
      </FormControl>
    );
  }
}
 
export default FormularioCadastro;