import { Stack, List, ListItem, TextField} from '@mui/material';
import React, {Component} from 'react';


const style={
    box: {display: 'flex', marginTop: '1.5rem', marginLeft: '3rem', maxWidth: '50%'},
    list: {display: 'flex', marginTop: '3rem', maxWidth: '10rem'},
    listItem: {background: '#74bbfb', borderRadius: '.5rem', margin: '.5rem'},
    textField: {marginLeft: '2rem', width: '18rem'},
    
}
class ListaDeCategorias extends Component {

  constructor(){
    super()
    this.state = {categorias: []}
    this._novaCategoria = this._novaCategoria.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novaCategoria)
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novaCategoria)
  }

  _novaCategoria(categorias){
    this.setState({...this.state, categorias})
  }

  _handleCategoria(e){
    if(e.key === 'Enter'){
      let valorCategoria = e.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
    
  }

  render() { 
    return (
      <Stack sx={style.box}>
          <TextField onKeyUp={this._handleCategoria.bind(this)} sx={style.textField} id="outlined-basic" label="Insira uma categoria" variant="outlined" />
          <List sx={style.list}>
          {this.state.categorias.map((categoria, index) => {
            return <ListItem key={index} sx={style.listItem}>{categoria}</ListItem>
          })}
          
        </List>
      </Stack>   
    );
  }
}
 
export default ListaDeCategorias;