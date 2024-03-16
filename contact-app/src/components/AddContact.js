import React from "react";

class AddContact extends React.Component{
    render (){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name </label>
                        <input type="text" placeholder="Enter your name"></input>
                    </div>
                    
                    <div className="field">
                        <label>Email </label>
                        <input type="text" placeholder="Enter your email"></input>
                    </div>
                    <button className="ui button">Add</button>

                </form>
            </div>
        )
    }
}

export default AddContact;