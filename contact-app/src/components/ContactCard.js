import React from "react";
import user from "../images/user.png"

const ContactCard =(props)=> {
    const {id,name,email}=props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src="../images/user.png" alt="user"/>
                <div className="content">
                    <div className="header">hello
                    {name}
                    </div>
                    <div>{email}</div>
                    <i className="trash alternate outline icon"
                    style={{color:"red", alignContent:"right", marginTop:"7px" }}
                    ></i>
                </div>
            </div>
    );


}

export default ContactCard