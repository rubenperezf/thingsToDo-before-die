import React from "react";
import "../App.css";
import VisibleToDoList from "../containers/VisibleToDoList";
import AddToDo from "../containers/AddToDo";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <div className="box">
        <h1 className="web-header">
          Things that you should do before die by Ruben Perez
        </h1>
      </div>
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
