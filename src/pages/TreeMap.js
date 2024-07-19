import React from 'react';
import headshot from './headshot.png';
import "../App.css";

// class TreeMap extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: true
//         };
//     }

//     render() {
//         return (
//                 <iframe src="https://squisho.github.io/treemap/index.html" style={{ height: "100vh", width: "100vw" }}></iframe>

//             </div >
//         );
//     }
// }


const TreeMap = () => {

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <iframe class="iframe-placeholder" src="https://squisho.github.io/treemap/index.html" style={{ height: "100vh", width: "100vw" }}></iframe>

        </div>
    );
}
export default TreeMap;