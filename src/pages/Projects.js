import React from 'react';
import { Grid, Box } from '@mui/material';

const Projects = () => {
    return (
        <Box sx={{ flexGrow: 0.75 }}>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Grid item container direction="row" name="DevXP" justifyContent="center" spacing={3}>
                    <Grid item xs={3}>
                        <img width="150px" src="content/devxp.png"></img>
                    </Grid>
                    <Grid item xs={4}>
                        <h1>DevXP</h1>
                        <p> DevXP is an IaaS tool built to help developers build their Terraform configurations and automatically deploy them to their repositories.</p>
                    </Grid>

                </Grid>

                <Grid item name="InfoVis" spacing={2}>
                    InfoVis
                </Grid>

                <Grid item name="IVEfP" spacing={2}>
                    Psyc
                </Grid>

                <Grid item name="soundboy" spacing={2}>
                    Soundboy
                </Grid>
            </Grid>
        </Box>
    );
}
export default Projects;