import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export function PictureCard(props) {
    const { pictureInfo: { title, route } } = props;
    console.log(props, 'asdasdasd')
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Picture"
                    height="140"
                    image={route}
                    title="Picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}