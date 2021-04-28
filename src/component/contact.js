import React,{Component} from 'react';
import './contact.css';
import {TextField,Accordion, AccordionSummary, AccordionDetails ,Typography, Grid, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Contact = () => {
    return(
        <div className="body">
            <Grid container>
                <Grid item xs={4} className="box">
                <Card className="box">
                    <CardContent>
                        <Typography className="" color="textSecondary" gutterBottom>
                        Address : SCF-2, Dugri Road, Ludhiana
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4} className="box">
                <Card className="box">
                    <CardContent>
                        <Typography className="" color="textSecondary" gutterBottom>
                        Contact : XXXX-XXXX-XX <br/>XXXX-XXXX-XX
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4} className="box">
                <Card className="box">
                    <CardContent>
                        <Typography className="" color="textSecondary" gutterBottom>
                        Address : SCF-2, Dugri Road, Ludhiana
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} className="box">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1712.1249652939887!2d75.84910771028812!3d30.87966858700261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd0d8982fd445566!2sHotel%20Silver%20Stone!5e0!3m2!1sen!2sin!4v1619505391862!5m2!1sen!2sin" 
                    className="Map"
                    allowfullscreen="" 
                    loading="lazy"
                    ></iframe>
                </Grid>
                <Grid item xs={6} className="box">
                    <Card>
                    <from>
                        <CardContent>
                            <TextField id="Name" label="Name" variant="outlined" className="form-control" />
                        </CardContent>
                        <CardContent>
                            <TextField id="Email" label="Email" variant="outlined" className="form-control" />
                        </CardContent>
                        <CardContent>
                            <TextField
                            id="Message"
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            className="form-control"
                            />
                        </CardContent>
                        <CardContent>
                            <Button variant="contained" color="primary">Submit</Button>
                        </CardContent>
                        </from>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}


export default Contact;