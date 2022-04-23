import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const style = {
  card: {borderRadius: '.5rem'},
  cardContent : {display: 'block'},
  typographyS : {fontSize: '1.3rem', fontFamily: 'Roboto'},
  typography : {fontSize: '1rem', fontFamily: 'Roboto'},
  cardActions: {display: 'flex'},
  button : {background: '#add8e6'},
  editIcon: {marginLeft: '.4rem', display: 'flex',alignItems: 'center', justifyContent: 'center' },
  deletIcon: {marginLeft: '.4rem', display: 'flex',alignItems: 'center', justifyContent: 'center' }
}
class CardNota extends Component {

  deletar(){
    const indice = this.props.indice
    this.props.deletarNota(indice)
  }

  render() { 
    return (
      <Card sx={style.card}>
        <CardContent sx={style.cardContent}>
          <Typography sx={style.typographyS}>{this.props.titulo}</Typography>
          <Typography sx={style.typography} variant='body2'>{this.props.texto}</Typography>
        </CardContent>
        <CardActions sx={style.cardActions}>
          <Button sx={style.button}>Editar<EditIcon sx={style.editIcon}/></Button>
          <Button onClick={this.deletar.bind(this)} sx={style.button}>Remover<DeleteIcon sx={style.deletIcon}/></Button> 
        </CardActions>
      </Card>
    );
  }
}
 
export default CardNota