import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers'
import firebase from 'firebase'
import DisplayData from "./components/DisplayData";

class App extends Component {


  constructor(props){
    super(props);
      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyBVGsSHW9uojc_12T6FnraJKTxCmKBMN3k",
          authDomain: "cse110practice.firebaseapp.com",
          databaseURL: "https://cse110practice.firebaseio.com",
          projectId: "cse110practice",
          storageBucket: "cse110practice.appspot.com",
          messagingSenderId: "342670161732"
      };
      firebase.initializeApp(config);


  }
  render() {
    return (
     <div>
       <TeamMembers db={firebase}/>
         <DisplayData db = {firebase}/>

     </div>

    );
  }
}

export default App;
