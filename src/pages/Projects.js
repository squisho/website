import React from 'react';
import { Grid } from '@mui/material';

const textStyle = {
    fontSize: 10
};

const Projects = () => {
    return (
        <Grid className="portfolio" name="portfolio" container direction="column" padding={3} style={{ "marginTop": "-1px" }}>

            <Grid item container direction="row" name="treemap" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <h3>TreeMap</h3>
                    <p style={{ fontSize: 16 }}>And interactive map combining BC Data Catalogue forestry & park GIS databases with logging tenures, to help make the data more publically available.<br /><br />Data was selected from the past 6 years, cleaned and processed using mapshaper.js and layered over MapBox-GL base maps.</p>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    {/* <a href="https://squisho.github.io/treemap/index.html" target="_blank"> */}
                    <a href="/treemap" target="_blank">
                        <img width="75%" src="content/treemap.png" alt="InfoVid Webapp"></img>
                    </a>
                </Grid>

            </Grid>

            <Grid container item direction="row" justifyContent="center" alignItems='center' name="DevXP">
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <a href="https://github.com/devxp-ca" target="_blank">
                        <img width="75%" src="content/devxp.png" alt="DevXP Logo"></img>
                    </a>
                </Grid>
                <Grid item xs={8}>
                    <h3>DevXP</h3>
                    <p style={{ fontSize: 16 }}> Started in January 2022 as part of a startup programming course, DevXP is a DevOps-aaS platform that streamlines and manages cumbersome and intricate DevOps pipelines into a simple and easy to use interface.  </p>
                </Grid>

            </Grid>

            <Grid item container direction="row" name="infovis" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <h3>InfoVis</h3>
                    <p style={{ fontSize: 16 }}>Designed and built a data visualization to explore real estate demographics and projections within communities in the CRD.  Data was pulled from the CMHC, provincial and municipal government databases, and local real estate organizations.  Data was analyzed and engineered in Python, and exported for use in a custom, interactive D3.js visualization.</p>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <a href="https://github.com/squisho/infovis" target="_blank">
                        <img width="75%" src="content/infovis.png" alt="InfoVid Webapp"></img>
                    </a>
                </Grid>

            </Grid>
            <Grid item container direction="row" name="psyc" justifyContent="center" alignItems="center">
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <img width="75%" src="content/perception.jpg" alt="Screenshot of Color Perception App"></img>
                </Grid>
                <Grid item xs={8}>
                    <h3>Capstone</h3>
                    <p style={{ fontSize: 16 }}> My capstone project for my combined BSc in Computer Science and Psychology.  I explored the use of virtual reality to observe visual perception and visual illusions which are traditional studied using 2D representations or printouts.  The environment was built in Unity3D, with custom scripting for dynamic illusions as well as stereoscopic images.</p>
                </Grid>

            </Grid>

            <Grid item container direction="row" name="soundboy" justifyContent="center" alignItems="center" columnSpacing={3}>
                <Grid item xs={8}>
                    <h3>SoundBoy</h3>
                    <p style={{ fontSize: 16 }}> SoundBoy is a tool to help music producers automatically manage and organize their sample libraries.  Trained on a custom set of nearly 100,000 samples, it achieved an 87% success rate when tested on independent sample sets.  I was responsible for acquiring, cleaning and categorizing the datasets.  I also designed, built, and tested several models.  This classifier was embeded within an Electrum application and was successful in classifying large sets of user samples.</p>
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center' }} xs={3}>
                    <a href="https://github.com/julesyoungberg/soundboy" target="_blank">
                        <img width="75%" src="content/soundboy.png" alt="DevXP Logo"></img>
                    </a>
                </Grid>

            </Grid>
        </Grid>
    );
}
export default Projects;