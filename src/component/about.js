import React,{Component} from 'react';
import './about.css';
import Images4 from './images/food2.jpg'; 
import online from './images/online.png'; 
import pick from './images/pick.png'; 
import restaurant from './images/restaurant.png'; 
import { Card, CardContent, Typography,Grid, CardHeader, Avatar} from '@material-ui/core';
const About = () => {
    return(
        <div className="body">
            <div className="main-body2">
                <img src={Images4} className="img-responsive" />
            </div>
            <div className="box">
            <Card className="">
                <CardContent>
                    <Typography variant="h4" gutterBottom>About Us</Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</CardContent>
<CardContent>
<Grid container>
<Grid item xs={4} ClassName="box3">
<Card className="box2">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="">
            R
          </Avatar>
        }
        title="Online Booking"
      />
        <img src={online} className="img-responsive2" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
</Grid>

<Grid item xs={4} ClassName="box3">
<Card className="box2">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="">
            R
          </Avatar>
        }
        title="Pick Up"
      />
        <img src={pick} className="img-responsive2" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
</Grid>

<Grid item xs={4} ClassName="box3">
<Card className="box2">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="">
            R
          </Avatar>
        }
        title="Online Food Ordering"
      />
        <img src={restaurant} className="img-responsive2" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
</Grid>




    </Grid>
</CardContent>
            </Card>
            </div>
        </div>
    )
}


export default About;