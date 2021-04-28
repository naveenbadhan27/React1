import React,{Component} from 'react';
import './login.css';
import {Paper, Grid, Card, CardActions, CardContent, Button, TextField} from '@material-ui/core';


const Login = () => {
    return(
        <div className="body">
            <Grid container> 
                <Grid item xs={6} className="box">
                        <form>
                        <CardContent>
                                <TextField className="form-control" label="Name" />
                            </CardContent>
                            <CardContent>
                                <TextField className="form-control" label="Email" />
                            </CardContent>
                            <CardContent>
                                <TextField className="form-control" label="Password" />
                            </CardContent>
                            <CardContent>
                                <TextField className="form-control" label="Contact" />
                            </CardContent>
                            <CardContent>
                                <Button variant="outlined" color="secondary">Register</Button>
                            </CardContent>
                        </form>
                </Grid>
                <Grid item xs={6} className="box">
                        <form>
                            <CardContent>
                                <TextField className="form-control" label="Email" />
                            </CardContent>
                            <CardContent>
                                <TextField className="form-control" label="Password" />
                            </CardContent>
                            <CardContent>
                                <Button variant="outlined" color="secondary">Login</Button>
                            </CardContent>
                        </form>
                </Grid>
            </Grid>
        </div>
    )
}


export default Login;