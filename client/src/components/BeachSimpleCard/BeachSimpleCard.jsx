
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'
export default function BeachSimpleCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Link to={props.link}>
      <CardActionArea>
          
        <CardMedia
          component="img"
          height="140"
          image="https://raw.githubusercontent.com/DevVitorPedra/Classic-Swell-React/main/client/src/assets/images/BL.jpg"
          alt="green iguana"
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="div">
            {props.beachName}
            
       
          </Typography>
          <Typography variant="body2" color="text.secondary">
            One of the best beaches for those which the skills are not developed yet!!
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
/*import React from 'react'
import './styles.css'

export default function BeachSimpleCard(props) {
    return (
        <div className="beach-simple-card">

            <img className="beach-img" src="https://raw.githubusercontent.com/DevVitorPedra/Classic-Swell-React/main/client/src/assets/images/BL.jpg" alt={`${props.beachName}`} />
            <h1>{props.beachName}</h1>
        </div>
    )
}*/
