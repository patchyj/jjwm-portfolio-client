import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    width: 300
  },
  media: {
    height: 170,
  },
  content: {
    minHeight: 200,
  }
});

// eslint-disable-next-line react/prop-types
const BlogCard = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item xs={3} md={5} className={`my-5 ${classes.grid}`}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={post.images[0]}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.tagline}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.author.firstName} {post.author.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.createdAtd}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogCard;
