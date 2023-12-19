import { useState } from "react";
import "./App.css";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SideBar />
        <MainContent />
      </Provider>
    </div>
  );
}

export default App;
