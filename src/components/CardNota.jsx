import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


class CardNota extends Component {
  render() { 
    return (
      <Card sx={{ width: 600}}>
        <CardContent sx={{textAlign:'flex-start'}}>
          <Typography sx={{fontSize: 14}}>{this.props.titulo}</Typography>
          <Typography variant='body2'>{this.props.texto}</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Button>Editar Nota<EditIcon /></Button>
          <Button>Remover nota<DeleteIcon/></Button> 
        </CardActions>
      </Card>
   
    );
  }
}
 
export default CardNota;