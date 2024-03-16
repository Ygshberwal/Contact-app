
import React from "react";
import './App.css';
import AddContact from "./AddContact"
import ContactCard from "./ContactCard"
import ContactList from "./ContactList"
import Header from "./Header"
function App() {
  const contacts=[
    {
      id:"1",
      name:"Dipesh",
      email:"abc@xyz.com"
    },
    {
      id:"2",
      name:"Naresh",
      email:"pqr@xyz.com"
    }
  ]
  return (
    <div className="ui container">
      Hello world
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
