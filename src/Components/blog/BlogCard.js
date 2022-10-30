// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import ShareIcon from '@mui/icons-material/Share';
// import { Link } from "react-router-dom";
// import ShareArticle from "./ShareArticle";
// import "./BlogCoverCard.css";
// import { animateScroll } from 'react-scroll';
// import  useEffect from 'react';




// export default function BlogCard(props, scrollToTop) {
  
//   return (
//     <div style={{
//       margin: 50
//     }}>
//     <Card sx={{ width: 300, height: 440, bgcolor: 'whitesmoke', marginBottom: 10 }} className="cardd">
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "#0040AA", color: "#FFD720", fontSize: 11, textAlign: "center" }} aria-label="recipe">
//             Mehan Houra
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="share" sx={{ marginRight: 5 }} >
//             <ShareArticle className="sharebutton" />
//           </IconButton>
//         }
//         title={props.article.title}
//         subheader={props.article.date}
//         className="titlehide" />
//       <CardMedia
//         component="img"
//         height="194"
//         image={props.article.articleImage}
//         alt={props.article.category}
//       />
//       <CardContent sx={{ heighT: 50 }}>
//         <Typography variant="body2" color="text.secondary" className='hidetext'>
//         {props.article.description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing sx={{ marginTop: 7 , float: 'right' }}>
//       <span   onClick={props.scrollToTop}><Link to={"/blog/" + props.article.title}>Read Article...</Link></span>
//       </CardActions>
//     </Card>
//     </div>
//   );
// }


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
import "./BlogCoverCard.css";
import { animateScroll } from 'react-scroll';
import  useEffect from 'react';




export default function BlogCard(props, scrollToTop) {
  
  return (
    <div style={{
      margin: 50
    }}>
    <Card sx={{ width: 300, height: 440, bgcolor: 'whitesmoke', marginBottom: 0 }} className="cardd">
      <div className='headcard'>
        <span className='logohead'>
          <img src='../logosvg.svg' alt='mehan houra' />
        </span>
        <span className='titlehead'>
          <h3>{props.article.title}</h3>
          <p>{props.article.date}</p>
        </span>
        <span className='sharehead'>
        <IconButton aria-label="share" sx={{ marginRight: 5 }} >
          <ShareArticle className="sharebutton" />
          </IconButton>
          </span>
      </div>
      <div className='cardimage'>
        <img src={props.article.articleImage} alt='plomber' />
      </div>
      <div>
        <Link to={"/blog/" + props.article.title}><p className='readmore'>Read Article...</p></Link>
      </div>
    </Card>
    </div>
  );
}
