import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";
import ShareArticle from "./ShareArticle";



export default function BlogCard(props) {
  
  return (
    <>
    <Card sx={{ width: "30%", height: 440, bgcolor: 'whitesmoke', marginBottom: 10  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#0040AA", color: "#FFD720", fontSize: 11, textAlign: "center" }} aria-label="recipe">
            Mehan Houra
          </Avatar>
        }
        action={
          <IconButton aria-label="share">
            <ShareArticle />
          </IconButton>
        }
        title={props.article.title}
        subheader={props.article.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.article.coverUrl}
        alt={props.article.category}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className='hidetext'>
        {props.article.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ marginTop: 7 , float: 'right' }}>
        <Link to={"/blog/" + props.article.title}>Read Article...</Link>
      </CardActions>
    </Card>
    </>
  );
}
