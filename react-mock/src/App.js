import "./App.css";
import React from "react";
import Userlist from "./components/Userlist";
import UserData from "./dataset/userData";
const data=UserData;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Userlist data={data} />
        {console.log(data)}
      </div>
    );
  }
}

export default App;
