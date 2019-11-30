import React from "react";
import "../App.css";
import VisibleToDoList from "../containers/VisibleToDoList";
import AddToDo from "../containers/AddToDo";
import Footer from "./Footer";
import Delorean from './Delorean.js'

const App = () => {
  return (
    <div>
      <div className="box">
        <h1 className="web-header">
          Bucket List by Ruben Perez
        </h1>
      </div>
      <Delorean />
      <div className="web-body">
        <AddToDo />
        <div className="list">
          <VisibleToDoList />
        </div>
        <div className="footer">
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
