import React from 'react';
import headshot from './headshot.png';

const Home = () => {
    return (
        <div style={{ alignItems: "center", display: 'flex', flexDirection: "column", justifyContent: 'center' }}>
            <div style={{ height: "35px" }}></div>
            <img src={headshot} style={{ width: "100px", borderRadius: "50%" }}></img>
            <h2>Chris Petrone</h2>
            <div style={{ width: "50%" }}>
                <p style={{ "fontSize": 24 }}>I am a software developer with a passion for user-centric design.  Having studied both Computer Science and Psychology during my undergraduate at the University of Victoria, I take from a wide berth of knowledge and incorporate concepts from both to my design philosophy.  I have worked as a full stack software developer and have spent time building and deploying ML models.  I love data visualizations and enjoy making rich, interactive visualizations both as salient educative tools and also as interesting, artful experiences.</p>
            </div>
        </div>
    );
}
export default Home;