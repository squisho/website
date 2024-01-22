import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <Grid className="contact" container direction="column" columnSpacing={2.5} paddingTop={5}>
                <Grid container direction="row" name="email" justifyContent="center" alignItems="center" columnSpacing={20}>

                    <Grid item >
                        <text>Please contact me via e-mail any time at </text>
                        <Link to="" onClick={() => window.location = 'mailto:ctpetrone@gmail.com'}>
                        <text style={{textDecorationLine:'underline'}}>ctpetrone@gmail.com</text>
                        </Link>
                    </Grid>

                </Grid>

                <Grid container direction="row" name="github" justifyContent="center" alignItems="center" paddingTop={5} columnSpacing={11}>

                    <Grid item style={{display:'flex', justifyContent:'center'}}> 
                        <a href="https://github.com/squisho" target="_blank" rel="noreferrer">
                        <img width="50px" src="content/github.jpg" alt="GMail Logo"></img>
                        </a>
                    </Grid>
                    <Grid item style={{display:'flex', justifyContent:'center'}}> {/*style={{display:'flex',justifyContent:'center',alignItems:'center'}} */}
                        <a href="https://www.linkedin.com/in/cpetrone/s">
                        <img width="50px" src="content/linkedin.png" alt="GMail Logo"></img>
                        </a>
                    </Grid>
                    <Grid item style={{display:'flex', justifyContent:'center'}}> {/*style={{display:'flex',justifyContent:'center',alignItems:'center'}} */}
                        <Link to="" onClick={() => window.location = 'mailto:ctpetrone@gmail.com'}>
                        <img width="50px" src="content/gmail.png" alt="GMail Logo"></img>
                        </Link>
                    </Grid>
                </Grid>
                </Grid>
    );
}
export default Contact;