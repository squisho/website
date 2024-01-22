import React from 'react';
import { Grid } from '@mui/material';

const Projects = () => {
    return (
        <Grid className="portfolio" container direction="column" spacing={2.5} paddingTop={5}>
                <Grid container direction="row" name="DevXP" justifyContent="center" alignItems="center" columnSpacing={11}>
                    <Grid item style={{display:'flex', justifyContent:'center'}} xs={2}> {/*style={{display:'flex',justifyContent:'center',alignItems:'center'}} */}
                        <a href="https://devxp.ca/">
                        <img width="300px" src="content/devxp.png" alt="DevXP Logo"></img>
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <h1>DevXP</h1>
                        <p> Started in January 2022 as part of a startup programming course, DevXP is a DevOps-aaS platform that streamlines and manages cumbersome and intricate DevOps pipeliens into a simple and easy to use interface.  </p>
                    </Grid>

                </Grid>

                <Grid item container direction="row" name="infovis" justifyContent="center" alignItems="center" columnSpacing={11}>
                <Grid item xs={4}>
                        <h1>InfoVis</h1>
                        <p>Designed and built a data visualization to explore real estate demographics and projections within communities in the CRD.  Data was pulled from the CMHC, provincial and municipal government databases, and local real estate organizations.  Data was analyzed and engineered in Python, and exported for use in a custom, interactive D3.js visualization.</p>
                    </Grid>
                    <Grid item style={{display:'flex', justifyContent:'center'}} xs={2}>
                        <a href="https://github.com/squisho/infovis">
                        <img width="300px" src="content/infovis.png" alt="InfoVid Webapp"></img>
                        </a>
                    </Grid>

                </Grid>
                <Grid item container direction="row" name="psyc" justifyContent="center" alignItems="center" columnSpacing={11}>
                    <Grid item style={{display:'flex', justifyContent:'center'}} xs={2}>
                        <img width="300px" src="content/perception.jpg" alt="Screenshot of Color Perception App"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <h1>Capstone</h1>
                        <p> My capstone project for my combined BSc in Computer Science and Psychology.  I explored the use of virtual reality to observe visual perception and visual illusions which are traditional studied using 2D representations or printouts.  The environment was built in Unity3D, with custom scripting for dynamic illusions as well as stereoscopic images.</p>
                    </Grid>

                </Grid>

                <Grid item container direction="row" name="soundboy" justifyContent="center" alignItems="center" columnSpacing={11}s>
                <Grid item xs={4}>
                        <h1>SoundBoy</h1>
                        <p> SoundBoy is a tool to help music producers automatically manage and organize their sample libraries.  Trained on a custom set of nearly 100,000 samples, it achieved an 87% success rate when tested on independent sample sets.  I was responsible for acquiring, cleaning and categorizing the datasets.  I also designed, built, and tested several models.  This classifier was embeded within an Electrum application and was successful in classifying large sets of user samples.</p>
                    </Grid>
                    <Grid item style={{display:'flex', justifyContent:'center'}} xs={2}>
                        <a href="https://github.com/julesyoungberg/soundboy">
                        <img width="300px" src="content/soundboy.png" alt="DevXP Logo"></img>
                        </a>
                    </Grid>
                    
                </Grid>
                </Grid>
    );
}
export default Projects;