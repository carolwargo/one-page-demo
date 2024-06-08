import React from "react";
import Clay2 from "../assets/images/Clay2.png";
import About from "../components/Home/About";


const HomePage = () => {

    return (
        <div className="w3-padding-64">
        <h1>Home Page</h1>
        <div className="container-fluid w3-white">
<div className="row justify-content-center align-items-center w3-padding-large">
<div className="col-sm-12 col-md-2 col-lg-2 px-0">
          <img src={Clay2} alt="clay" style={{width:'100%'}}/> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 w3-red "  style={{paddingLeft:'0px', paddingRight:'10px'}}>
        <div className="container">
            <h2>Column 1</h2>
            <p>Some text.. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente sed asperiores magnam nemo 
                mollitia assumenda! Quibusdam, sapiente. Sapiente 
                earum iure, aperiam, blanditiis ducimus nesciunt quod 
                culpa nulla provident dolores placeat!</p>
        </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2" style={{paddingLeft:'10px', paddingRight:'0px'}}>
          <img src={Clay2} alt="clay" style={{width:'100%'}}/> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 w3-red ">
        <div className="container">
            <h2>Column 1</h2>
            <p>Some text.. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente sed asperiores magnam nemo 
                mollitia assumenda! Quibusdam, sapiente. Sapiente 
                earum iure, aperiam, blanditiis ducimus nesciunt quod 
                culpa nulla provident dolores placeat!</p>
        </div>
        </div>
</div>
<div className="row justify-content-center align-items-center w3-padding-large">
<div className="col-sm-12 col-md-2 col-lg-2 px-0">
          <img src={Clay2} alt="clay" style={{width:'100%'}}/> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 w3-red "  style={{paddingLeft:'0px', paddingRight:'10px'}}>
        <div className="container">
            <h2>Column 1</h2>
        <p>Some text.. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente sed asperiores magnam nemo 
                mollitia assumenda! Quibusdam, sapiente. Sapiente 
                earum iure, aperiam, blanditiis ducimus nesciunt quod 
                culpa nulla provident dolores placeat!</p>
        </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2" style={{paddingLeft:'10px', paddingRight:'0px'}}>
          <img src={Clay2} alt="clay" style={{width:'100%'}}/> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 w3-red ">
        <div className="container">
            <h2>Column 1</h2>
        <p>Some text.. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente sed asperiores magnam nemo 
                mollitia assumenda! Quibusdam, sapiente. Sapiente 
                earum iure, aperiam, blanditiis ducimus nesciunt quod 
                culpa nulla provident dolores placeat!</p>
        </div>
        </div>
</div>
        </div>
        <div className="container-fluid w3-green">
          <About/>
            </div>
            <div className="container-fluid">
            
            </div>
            <div className="container-fluid w3-blue">
            
            </div>
            <div className="container-fluid">
            
            </div>
        </div>
    );
    };

export default HomePage;