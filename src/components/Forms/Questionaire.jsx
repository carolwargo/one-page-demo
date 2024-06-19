import React from "react";

const Questionaire = () => {

    return (
        <div>      
        <h1>Questionaire</h1>
        <div className="container">
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="email@mail.com"/>
                </div>
</form>
           </div>     
        </div>
    );
    }       

export default Questionaire;