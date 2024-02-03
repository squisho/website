import React from 'react';
const Resume = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', height:'100vh'}}>
            <object data="content/Christopher_Petrone_Resume.pdf" type="application/pdf" height="100%" width="100%" scale={7}>
            </object> 
        </div>
    );
}
export default Resume;