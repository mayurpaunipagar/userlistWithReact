import React from "react";

class Userlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.data.map((obj,index) => {
          return (
            <div className="card" key={index}>
              <div>{obj.fname + " " + obj.lname}</div>
              <div>age: {obj.age}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Userlist;
