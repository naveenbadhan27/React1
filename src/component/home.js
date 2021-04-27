import React,{Component} from 'react';
import './home.css';
import images from './images/d2.jpg';
import Images1 from './images/food1.jpg'; 
import Images2 from './images/d1.jpg'; 
import {Accordion, AccordionSummary, AccordionDetails ,Typography, Grid, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Home = () => {
    return(
        <div className="body">
            <div className="main-body">
                <img src={Images1} className="img-responsive" />
            </div>
            <div className="Main-About">
            <Typography variant="h1" gutterBottom className="About">
                Welcome to Silver Stone
            </Typography>
            </div>
        <Grid container spacing={0} className="Grid">
            <Grid item xs={3}>
            <Card className="">
                <CardActionArea>
                    <img src={Images2} className="img-responsive"/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Food Item Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Food Item Description
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={8}>
            <Card className="card">
                <CardContent>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="">Food 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="">Food 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="">Food 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="">Food 4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>



                </CardContent>
            </Card>
            </Grid>
        </Grid>
        </div>
    )
}


export default Home;